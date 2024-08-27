import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: 5,
  margin: 10,
  padding: 20,
  fontSize: 24,
  fontWeight: "bold",
};

const CarouselAutoplay: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 className="bg-red-500" style={contentStyle}>
        1
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default CarouselAutoplay;
