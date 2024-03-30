import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../public/logo.png'


function App() {
  

  return (
    <main>
    <div>
      <navbar>
        <ul>
          <li>Work</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <img id="logo" height="150px" src={logo}></img>
      </navbar>
    </div>

    <div>
      

    <div id='homepage'>
      <div id="desc">
        <div id="homepage-desc-2">
        <h1 id="title">ikaiva</h1>
        <p id="desc">A CREATIVE STUDIO BASED IN INDIA</p>
        
      </div>
      {/* <div id='homepage-desc-1'>
        <p> A PRODUCTIZED SERVICE FOR FAST-PACED BRANDS TO LAUNCH A DIGITAL IDENTITY THROUGH WEB SERVICES. 
        </p>
      
      </div> */}
      </div>
      
      

      

      
    </div>

      
    </div>

    <div>
      <p>
        ikaiva creative studio helps brands establish an online presence through visual branding. 
      </p>
      <p id="about-desc">Ikaiva   is a creative studio that lays a multi-dimensional foundation for businesses by establishing an  online presence. We specialize in crafting web applications and brand designs for online businesses. Ikaiva  is obligated to transform the brand identity of your business by etching a step-stone into the  world of online presence.</p>
    </div>
 
    
<button>SUBSCRIBE</button>

    

    
    <h2>About</h2>
    <div id="about">
      
      {/* <img src="./src/assets/about-2.png" id="pic"></img> */}
      

      <div id="about-image">
        
      </div>

      <div id="about-desc-right">
        <div>
          <p className="about-desc-1">+10</p>
          <p id="about-project">PROJECTS</p>
        </div>

        <div>
          <p className="about-desc-1">+1.8</p>
          <p id="about-experience">YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>

    <div>
      <h2 id="crafting-web-applications">Crafting web applications and brand designs</h2>
      

      
      <div id="know-more">
        <div>
        
      </div>

      <div id="know-more-text">
        <p>Subscribe  to a plan & request as many designs as you’d like. Receive your design within  two  business days on average. We'll revise the designs until you're 100% satisfied.</p>
        <ul>
          <h3>Design</h3>
          <li>UI design</li>
          <li>UX design</li>
          <li>MVP edition</li>
          <li>Typography</li>
          <li>Logo design</li>
        </ul>

        
      </div>
      </div>
      

      
    </div>

    <div>
      <h2>
        Shaping singular vision
      </h2>

    <div id="features-container">
      <div>
        
      </div>

      <div id="features">
        <div>
          <h3>Workflow</h3>
          <ul id="workflow">
            <li> Async meeting: complete communication through trello/slack.</li>
            <li>Trello management: manage your design board using Trello.</li>
            <li>Invite your team: invite your entire team, so anyone can submit requests and track their progress.</li>
          </ul>

        </div>
        <div>
          <h3>Features</h3>
          <ul id="feature">
            <li>Design board: join the membership & unlock infinite designs.
</li>
            <li>Unique touch: each design crafted specifically for you, yours alone.</li>
            <li>Pause and Play: take a breather when needed, pick up right where you left off.
</li>
            <li>No surprises, just smiles: fixed monthly rate, no hidden fees.</li>
            <li>Speedy delivery, guaranteed: your designs arrive one at a time, few days on average.</li>
            <li>Top-tier talent, every time: exceptional designs always on standby, just for you.</li>
          </ul>
        </div>
      </div>
    </div>
      

      
    </div>

    
      <h2>Work</h2>
      <div>
        
    </div>

    <div>
      <div id="membership-header">
        <h2>Join ikaiva-membership</h2>
      
      </div>
      
      <div>
        <p id="price">$495</p>
        <p>PER MONTH</p>
      </div>

      <button>SUBSCRIBE</button>

      <div>
        <p>Book a call for a free design quote</p>
        <p>Learn more about how ikaiva works and how it can help you frame a brand identity.</p>
        <button>SCHEDULE</button>

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

    
      
    </main>
  )
}

export default App
