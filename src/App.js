import React from "react";
import ImageCard from "./components/ImageCard";
import image1 from "./assets/download.jpeg";
import image2 from "./assets/top-section-bg.jpeg";
import image3 from "./assets/tree-736885_1280.jpg";
import image4 from "./assets/error_icon.png";

const images = [
  { url: image1, ready: true, error: false },
  { url: image2, ready: false, error: true },
  { url: image3, ready: true, error: false },
  { url: image4, ready: false, error: true },
];

function App() {
  return (
    <div>
      <ImageCard name="Explorin Academy" count={3} images={images} />
    </div>
  );
}

export default App;
