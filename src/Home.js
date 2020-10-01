import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-YjMwNGEwYzQt-w1500._CB404620529_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="556677"
            title=" All-new Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Glacier White"
            price={249.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-NmFjY2YxOWQt-w379._SY304_CB404252974_.jpg"
            rating={5}
          />
          <Product
            id="112233"
            title="All-new Fire TV Stick with Alexa Voice Remote (includes TV controls) | Dolby Atmos audio | 2020 release"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-ZWE2NWNjNDIt-w379._SY304_CB404253081_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="123456"
            title="Introducing Amazon Luna"
            price={5.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-ZDExYWMwNDYt-w379._SY304_CB404253618_.jpg"
            rating={5}
          />
          <Product
            id="09876"
            title=" All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-ZDFmMzlmYTEt-w379._SY304_CB404253462_.jpg"
            rating={5}
          />
          <Product
            id="675423"
            title="All-new Amazon eero Introducing Amazon eero 6 dual-band mesh Wi-Fi 6 router, with built-in Zigbee"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-YTk5ZDM4MTgt-w379._SY304_CB404253192_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          {" "}
          <Product
            id="00119922"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1094.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
