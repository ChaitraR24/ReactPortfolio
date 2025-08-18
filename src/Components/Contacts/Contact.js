import React, { forwardRef, useState } from "react";
import "./Contact.css"
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Contact = forwardRef((props,ref) =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const openInstagram  = () => {
        window.open("https://www.instagram.com/rb_chaitra/")
    }

    const openLinkedin = ()=>{
        window.open("https://www.linkedin.com/in/chaitra-bagilavaidya-40b292311")
    }

    const openGithub = () =>{
        window.open("https://github.com/ChaitraR24")
    }

    const openFacebook = () =>{
        window.open("https://www.facebook.com/share/1Jicwn1DvM/")
    }


return(
    <div ref={ref} id="contact" className="contact-container">
        <h1>Contact Me</h1>
       
       {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <button type="submit">Submit</button>
            <div className="social-icon">
            <div className="insta-icon">
             <FaInstagram
             size={30}
               color="#E4405F"
               style={{cursor:"pointer"}}
               onClick={openInstagram}
             />
            </div>
            <div className="linkedin-icon">
              <TbBrandLinkedin 
              size={30}
              color="#0A66C2"
              style={{cursor:"pointer"}}
              onClick={openLinkedin}
              />
            </div>
            <div className="git-icon">
                <IoLogoGithub 
                size={30}
                color=""
                style={{cursor:"pointer"}}
                onClick={openGithub}
                />
            </div>
            <div className="facebook-icon">
             < FaFacebook
             size={30}
             color="#0866FF"
             style={{cursor:"pointer"}}
             onClick={openFacebook}
             /> 
            </div>
            </div>
        </form>
       ):(
        <p className="thankyou-msg">
            Thank You {name} for contacting me!
        </p>
       )}
    </div>
);
});

export default Contact;