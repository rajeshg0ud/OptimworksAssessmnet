import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <h1 className="footer-heading">Foodie<span className='footer-headingRed'>Zone</span></h1>
          <p className="footer-description">
            Discover a world of flavors and indulge in delightful culinary experiences with FoodieZone.
          </p>
          <div className="footer-links">
            <a href="https://linktr.ee/tenacious_developer" target="_blank" className="footer-link">About Us</a>
            <a href="https://www.instagram.com/tenacious_developer" target="_blank" className="footer-link">Contact Us</a>
            <a href="/terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
        <div className="footer-social">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
          
        <a href="https://www.instagram.com/tenacious_developer" target="_blank" className="instagram">
          <i className="fab fa-instagram" id="ins"></i>
        </a>
        <a href="https://github.com/rajeshg0ud" target="_blank" className="github">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.youtube.com/@TenaciousDeveloper" target="_blank" className="youtube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.linkedin.com/in/ rajesh-goud-budidi-631080241/" target="_blank" className="linkedin">
          <i className="fab fa-linkedin"></i>
        </a>

          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
