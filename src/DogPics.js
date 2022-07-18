import React, { useState, useEffect } from "react";
// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      });
  },[]);

  return (
    <div>
      <h1>Dog Pics</h1>
      <div>
        {images.map((image) => (
          <img src={image} alt="dog" />
        ))}
      </div>
    </div>
  );
}
export default DogPics;

  