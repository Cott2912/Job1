import React from "react";
import { Link } from "react-router-dom"; 
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-breadcrumb">
        <Link to="/">Home</Link> / <span>Contact Us</span>
      </div>
      
      <h1>Contact Us</h1>
      <h2>Need assistance? We're available to help!</h2>
      
      <p>
        In case you have any inquiries, comments, or proposals on how we can 
        improve our platform, don't hesitate to contact us. You can drop us a 
        line at <a href="mailto:hello@1games.io">hello@1games.io</a>, and we'll 
        make every effort to reply promptly.
      </p>
    </div>
  );
};

export default ContactUs;
