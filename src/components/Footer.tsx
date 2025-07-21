import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/johnlloyd-macalino-b795a6286/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2025 John Lloyd. All rights reserved.</p>
    </footer>
  );
}

export default Footer;