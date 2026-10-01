import React from "react";
import Styles  from "./About.module.css";

export default function About() {
  return (
    <div className={Styles.aboutpage}>

      <section className={Styles.abouthero}>
        <h1>About Our Store</h1>
        <p>
          Welcome to our online shopping store. 
          We provide quality products with the best shopping experience.
        </p>
      </section>


      <section className={Styles.aboutcontent}>

        <div className={Styles.aboutcard}>
          <h2>Who We Are</h2>
          <p>
            We are an e-commerce platform focused on delivering 
            amazing products at affordable prices. Our goal is to 
            make online shopping simple and enjoyable.
          </p>
        </div>


        <div className={Styles.aboutcard}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality products,
            fast service, and a trusted shopping experience 
            for every customer.
          </p>
        </div>


        <div className={Styles.aboutcard}>
          <h2>Why Choose Us?</h2>
          <p>
            ✔ Quality Products <br/>
            ✔ Affordable Prices <br/>
            ✔ Easy Shopping <br/>
            ✔ Customer Support
          </p>
        </div>

      </section>

    </div>
  );
}
