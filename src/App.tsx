import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ChurchImage from './assets/church.jpg'
import Pastor from './assets/Papa.png'
import Church from './assets/FirstChurch.jpg'
import SecondPastor from './assets/SecondPastor.png'
import Shephered from './assets/Shephered.png'
import ChurchOne from './assets/ChurchOne.jpg'
import ChurchTow from './assets/ChurchTwo.jpg'
import ChurchThree from './assets/ChurchThree.jpg'
import { useEffect, useState } from 'react'

function App() {
  const images = [Church, ChurchOne, ChurchTow, ChurchThree];
  const [currentIndex, setCurrentIndex] = useState(0); // Fixed: Added initial value 0

  useEffect(() => {
    let isMounted = true;
    
    const interval = setInterval(() => {
      if (isMounted) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [images.length]); 

  return (
    <Router>
      <div className="Main">
        <div className="Head">
          <div className="Title">
            <img src="" alt="" />
            <h1>Effective Life Church</h1>
          </div>
          <div className="link">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/event">Event</Link></li>
            <li><Link to="/ministries">Our Ministries</Link></li>
            <li><Link to="/location">Location</Link></li>
          </div>
        </div>
        <Routes>
          <Route path="/" element={
            <div className="Worldly">
              <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p>
              </div>
              <div className="Context">
                <div className="Text">
                  <h2>About Us</h2>
                  <p>We believe in one God, 
                    the Creator of heaven and earth,
                     who is loving, holy, and faithful. 
                     We believe in Jesus Christ, the 
                     Son of God, who came to the world
                      to save humanity through His life,
                       death, and resurrection. We believe 
                       in the Holy Spirit, who guides, 
                       comforts, and empowers believers 
                       to live according to God's will.
We believe that the Bible is the 
inspired Word of God and the 
foundation of our faith and teaching.
 We believe in salvation by grace 
 through faith, and in the importance 
 of prayer, worship, love, and service. 
 We believe that the Church is the body 
 of Christ, called to share the Gospel, 
 care for one another, and bring hope to the world.</p>
                </div>
                
                {/* UPDATED Picture Section with Slideshow */}
                <div className="Picture">
                  <div className="slideshow-container">
                    <div 
                      className="slideshow-track"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {images.map((image, index) => (
                        <div key={index} className="slide">
                          <img src={image} alt={`Church view ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="Pastor">
                <div className="FirstPastor">
                  <img src={Pastor} alt=""/>
                    <h1>Amos TALILUVA</h1>
                    <p>Lead Pastor</p>
                </div>
                <div className="SecondPastor">
                  <img src={SecondPastor} alt="" />
                  <h1>Papa Patrick</h1>
                  <p>Assistant Pastor</p>
                </div>
                <div className="ThirdPastor">
                  <img src={Shephered} alt="" />
                  <h1>Elijah</h1>
                  <p>Shepherd</p>
                </div>
              </div>
              <div className="Footer">
                <div className="Introduction">
                  <h2>Effective Life Church</h2>
                  <p>+243 977 853 370</p>
                  <p>info@mywebsite.com</p>
                  <p>Kampala, Uganda Konge Mosk Lukuli Road</p>
                </div>
                <div className="Form">
                <input type="text" placeholder="Firstname" /><br />
                <input type="text" placeholder="Lastname" /><br />
                <input type="text" placeholder="Email" /><br />
                <button>Submit</button>
                </div>
</div>
            </div>
          } />
          <Route path="/event" element={
            <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p></div>
          } />
          <Route path="/ministries" element={<div>
            <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p></div>
                <div className="KidProgram">
                  <div className="Text"></div>
                  <div className="KidPicure"></div>
                </div>
                </div>
              } />
          <Route path="/location" element={
            <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p></div>
              } />
        </Routes>
      </div>
    </Router>
  )
}

export default App