import shortlyimg from './assets/logo.svg';
import illustration from './assets/illustration-working.svg';
import brandrecognition from './assets/icon-brand-recognition.svg';
import detailedrecords from './assets/icon-detailed-records.svg';
import customizable from './assets/icon-fully-customizable.svg';
import facebookIcon from './assets/icon-facebook.svg';
import instagramIcon from './assets/icon-instagram.svg';
import pinterestIcon from './assets/icon-pinterest.svg';
import twitterIcon from './assets/icon-twitter.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';

function Url(){
    const[url, setUrl] = useState("");
    const[newUrl, setNewUrl] = useState([]);
    const [error, setError] = useState(null);

    const fetchUrlData = async () => {
        try {
            const response = await axios.post(
                "https://api-ssl.bitly.com/v4/shorten",
                {
                    long_url: url // Bitly expects the URL to shorten as "long_url"
                },
                {
                    headers: {
                        Authorization: `Bearer c17579c85e764d43c96571bf099bb2f997d5e31f`,
                        "Content-Type": "application/json"
                    }
                }
            );

            const newUrls = {
                original: url,
                shortened: response.data.link, // Bitly returns the shortened link in response.data.link
            }
            
            setNewUrl([newUrls, ...newUrl]); // add the newUrls object to the array 
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error("Error fetching data:", error.response ? error.response.data : error.message);
    setError("Invalid URL or unable to fetch data.");
    setNewUrl([]);
        }
    };

    function displayNav(){
        document.getElementById("nav").style.display = "block";
        document.getElementById("menuicon1").style.display = "none"
        document.getElementById("menuicon2").style.display = "flex"
    }

    function closeNav(){
        document.getElementById("nav").style.display = "none";
        document.getElementById("menuicon1").style.display = "flex";
        document.getElementById("menuicon2").style.display = "none";
    }

    return(
        <>
        <div>
        <div className='d-flex justify-content-between mx-4 mt-3'>
            <img className='shortly_img' src={shortlyimg} alt="logo" />
            <FontAwesomeIcon id='menuicon1' onClick={displayNav} style={{cursor:"pointer"}} className='menuIcon' icon={faBars} />
            <FontAwesomeIcon id='menuicon2' onClick={closeNav} style={{cursor:"pointer"}} className='menuIcon2' icon={faBars} />
        </div>
        <div className=''>
        <div id='nav' className='navigation text-center rounded'>
        <img className='shortly_img2' src={shortlyimg} alt="logo" />
            <p className='nav-content'> <a style=
            {{textDecoration:"none"}} href='#features' className='fw-bold nav-content'>Features</a></p>
            <p className='fw-bold nav-content'>Pricing</p>
            <a style={{textDecoration:"none"}} href='#resources' className='fw-bold nav-content'>Resources</a>
            <hr className='bg-white'/>
            <p className='fw-bold nav-content'>login</p>
            <p className='fw-bold sign-up nav-content'>sign up</p>           
            <button className='sign-up-btn fw-bold text-white'>Sign Up</button>
        </div>
        </div>
        <div className='main-content'>
            <div className='illustration-div'>
        <img className='illustration-img' src={illustration} alt="illustration" />
        <div className='main-texts'>
        <h1 className='text text-center mt-4'>More than just shorter links</h1>
        <p className='p1 text-center mt-3'>Build your brands recognition and get detailed insights on how your links are performing</p>
        <div className='btn-div d-flex justify-content-center'>
        <button className='start-btn fw-bold rounded text-white p-2'>Get started</button>
        </div>
        </div>
        </div>
        <div className='d-flex shorten-div mt-4 px-5'>
        <input value={url} onChange={(e) => setUrl(e.target.value)} className='link-input rounded p-2' type="text" placeholder='shorten a link here..'/>
        <button onClick={fetchUrlData} className='shorten-btn fw-bold rounded p-2 mt-2 text-white'>Shorten it!</button>

        {newUrl.map((entry, index) => ( 
            <div key={index} className='mt-5 new-url-div text-center'>
                {/* Display the shortened URL or error message */}
                <p className='url'>{entry.original}</p>
                <hr />
                  <p><a href={entry.shortened} target="_blank" rel="noopener noreferrer">{entry.shortened}</a></p>
{/*                   <button className='copy-btn rounded text-white p-3 fw-bold'>Copy</button> */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                </div> ))} 

        </div>
        <div className='statistics-div bg-secondary'>
        <h1 className='p2 text-center mt-5 pt-4'>Advanced statistics</h1>
        <p className='p3 text-center text-light'>Track how your links are performing across the web with our advanced statistics dashboard</p>

        <div className='stats'>
        <div className='brand-div text-center bg-light p-3 mx-3 rounded'>
        <div className='d-flex justify-content-center'>
            <div className='brand-img-div'>
            <img className='mt-4' src={brandrecognition} alt="brand-recognition-img" />
            </div>
            </div>
            <h1 className='mt-3' style={{color: 'hsl(257, 27%, 26%)', fontWeight: 700}}>Brand Recognition</h1>
            <p className='p3'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
            </p>
        </div>
        
        <div className='brand-div text-center bg-light p-3 mx-3 rounded'>
            <div className='d-flex justify-content-center'>
            <div className='brand-img-div'>
            <img className='mt-4' src={detailedrecords} alt="records-img" />
            </div>
            </div>
            <h1 className='mt-3' style={{color: 'hsl(257, 27%, 26%)', fontWeight: 700}}>Detailed Records</h1>
            <p className='p3'>Gains insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions 
            </p>
        </div>

        <div className='brand-div text-center bg-light p-3 mx-3 rounded'>
        <div className='d-flex justify-content-center'>
            <div className='brand-img-div'>
            <img className='mt-4' src={customizable} alt="customizable-img" />
            </div>
            </div>
            <h1 className='mt-3' style={{color: 'hsl(257, 27%, 26%)', fontWeight: 700}}>Fully Customizable</h1>
            <p className='p3'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement
            </p>
        </div>
        </div>
        </div>

        <div className='boost-div'>
        <h1  className='text-center mt-5'>Boost your links today</h1>
        <div className='d-flex justify-content-center'>
        <button className='started-btn fw-bold rounded p-2 mt-2 text-white'>Get started</button>
        </div>
        </div>

        <div className='footer text-center mt-5 py-3'>
            <h1 className='text-white pt-5'>Shortly</h1>
            
            <div>
            <p id='features' className='text-white mt-5 fw-bold'>Features</p>
            <p className='text-secondary fw-bold'>Link Shortening</p>
            <p className='text-secondary fw-bold'>Branded Links</p>
            <p className='text-secondary fw-bold'>Analytics</p>
            </div>

            <div>
            <p id='resources' className='text-white mt-5 fw-bold'>Resources</p>
            <p className='text-secondary fw-bold'>Blog</p>
            <p className='text-secondary fw-bold'>Developers</p>
            <p className='text-secondary fw-bold'>Support</p>
            </div>

            <div>
            <p className='text-white mt-5 fw-bold'>Company</p>
            <p className='text-secondary fw-bold'>About</p>
            <p className='text-secondary fw-bold'>Our Team</p>
            <p className='text-secondary fw-bold'>Careers</p>
            <p className='text-secondary fw-bold'>Contact</p>
            </div>

            <div className='d-flex justify-content-evenly pt-5'>
                <img className='social-media-icons' src={facebookIcon} alt="facebookIcon" />
                <img className='social-media-icons'  src={instagramIcon} alt="instagramIcon" />
                <img className='social-media-icons'  src={twitterIcon} alt="twitterIcon" />
                <img className='social-media-icons'  src={pinterestIcon} alt="pinterestIcon" />
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Url;