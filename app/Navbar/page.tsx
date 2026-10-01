"use client";

import Link from "next/link";
import { useContext } from "react";
import styles from "./Nav.module.css";
import { CartContext } from "../CartContext/page";

export default function Nav() {
  const { cartProducts } = useContext(CartContext);

  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <h1>Flik Kart</h1>
      </div>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search products..."
        />
        <button>🔍</button>
      </div>

      <div className={styles.navLinks}>
        <Link href="/">Home</Link>

        <Link href="/ProductList">Products</Link>

        <Link href="/About-us">About</Link>

        <Link href="/Contact-us">Contact</Link>

        <Link href="/Cart">
          Cart 🛒
          <span className={styles.cartCount}>
            {cartProducts.length}
          </span>
        </Link>
      </div>

    </nav>
  );
}