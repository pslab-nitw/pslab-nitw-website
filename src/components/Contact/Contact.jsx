import React from "react";
import contactimg from "./contact-img.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Contact() {
  return (
    <div className="contact-container">
      <div className="left">
        <h1>Contact Us</h1>
        <div className="icon-detail-card">
          <PhoneIcon className="contact-icon" />
          <div className="contact-detail">
            <h2>+91 8332969461</h2>
          </div>
        </div>
        <div className="icon-detail-card">
          <MailIcon className="contact-icon" />
          <div className="contact-detail">
            <h2>ps@nitw.ac.in</h2>
          </div>
        </div>
        <div className="icon-detail-card">
          <LocationOnIcon className="contact-icon" />
          <div className="contact-detail">
            <h2>
              National Institute of Technology Campus, Hanamkonda, Telangana
              506004
            </h2>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={contactimg} />
      </div>
      <div className="last">
        <p>
          Contact Us +91 8332969461 ps@nitw.ac.in National Institute of
          Technology Campus, Hanamkonda, Telangana 506004 For UG and PG students
          seeking internships do bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla
        </p>
        <div className="find">
          <h1>Find us on....</h1>
        </div>
      </div>
    </div>
  );
}
export default Contact;
