import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ChurchImage from './assets/church.jpg'
import Pastor from './assets/Trio.jpg'
import ChurchOne from './assets/ChurchOne.jpg'
import ChurchTwo from './assets/ChurchTwo.jpg'
import ChurchThree from './assets/ChurchThree.jpg'
import Location from './assets/Location.png'
import Children from './assets/Children.jpg'
import Women from './assets/Women.jpg'
import Intercession from './assets/Intercession.jpg'
import Sunday from './assets/Sunday.jpg'
import Youth from './assets/Youth.jpg'
import Cell from './assets/Cell.jpg'
import { useState, type FormEvent } from 'react'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            <li><Link to="/location">Contact</Link></li>
          </div>
        </div>
        <Routes>
          <Route path="/" element={
            <div className="Worldly">
              <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 <Link to="/Login" style={{textDecoration:'none', color:'#fff'}}>(KJV)</Link> </p>
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
            <div>
            <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p></div>
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
          <Route path="/ministries" element={<div>
            <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p></div>
                <div className="FirstProgram">
                  <div className="KidProgram">
                  <h2>Kid's Ministry'</h2>
                    <hr />
                    <img src={Children} alt="" />
                    <p>Our Sunday Kids Ministry
                       is a joyful and safe 
                       space where children 
                       learn about God in a 
                       fun and engaging way. 
                       Through age-appropriate 
                       Bible lessons, songs, 
                       games, and activities, 
                       children are taught God’s 
                       love and values while 
                       building friendships. 
                       Our caring teachers are
                        dedicated to nurturing
                         each child’s spiritual
                          growth and helping 
                          them develop a strong 
                          foundation of faith 
                          as they grow.<br />
                          <br />
                          Every Sunday:   
                          <em>From 10:30 AM to 12:30 PM</em></p>
                  </div>
                  <div className="KidProgram">
                    <h2>Youth's Ministry</h2>
                    <hr />
                    <img src={Youth} alt="" />
                    <p>Our Saturday Youth Ministry
                       is a vibrant and supportive 
                       space where young people come 
                       together to grow in faith, 
                       build strong relationships, 
                       and discover their purpose. 
                       Through engaging Bible discussions,
                        worship, mentorship, and interactive
                         activities, the youth are encouraged
                          to live out their faith, develop
                           leadership skills, and positively 
                           impact their community. <br />
                           <br />
                           <em>Every Saturday from 04:00 PM to 06:00 PM</em></p>
                  </div>
                  <div className="KidProgram">
                    <h2>Women's Ministry</h2>
                    <hr />
                    <img src={Women} alt="" />
                    <p>Our Thursday Women’s 
                      Ministry is a welcoming 
                      fellowship where women 
                      come together to grow 
                      spiritually, support one 
                      another, and strengthen 
                      their faith. Through prayer,
                       Bible study, encouragement,
                        and shared experiences, 
                        women are empowered to 
                        live purposefully, serve
                         their families and 
                         communities, and walk 
                         confidently in God’s calling. <br />
                         <br />
                         <em>Every Thursday from 10:00 AM to 12:00 PM</em>
                         </p>
                  </div>
                </div>
                <div className="SecondProgram">
                  <div className="KidProgram">
                    <h2>Intercession Ministry</h2>
                    <hr />
                    <img src={Intercession} alt="" />
                    <p>Our Tuesday Intercession 
                      Ministry is dedicated to 
                      prayer and spiritual support.
                       During this time, believers 
                       come together to stand in 
                       prayer for the church, the
                        community, and the needs of
                         individuals. Through united
                          and faithful intercession, 
                          we seek God’s guidance, 
                          healing, and strength, 
                          trusting in His power to work
                           in every situation. <br />
                           <br />
                           <em>Every Tuesday from 12:00 PM to 02:00 PM</em>
                           </p>
                  </div>
                  <div className="KidProgram">
                    <h2>Cell's Prayer</h2>
                    <img src={Cell} alt="" />
                    <p>The Cell Ministry is 
                      a small-group ministry 
                      that brings believers 
                      together in homes or 
                      designated places for 
                      fellowship, prayer, Bible
                       study, and mutual edification.
                        It serves as a foundational 
                        structure of the church, 
                        promoting spiritual growth, 
                        unity, and active participation 
                        of every member in the life 
                        and mission of the church. <br />
                        <br />
                        <br />
                        <em>Every Friday from 05:00 PM to 06:00 PM</em></p>
                  </div>
                  <div className="KidProgram">
                    <h2>Sunday Ministry</h2>
                    <img src={Sunday} alt="" />
                    <p>Our Sunday Adults Ministry 
                      provides a meaningful space 
                      for adults to grow in faith,
                       deepen their understanding 
                       of God’s Word, and build 
                       strong relationships. 
                       Through Bible teaching, 
                       prayer, and fellowship,
                        adults are encouraged to 
                        apply biblical principles 
                        to daily life, strengthen 
                        their spiritual walk, and 
                        serve both the church and 
                        the community with purpose. <br />
                        <em>English Services from 09:00 AM to 10:30 AM</em><br />
                        <em>French Service from 10:30 AM to 12:30 PM</em></p>
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
          <Route path="/location" element={
            <div>
            <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p></div>
                <div className="Contact">
                  Pour plus d’information, 
                  ou si vous voulez entrer 
                  en contact avec un Pasteur, <br />
                   ou pour un besoin de la Prière,
                    veuillez nous écrire sur : +256 750 989 518
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
              <Route path='/Login' element={
                <div>
                <div className="BlockOne" style={{ background: `url(${ChurchImage}) no-repeat center center/cover` }}>
                <h1>Give your Life to Jesus</h1>
                <p>"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."</p>
                <p>— Psalm 37:4 (KJV)</p></div>
                <div className="Formulaire">
                <form action="">
                  <h2>Login Form</h2>
                  <input type="text" placeholder='Username'/>
                  <input type="password" placeholder='Password'/>
                  <button >Submit</button>
                </form>
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
              }></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App