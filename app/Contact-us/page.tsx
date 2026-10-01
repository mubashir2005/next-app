import React from "react";
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <div className={styles.contactpage}>

      <div className={styles.contactheader}>
        <h1>Contact Us</h1>
        <p>
          Have any questions? Feel free to contact us.
        </p>
      </div>


      <div className={styles.contactcontainer}>

        <div className={styles.contactinfo}>
          <h2>Get In Touch</h2>

          <p>📍 Location:Malappuram, Kerala, India</p>
          <p>📧 Email: support@store.com</p>
          <p>📞 Phone: +91 98765 43210</p>

          <h3>Follow Us</h3>
          <p>
            Facebook | Instagram | Twitter
          </p>
        </div>



        <div className={styles.contactform}>

          <h2>Send Message</h2>

          <input 
            type="text" 
            placeholder="Your Name"
          />

          <input 
            type="email" 
            placeholder="Your Email"
          />

          <input 
            type="text" 
            placeholder="Subject"
          />

          <textarea 
            placeholder="Your Message">
          </textarea>


          <button>
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
}
