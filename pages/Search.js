import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import OneGiphy from "./OneGiphy"

const Search = () => {
  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);  

  const URL = `http://api.giphy.com/v1/gifs/search?q={term}&api_key=sd1CbGfQXvPksRtbZ31ZrFW2Xi1iXdHO`;

  useEffect (() =>{
      requestImages();
  }, [])

  async function requestImages() {
    const res = await fetch(
        URL
    );
    const json = await res.json();
    console.log(json.data[0]);

    setImages(json.data);

  }

  const handleOnSubmit = () => {
    console.log("hello")
  };

  return (
    <div>
    <main className={styles.main}>
        <h1>Search for any gif here:</h1>
        <form className={styles.description} onSubmit={() => handleOnSubmit}>
            <input onChange={(e) => setTerm(e.target.value)} type="text" placeholder="Search here" />
            <input type="submit" value="Submit" />
      </form>
      {images.map(image => (
        <div>
            <iframe src={image.url} class="giphy-embed" allowFullScreen></iframe><p><a href={image.url}></a></p>
        </div>
      ))}
</main>
      <p>{term}</p>
    </div>
  );
};

export default Search;
