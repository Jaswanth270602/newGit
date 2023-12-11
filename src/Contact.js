
import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-content">
      <div className="contact-details-container">
        <div className="contact-black-square"></div>
        <div className="contact-details">
          <div className="contact-person">
            <strong>Jaswanth Kumar</strong>
            <br />
            Whatsapp : +919182833262
          </div>
        </div>
      </div>
      <div className="contact-details-container">
        <div className="contact-black-square"></div>
        <div className="contact-details">
          <div className="contact-person">
            <strong>S.K.Hussain Valli</strong>
            <br />
            Whatsapp : +919121195671
          </div>
        </div>
      </div>
      <div className="contact-details-container">
        <div className="contact-black-square"></div>
        <div className="contact-details">
          <div className="contact-person">
            <strong>Tilak</strong>
            <br />
            Whatsapp : +918309633756
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
