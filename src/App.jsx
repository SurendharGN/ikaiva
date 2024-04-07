import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../public/logo.png';
import talenthub from "../public/talenthub.png";
import homepage from "../public/homepage.png";
import aura from "../public/aura.png"
import iota from "../public/iota.png";
import door from "../public/door.png";
import map from "../public/map-307405.svg";
import greenline from "../public/green-line.png"
import membership from "../public/membership.png";
import davinci from "../public/davinci.png";import impactArtists from "../public/impactartists.png";import amplify from "../public/amplify.png";
import figuredisplay from "../public/figureDisplay.png";
import arrow from "../public/arrow.png";
import nav from "../public/nav.png";
import dropdown from "../public/dropdown.png";
function App() {
  

  return (
    <main>
    <div id="navbar">
      <navbar>
        <div>
          <img id="nav" src={nav}></img>
          <div id="line"></div>
        </div>
        
        <ul id="navbar-items">
          <li>Work</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        
      </navbar>
      <img id="logo" height="150px" src={logo}></img>
    </div>

    <div>
      

    <div id='homepage'>
      <div id="desc">
        <div id="homepage-desc-2">
        <h1 id="title">ikaiva</h1>
        <p id="desc">A CREATIVE STUDIO BASED IN INDIA</p>
        
      </div>

      <img id="homepage-image" width="600px" height="400px" src={homepage}>
      </img>

      <div id="homepage-description">
        <p>A productized service for fast-paced brands to launch a digital identity through web services.</p>

        <div id="home-footer">
          <button id="subsribe">Subscribe</button>
          <img id="arrow" src={arrow}></img>

        </div>
        
      </div>
      
      </div>
      
      

      

      
    </div>

      
    </div>

    {/* <div id="about">
      <h2>
        ikaiva creative studio helps brands establish an online presence through visual branding. 
      </h2> 
      <div id="about-desc">
        
        <img src={limelight} height="300px"></img>
      </div>
    </div> */}

    <div id="brands-through-art">
      <div id="art-text">
        <h2 id="building-brands-through-art">
        Buidling brands through art
      </h2>
      <p id="about-para">Ikaiva   is a creative studio that lays a multi-dimensional foundation for businesses by  establishing an  online presence. We specialize in crafting web applications and brand designs for online businesses. Ikaiva  is obligated to transform the brand identity of your business by etching a step-stone into the  world of online presence. Be the limelight of your industry through visual branding.</p>
      </div>
      
      <img id="door" src={door} height="550px"></img>
      <img id="map" src={map} height="550px" width="900px"></img>
      

      
    </div>
    <div id="crafting-web">
      <div id="crafting">
        <h2>Crafting web applications and brand designs since 2020</h2>
      <p id="crafting-web-desc">Subscribe  to a plan & request as many designs as you’d like. Receive your design within  two  business days on average. We'll revise the designs until you're 100% satisfied.</p>
      <div id="experience">
        <div id="exp-1">
          <p id="exp-1-head">10+</p>
          <p id="exp-1-txt">Projects</p>
        </div>

        <div id="exp-2">
          <p id="exp-2-head">2.2+</p>
          <p id="exp-2-txt">Years of experience</p>
        </div>
      </div>
      </div>
      <div id="greenline-parent">
        <img src={greenline} height='500px' id="greenline"></img>

      </div>
      
      
        
    </div>

    <div>
      <h2>Seamless design solutions, subscribed</h2>
      <div>

      </div>

      <div id="reviews">
        <div>

        </div>
        <div id="features">
          <div>
          <p className="desc-title">Async meeting
</p>
          <p>Complete communication through Trello.  </p>
        </div>
        <div>
          <p className="desc-title">Trello management</p>
          <p>Manage your design board using Trello.</p>
        </div>
        <div>
          <p className="desc-title">Invite your team</p>
          <p>Invite your entire team, so anyone can submit requests and track their progress.</p>
        </div>

        </div>
        
      </div>
    </div>

    <div id="work">
      <h2>shaping singular vision: work</h2>
      <div id="work-items">
        <div className='work-item'>
        <img id="impact" height="275px" src={impactArtists}></img>
        
      </div>
      
      <div className='work-item'>
        <img id= "amplify" height="275px" src={amplify}></img>
      </div>
      
      <div className='work-item'>
        <img id="talenthub" height="250px" src={talenthub}></img>
      </div>
      <div className='work-item'>
        <img id="davinci" height="250px" src={davinci}></img>
        
      </div>
      
      <div className='work-item'>
        <img id="figuredisplay" height="275px" src={figuredisplay}></img>
      </div>
      
      <div className='work-item'>
        <img id="aura" height="250px" src={aura}></img>
      </div>
      
      <div></div>

      </div>
      
    </div>

    <div>
      <h2>
        Membership benefits
      </h2>

      <div id="mem-main">
        <div>
          <img id="mem-img" height="500px" src={membership}></img>
        </div>
        <div id="membership-benefits-desc">
        <div>
          <div className="mem-child">
            <p className="desc-title">Design board</p>
            <p>Join the membership & unlock infinite designs.
</p>
          </div>
          <div className="mem-child">
            <p className="desc-title">Speedy delivery, guaranteed</p>
            <p>Your designs arrive one at a time, 2 days on average.
</p>
          </div>
          <div className="mem-child">
            <p className="desc-title">Top-tier talent, every time</p>
            <p>Exceptional designs always on standby, just for you.</p>
          </div>
        </div>
        
        <div>
          <div className="mem-child">
            <p className="desc-title">No surprises, just smiles</p>
            <p>Fixed monthly rate, no hidden fees. Pay for what you deserve.
</p>
          </div>
          <div className="mem-child">
            <p className="desc-title">Pause your membership</p>
            <p>Take a breather when needed, pick up right where you left off.
</p>
          </div>
          <div className="mem-child">
            <p className="desc-title">Unique touch</p>
            <p>Each design crafted specifically for you, yours alone.</p>
          </div>
        </div>
          
          
        </div>
      </div>
      
    </div>

    <div>
      <div id="membership-header">
        <h2 id="mem-title">Join ikaiva for a personal branding journey</h2>
      </div>
      
      <div>
        <p id="price">$495</p>
        <p>Investment per month</p>
      </div>

      

      <div id="mem-details">
        <div id="mem-left">
          <button id="subscribe">Subscribe</button>
          <p id="book-a-call">Book a call for a free design quote</p>
        <p id="mem-left-desc">Learn more about how ikaiva works and how it can help you frame a brand identity.</p>
        <button id="schedule">Schedule</button>

        </div>
        
        <div>
          <h3>What's included</h3>
          <ul>
            <li>One request at a time</li>
            <li>Average 48 hour delivery</li>
            <li>Pause or cancel anytime</li>
            <li>Webflow development</li>
            <li>Logo design</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h2 id="faq">FAQ at ikaiva</h2>
      <div>
        <div id="faq-q">
          <p>What are the services you provide?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>We provide website design, logo and branding, social media posts, webflow sites, framer sites.</p>
        {/* <div id="line"></div> */}
      </div>

      <div>
        <div id="faq-q">
          <p>How long will each request take?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>An average request takes 24-48 hrs to get completed.</p>
        {/* <div id="line"></div> */}
      </div>
      <div>
        <div id="faq-q">
          <p>What kind of social media content creation is included?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>We do both the copywriting and the design of the posts.</p>
        {/* <div id="line"></div> */}
      </div>
      <div>
        <div id="faq-q">
          <p>how many requests I can have per month?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>We do both the copywriting and the design of the posts.</p>
        {/* <div id="line"></div> */}
      </div>
      <div>
        <div id="faq-q">
          <p>How do I request designs?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>As soon as you subscribe to Ikaiva, you get a Trello management board mailed to you, you'll have further details in the board!</p>
        {/* <div id="line"></div> */}
      </div>
      <div>
        <div id="faq-q">
          <p>Can I pause my membership </p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>Yes, you will only be billed for the days for which requests are active and ongoing, the membership renews every 30 days.</p>
        {/* <div id="line"></div> */}
      </div>
      
      <div>
        <div id="faq-q">
          <p>How does the pause feature work?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>The membership renew every 30 days, so you can pause it whenever not in use, so the membership will only be renewed when you complete 30 days of requests</p>
        {/* <div id="line"></div> */}
      </div>
      <div>
        <div id="faq-q">
          <p>What if I don't like the design?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>We offer unlimited revisions for every request! we will redesign until you're 100% satisfied </p>
        {/* <div id="line"></div> */}
      </div>
      
      <div>
        <div id="faq-q">
          <p>Are there any refunds if I don't like the service?</p>
          {/* <img id="dropdown" src={dropdown}></img> */}

        </div>
        
        <p className='answer'>We do offer a complete refund if you don't like the service! </p>
        {/* <div id="line"></div> */}
      </div>
    </div>

    
      
      <div id="contact">
        <div id="contact-left">
        </div>
        <div id="contact-right">
          <div >
            <h2 id="contact-title">Contact</h2>
          <p>Whether you have questions about our services, want to discuss a potential project, or simply want to say hello, we're here to help.

</p>
<p>Schedule a consultation with one of our design experts. We'll discuss your goals, answer any questions you may have, and provide personalized recommendations tailored to your needs.</p>
          </div>
          <div>
            <ul id="links">
            <li className="link">ikaiva.co@gmail.com</li>
            <li className="link">linkedin</li>
            <li className="link">instagram</li>
          </ul>

          </div>
          

          
        </div>
      </div>
    </main>
  )
}

export default App
