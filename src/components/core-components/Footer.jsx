import React from 'react';
import {Link} from 'react-router-dom';
import '../hooks/App.css';


export default function Footer() {
   return (
 <footer className="footer">
    <div className='footer-container'>
        <div className="footer-section">
<h3>Legal Information</h3>
<div className="footer-links">
    <Link to="/terms-of-service">Terms of Service</Link>
    <Link to="/privacy-policy">Privacy Policy</Link>
    <Link to="/cookie-policy">Cookie Policy</Link>
    <Link to="/disclaimer">Disclaimer</Link>

</div>
        </div>

<div className="footer-section">
<h3>Contact Us</h3>
<p>Email: contact@quickbite.com</p>
<p>Phone: (555) 123-4567</p>
<p>Address: Food Street, Cuisine City</p>

</div>


<div className="footer-section">
  <h3>Follow Us</h3>
  <div className="social-links">
    <a href="https://www.facebook.com/quickbite" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://www.twitter.com/quickbite" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://www.instagram.com/quickbite" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="https://www.linkedin.com/company/quickbite" target="_blank" rel="noopener noreferrer">LinkedIn</a>

  </div>
</div>
    </div>
    <div clasName='foter-bottom'>
        <p>&copy; {new Date().getFullYear()} QuickBite. All rights reserved.</p>
        <p>Made with ❤️ in Food City</p>

    </div>
 </footer>

   );
}