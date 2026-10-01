import Link from "next/link";
import styles from "./Offer.module.css";

export default function OfferSection () {
  const products = [
    {
      id: 1,
      title:
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },

    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve...",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    },

    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "Great outerwear jackets for Spring/Autumn/Winter.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },

    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
  ];

  return (
    <div className={styles.offerSection}>
      <h1>OFFER SECTION</h1>

      <div className={styles.productsContainer}>
        {products.map((p) => {
          return (
            <div className={styles.productCard} key={p.id}>
              
              <img
                src={p.image}
                alt={p.title}
                className={styles.productImg}
              />

              <h3>{p.title}</h3>

              <div className={styles.off}>
                <p>min. 50% off</p>
              </div>

              <div className={styles.btn}>
                <Link href="/Products">
                  <button>SHOP NOW</button>
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

