import React from 'react';
import Layout from '../src/components/layouts/';

export default function contact() {
  return (
    <Layout>
       <section id="body" className='container'>
          <div class="contact-section">
              <div class="contact-form">
                  <div id="title">
                      <h2>Get In Touch With Us!</h2>
                      <span>Fill out the form below to recieve a free and confidential.</span>
                  </div>
                  <form className="contact" action="" method="">
                      <input type="text" name="name" class="text-box" placeholder="Your Name" required />
                      <input type="email" name="email" class="text-box" id="email" placeholder="Your Email" required />
                      <textarea name="message" row="5" placeholder="Your Message" required></textarea>
                      <button type="submit" name="submit" id="sent-btn" value="Send">Send Message</button>
                  </form>
              </div>
          </div>
      </section>
    </Layout>
  ); 
}