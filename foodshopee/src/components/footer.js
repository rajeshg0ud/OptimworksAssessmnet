import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  
    console.log("console from footer ");
  return (
    <div className="h-64 mt-36 bg-gray-100 font-semibold m-auto font-sans text-gray-500">
      <div className="flex justify-around">
        <div className=" px-5">
          <h3 className='text-md m-2 text-gray-600'>Company</h3>
          <ul>
            <li className=' text-xs m-4'>About Us</li>
            <li className=' text-xs m-4'>Team</li>
            <li className=' text-xs m-4'>Careers</li>
            <li className=' text-xs m-4'>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='text-md m-2 text-gray-600'>Contact</h3>
          <ul>
            <li className=' text-xs m-4'>Contact Us</li>
            <li className=' text-xs m-4'>Help & Support</li>
            <li className=' text-xs m-4'>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='text-md m-2 text-gray-600'>Legal</h3>
          <ul>
            <li className=' text-xs m-4'>Terms & Conditions</li>
            <li className=' text-xs m-4'>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='text-md m-2 text-gray-600'>Connect with us</h3>
          <div className="social-icons">
            <FontAwesomeIcon className=' m-2 size-5' icon={faFacebook} />
            <FontAwesomeIcon className=' m-2 size-5'  icon={faInstagram} />
            <FontAwesomeIcon className=' m-2 size-5' icon={faTwitter} />
          </div>
        </div>
      </div>
      <div className=" text-center m-5">
        <p>&copy; 2024 Your Food App. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
