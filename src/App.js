// src/App.tsx or src/App.js
import './App.css';
import { useEffect, useState } from 'react';

let filenames = [
  "coffee-camp.webp",
  "swan-boat.webp",
  "torii.webp",
  "tower-records.webp",
  "general-garden.webp",
  "tokyo-shoes.webp",
  "yabusame.webp",
  "ncfd.webp",
  "2121.webp",
  "bamboo.webp",
  "canal.webp",
  "chuzenji-kesh.webp",
  "ceramic-shop.webp",
  "crew-room.webp",
  "door.webp",
  "fujicolor.webp",
  "gma.webp",
  "kegon-path.webp",
  "market.webp",
  "moss-tree.webp",
  "noodles.webp",
  "pagoda.webp",
  "red-sculpture.webp",
  "samurai.webp",
  // "landscape-crop-1.webp",
  // "landscape-crop-2.webp",
  // "landscape-crop-3.webp",
  // "landscape-crop-4.webp",
  // "img7.jpg",
  // "img8.jpg",
  // "img9.jpg",
  // "img10.jpg",
  // "img11.jpg",
]
const folderName = "/images/";

filenames = filenames.map(str => folderName + str)


function getRandomImage(exclude) {
  const filtered = filenames.filter(img => img !== exclude);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function App() {

  const [currentImage, setCurrentImage] = useState(filenames[Math.floor(Math.random() * filenames.length)]);
  const [nextImage, setNextImage] = useState(getRandomImage(filenames[0]));
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = nextImage;
  }, [nextImage]);

  const handleClick = () => {
    setIsFadingOut(true);

    setTimeout(() => {
      setCurrentImage(nextImage);
      setNextImage(getRandomImage(nextImage));
      setIsFadingOut(false);
    }, 500);
  }

  // const randomImage = useMemo(() => {
  //   const images = filenames.map(name => "/images/" + name)
  //   const index = Math.floor(Math.random() * images.length);
  //   return images[index];
  // }, []);


  return (
    <div className='App'>
      <header className='site-header'>
        <h1><a href='https://nswann.com'>Nick Swann</a></h1>
      </header>
      <div className='fullscreen-container'>
        <img
          className={`photo fade-${isFadingOut ? 'out': 'in'}`}
          src={currentImage}
          alt="center-image"
          onClick={handleClick}
        />
      </div>

    </div>
  );
}

export default App;
