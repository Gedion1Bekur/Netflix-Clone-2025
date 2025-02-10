// import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_contanier">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Account</li>
              <li>Redeem Gift Cards</li>
              <li>Privacy</li>
              <li>Speed Test</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Buy Gift Cards</li>
              <li>Cookie Preferences</li>
              <li>Speed Test</li>
              <li>Legal Guarantee</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Serivice Code</p>
        </div>
        <div className="copy-write">&copy;1997-2025 Netflix, Inc</div>
      </div>
    </div>
  );
}

export default Footer;


