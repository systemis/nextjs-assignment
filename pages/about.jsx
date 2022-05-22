import React from 'react';
import Layout from '../src/components/layouts';

const AboutPage = () => {
  return (
    <Layout>
        <div class="best-features about-features">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2>Our Background</h2>
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-image">
                  <img src="/photo.jpg" alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="left-content">
                  <h4>Who we are &amp; What we do?</h4>
                  <p>Second hand is humorously understood to mean "handmade goods", more precisely, those are items that have been used and then resold to the next consumer. Most second hand items are not new. Since it's used, it's impossible to avoid some minor defects.</p>
                  <ul class="social-icons">
                    <li><a href="#"><i class="bx bxl-twitter"></i></a></li>
                    <li><a href="#"><i class="bx bxl-facebook"></i></a></li>
                    <li><a href="#"><i class="bx bxl-linkedin"></i></a></li>
                    <li><a href="#"><i class="bx bxl-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="team-members">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="section-heading">
                  <h2>Our Team Members</h2>
                </div>
              </div>
              <div class="col-md-4">
                <div class="team-member">
                  <div class="thumb-container">
                    <img src="team_01.jpg" alt="" />
                    <div class="hover-effect">
                      <div class="hover-content">
                        <ul class="social-icons">
                        <li><a href="#"><i class="bx bxl-twitter"></i></a></li>
                        <li><a href="#"><i class="bx bxl-facebook"></i></a></li>
                        <li><a href="#"><i class="bx bxl-linkedin"></i></a></li>
                        <li><a href="#"><i class="bx bxl-behance"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <h4>Stephen Pham</h4>
                    <span>CO-Founder</span>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="team-member">
                  <div class="thumb-container">
                    <img src="/team_02.jpg" alt="" />
                    <div class="hover-effect">
                      <div class="hover-content">
                        <ul class="social-icons">
                        <li><a href="#"><i class="bx bxl-twitter"></i></a></li>
                        <li><a href="#"><i class="bx bxl-facebook"></i></a></li>
                        <li><a href="#"><i class="bx bxl-linkedin"></i></a></li>
                        <li><a href="#"><i class="bx bxl-behance"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <h4>David Tram</h4>
                    <span>CO-Founder</span>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="team-member">
                  <div class="thumb-container">
                    <img src="/team_03.jpg" alt="" />
                    <div class="hover-effect">
                      <div class="hover-content">
                        <ul class="social-icons">
                        <li><a href="#"><i class="bx bxl-twitter"></i></a></li>
                        <li><a href="#"><i class="bx bxl-facebook"></i></a></li>
                        <li><a href="#"><i class="bx bxl-linkedin"></i></a></li>
                        <li><a href="#"><i class="bx bxl-behance"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="down-content">
                    <h4>Michael Nguyen</h4>
                    <span>Chief Marketing</span>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default AboutPage;