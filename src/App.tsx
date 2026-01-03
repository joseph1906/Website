import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ChurchImage from './assets/church.jpg'
import Pastor from './assets/Trio.jpg'
import ChurchOne from './assets/ChurchOne.jpg'
import ChurchTwo from './assets/ChurchTwo.jpg'
import ChurchThree from './assets/ChurchThree.jpg'
import Location from './assets/Location.png'
function App() {
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
                <div className="Mission">
                  <div className="Firstmission">
                    <h2>Our Mission</h2>
                    <p>To establish new churches in
                     certain strategic cities of 
                     the country to serve as a 
                     base for the mission. To 
                     build up our members with 
                     the goal of multiplying 
                     servants who are capable 
                     of going to the peoples most
                      in need of the Gospel for 
                      the establishment of new churches.</p>
                  </div>
                  <div className="SecondVision">
                    <h2>Our Vision</h2>
                  <p> Bâtir une église forte pour la mission. (Actes1.8) <br /> 
                   Une Eglise qui prie.<br />
                   Des cellules des maisons dynamiques et efficaces.<br /> 
                   Evangélisation Individuelle mode de vie<br />
                  Formation pour le Ministère </p> 
                  </div>
                  <div className="Third">
                    <h2>The Salvation of Souls</h2>
                   <p> The salvation of souls, their 
                    edification and training as 
                    disciples of Jesus Christ, 
                    in order to provide the nation 
                    and the world with a generation 
                    of men and women of integrity, 
                    faithful, God-fearing, and 
                    actively involved in fulfilling 
                    the missionary mandate of Jesus
                     Christ in our generation.</p>
                  </div>
                </div>
                <div className="Pictures">
                  <div className="POne"><hr /></div>
                  
                  <div className="images">
                  <img src={ChurchOne} alt="" />
                  <img src={ChurchTwo} alt="" />
                  <img src={ChurchThree} alt="" />
                  </div>
                </div>

              <div className="Pastor">
                <div className="FirstPastor">
                  <img src={Pastor} alt=""/>
                </div>
                <div className="Text">
                  <h2>Pasteur Amos TALILUVA (Lead Pastor) </h2>
                  <p>Le Pasteur Amos TALILUVA est le Pasteur
                     titulaire du Effective Life Church /Kampala marié au Pasteur Furaha. 
                     Le Pasteur Amos a reçu le mandant d’être une lumière des nations 
                     et porteur du salut  de Dieu jusqu’aux Extrémités de la terre.</p><br />
                     <p>"Allez, faites de toutes les nations des disciples, les baptisant
                       au nom du Père, du Fils et du Saint Esprit, et enseignez-leur 
                       à observer tout ce que je vous ai prescrit. Et voici, je suis 
                       avec vous tous les jours, jusqu’à la fin du monde."</p>
                </div>
                </div>
              <div className="Footer">
                <div className="TextF">
                  <h2>Effective Life Church</h2>
                  <p>Le Centre Evangélique Francophone
                     Arche de l’Alliance Goma est une 
                     Extension du C.E. Arche de l’Alliance 
                     Kinshasa/ Masina. Elle a pris 
                     naissance à Goma le 04/07/1999 dans 
                     le but de répondre à l’appel 
                     missionnaire de Jésus Christ de 
                     faire de toutes les nations ses disciples. (Matt 28,19-20).</p>
                </div>
                <div className="Image">
                  <img src={Location} alt="" />
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