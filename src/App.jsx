import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import RonnieTestimonial from "./components/RonnieTestimonial";
import IndoorPlantCard from "./components/IndoorPlantCard";
import DeskDecorations from "./components/DeskDecorations";
import OurBest from "./components/OurBest";
import CustomerReview from "./components/CustomerReview";
import feedback2 from "./assets/feedback2.png";
import feedback3 from "./assets/feedback3.jpg";
import feedback4 from "./assets/feedback4.png";
import flower from "./assets/flower.png";
import flower2 from "./assets/flower2.png";
import flower3 from "./assets/flower3.png";
import flower4 from "./assets/flower4.png";
import flower5 from "./assets/flower5.png";
import flower6 from "./assets/flower6.png";
import "./App.css";
import TopSellingPlants from "./components/TopSellingPlants";
const App = () => {
  return (
    <>
    <div className="all-container">
      <div className="main-img">
        <Navbar />

        <div className="headerSection">
          <div>
            <HeroSection />
            <div className="one-review">
            <RonnieTestimonial />
            </div>
          </div>
          <div className="plantCard">
            <ProductSection />
          </div>
        </div>
        <DeskDecorations />
      </div>

      <div className="otherSection">
        <div style={{ paddingTop: "138px" }}>
          <TopSellingPlants>Our Top Selling Plants</TopSellingPlants>
          <div
          className="card-Res"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "50px",
            }}
          >
            <IndoorPlantCard
              image={flower}
              name="Aglaonema plant"
              description="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care"
              price={300}
            />

            <IndoorPlantCard
              image={flower2}
              name="Plantain Lilies"
              description="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,"
              price={380}
            />

            <IndoorPlantCard
              image={flower3}
              name="Cactus"
              description="It is known for their ability to thrive in arid environments"
              price={259}
            />
          </div>

          <div
            className="card-Res"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "50px",
            }}
          >
            <IndoorPlantCard
              image={flower4}
              name="Swiss cheese Plant"
              description="It is a popular tropical houseplant known for its distinctive, perforated leaves"
              price={400}
            />

            <IndoorPlantCard
              image={flower5}
              name="Sansevieria plant"
              description="It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
              price={450}
            />

            <IndoorPlantCard
              image={flower6}
              name="Agave plant"
              description="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms."
              price={359}
            />
          </div>
        </div>

        <div style={{ marginTop: "200px", marginBottom: "100px" }}>
          <TopSellingPlants>Customer Review</TopSellingPlants>
        </div>
        <div style={{ display: "flex", marginLeft: "50px" }} className="card-Res">
          <CustomerReview
            image={feedback2}
            title="Shelly Russel"
            description="Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
          />
          <CustomerReview
            image={feedback3}
            title="Lula Rolfson"
            description="Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
          />
          <CustomerReview
            image={feedback4}
            title="Carol Huels"
            description="It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
          />
        </div>

        <OurBest />

        <Footer />
      </div>

      </div>
    </>
  );
};

export default App;
