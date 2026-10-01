"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ProductList.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        const data: Product[] = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.productsContainer}>
      {products.map((p) => (
        <div
          className={styles.productCard}
          key={p.id}
        >
          {/* Product Image */}
          <img
            src={p.image}
            alt={p.title}
            className={styles.productImg}
          />

          {/* Product Title */}
          <h3>{p.title}</h3>

          {/* Product Description */}
          <p>
            {p.description.slice(0, 80)}...
          </p>

          {/* Product Price */}
          <h4>${p.price}</h4>

          {/* Product Details */}
          <Link
            href={`/ProductDetail/${p.id}`}
            className={styles.orderButton}
          >
            Order Now
          </Link>
        </div>
      ))}
    </div>
  );
}