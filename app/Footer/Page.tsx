import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContainer}>

        {/* Brand */}
        <div className={styles.footerBox}>
          <h2>ShopEasy</h2>
          <p>
            Discover the latest fashion, electronics, home essentials,
            and much more at affordable prices.
          </p>
        </div>

        {/* Company */}
        <div className={styles.footerBox}>
          <h3>Company</h3>

          <Link href="/About-us">About Us</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Press</Link>
        </div>

        {/* Support */}
        <div className={styles.footerBox}>
          <h3>Support</h3>

          <Link href="/">Help Center</Link>
          <Link href="/">Returns</Link>
          <Link href="/">Shipping</Link>
          <Link href="/">Track Order</Link>
        </div>

        {/* Legal */}
        <div className={styles.footerBox}>
          <h3>Legal</h3>

          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Refund Policy</Link>
          <Link href="/">Cookies</Link>
        </div>

        {/* Newsletter */}
        <div className={styles.footerBox}>
          <h3>Newsletter</h3>

          <p>Subscribe to receive special offers.</p>

          <div className={styles.social}>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>

      </div>

      <hr />

      <div className={styles.footerBottom}>

        <div>
          © 2026 <strong>ShopEasy</strong>. All Rights Reserved.
        </div>

        <div className={styles.payment}>
          💳 Visa &nbsp; 💳 MasterCard &nbsp; 💳 PayPal
        </div>

      </div>

    </footer>
  );
}

