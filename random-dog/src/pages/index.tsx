import { useState } from "react";

const dogImages: string[] = [
  "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
  "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
];

const randomDogImageDisplay = () => {
  const index = Math.floor(Math.random() * dogImages.length);
  return dogImages[index]
};

const IndexPage = () => {
  const [dogImageUrl, setDogImageUrl] = useState(
    "https://images.dog.ceo/breeds/shiba/shiba-11.jpg"
  );

  return <div className="wrapper">
    <Header />
    <Contents 
      src={dogImageUrl} 
    />
    <CommonButton 
      url={setDogImageUrl}
      images={randomDogImageDisplay}
    />
    <Footer />
  </div>;
};

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1>Cute Dog Images</h1>
      </div>
    </header>
  )
}

function Contents(props) {
  return (
    <main className="main">
      <section className="section">
        <figure className="figure">
          <img src={props.src} alt="cute dog" />
        </figure>
      </section>
    </main>
  )
}

function CommonButton(props) {
  const handleClick = () => {
    return props.url(props.images);
  }

  return (
    <button 
      onClick={handleClick}
      className="button"
    >
      <span>きょうのわんこ&#128054;</span>
    </button>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Dog images are retrieved from Dog API</p>
      <p>
        <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
      </p>
    </footer>
  )
}

export default IndexPage;