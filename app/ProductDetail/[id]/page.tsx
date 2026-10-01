"use client";

import { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import styles from "./ProductDetail.module.css";
import { CartContext } from "../../CartContext/page";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        const data: Product = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailCard}>

        {/* Product Image */}
        <div className={styles.imageSection}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
        </div>

        {/* Product Information */}
        <div className={styles.infoSection}>

          <h1>{product.title}</h1>

          <h2>${product.price}</h2>

          <p>{product.description}</p>

          <button
            className={styles.buyButton}
            onClick={() => {
              addToCart(product);
            
            }}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}