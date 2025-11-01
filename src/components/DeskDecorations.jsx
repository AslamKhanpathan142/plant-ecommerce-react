import React from "react";
import styles from "../styles/DeskDecorations.module.css";
import desk1 from "../assets/desk1.png";
import desk2 from "../assets/desk2.png";
import bag from "../assets/bag.png";
import Button from "./Button";
import TopSellingPlants from "./TopSellingPlants";

const DeskDecorations = () => {
  const cards = [
    {
      img: desk1,
      title: "For Your Desks Decorations",
      description:
        "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: "599",
    },
    {
      img: desk2,
      title: "For Your Desks Decorations",
      description: `The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming`,
      price: "399",
    },
  ];
  return (
    <>
      <TopSellingPlants children={"Our Trendy plants"} />
      {cards.map((card, index) => (
        <div
          className={styles.card}
          key={index}
          style={{ marginTop: index === 1 && "200px" }}
        >
          <div
            className={styles.imageContainer}
            style={{ order: index == 0 ? 0 : 1 }}
          >
            <img
              src={card.img}
              alt="Desk Decorations with Greenery"
              className={styles.productImage}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{card.title}</p>
            <p
              className={styles.description}
              style={{ whiteSpace: "pre-line" }}
            >
              {card.description}
            </p>
            <p className={styles.price}>Rs.{card.price}/-</p>
            <div className={styles.Buttons}>
              <Button>Explore</Button>
              <button className={styles.exploreBtn}>
                <img src={bag} alt="" className={styles.bag} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DeskDecorations;
