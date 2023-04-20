import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#Let's_Talk </h2>
        <p>LEAVE A MESSAGE, We Love to hear from you!</p>
      </section>

      <section id="Contact-details" className="section-p1">
        <div className="details">
            <span>Get In Touch</span>
            <h2>Visit one of our agency locations or contact us today!</h2>
            <h3>Head Office</h3>
        <div>
          <li>
              <i className="fas fa-map-marker-alt"></i>
              <p>Gananjay Society, Kothrud,Pune</p>
          </li>
          <li>
              <i class="fa fa-envelope"></i>
              <p>contact@example.com</p>
          </li>
          <li>
              <i className="fa fa-phone"></i>
              <p>Contact: 020-12345678</p>
          </li>
          <li>
              <i className="fa fa-clock"></i>
              <p>Monday to saturday: 9am to 5pm</p>
          </li>
        </div>
      </div>
      <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2149.709524489202!2d73.80185634014457!3d18.500812392910547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc84b04ef25%3A0x58bd883ea6a40c44!2sGananjay%20Society%2C%20Chaitanya%20Nagar%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411058!5e0!3m2!1sen!2sin!4v1681840046504!5m2!1sen!2sin" width="600" height="450"></iframe>
      </div>
    </section>

    <section id="form-details" className='form'>
      <form action="submit">
          <span>LEAVE A MESSAGE</span>
          <h2>We Love to hear from you!</h2>
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
      </form>
    </section>

    <section id="newsletter" className="section-p1">
      <div className="newstext">
          <h4> sign up for our new newsletters</h4>
          <p> Get E-Mail updates about our latest shop and<span>special offers.</span></p>
      </div>
      <div className="form">
          <input type="text " placeholder="your email address" />
          <button className="normal">Sign Up</button>
      </div>
    </section>
  </>
  )
}

export default Contact