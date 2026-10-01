"use client";

import { useContext } from "react";
import { CartContext } from "../CartContext/page";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cartProducts, clearCart } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>

      <h1 className={styles.cartTitle}>
        Shopping Cart
      </h1>

      {cartProducts.length === 0 ? (
        <h2 className={styles.emptyCart}>
          Cart is Empty
        </h2>
      ) : (
        <>
          <div className={styles.cartGrid}>

            {cartProducts.map((product, index) => (
              <div
                className={styles.cartCard}
                key={`${product.id}-${index}`}
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />

                <h3 className={styles.productTitle}>
                  {product.title}
                </h3>

                <p className={styles.price}>
                  ₹ {product.price}
                </p>

                <p className={styles.description}>
                  {product.description}
                </p>

              </div>
            ))}

          </div>

          <button
            className={styles.clearButton}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}

    </div>
  );
}