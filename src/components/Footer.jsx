import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { FaMessage } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className="bg-[#F5F4F1] flex flex-col lg:flex-row justify-around px-20 gap-10 py-10">
                <div className='lg:w-3/4 space-y-3'>
                    <img src={logo} alt="Logo Coffee" className='w-20 relative -left-5' />
                    <h1 className='text-2xl md:text-4xl rancho-regular text-[#331A15]'>Espresso Emporium</h1>
                    <p className='raleway-font md:text-xl text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-2'> 
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                    </div>
                    <h1 className='text-2xl md:text-4xl rancho-regular text-[#331A15]'>Get in Touch</h1>
                    <div className='space-y-3 raleway-font md:text-xl text-[#1B1A1A]'>
                        <div className='flex items-center gap-1'><FaPhone></FaPhone> <span>+88 01533 333 333</span></div>
                        <div className='flex items-center gap-1'><FaMessage></FaMessage> <span>info@gmail.com</span></div>
                        <div className='flex items-center gap-1'><FaLocationArrow></FaLocationArrow> <span>72, Wall street, King Road, Dhaka</span></div>
                    </div>
                </div>
                <div className='space-y-3 lg:w-3/12'>
                    <h1 className='text-2xl md:text-4xl rancho-regular text-[#331A15]'>Connect with Us</h1>
                    <form className='space-y-5 raleway-font md:text-xl text-[#1B1A1A]'>
                        <input type="text" placeholder='Name' className='block w-full p-3'/>
                        <input type="text" placeholder='Email' className='block w-full p-3'/>
                        <textarea placeholder='Message' cols={5} rows={5} className='block w-full p-3'></textarea>
                        <input type="submit" value="Send Message" className='cursor-pointer rounded-3xl  btn border-2 border-[#331A15]' />
                    </form>
                </div>
            </div>
            <div className='bg-[#1B1A1A] text-white text-center py-2'>
                <small>@Copyright Espresso Emporium ! All Rights Reserved</small>
            </div>
        </>
    );
};

export default Footer;