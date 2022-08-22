import React, { useState, useEffect } from "react";
import styles from "../components/KijijiComponent.module.css";

const kijiji = require("kijiji-scraper");

const KijijiSearch = () => {
  // This is my problem here - it seems I'm unable to keep the result of this function in setAd() in useState()
    // App.Test.js shows this script correctly working

  const getAds = async () => {
    const options = {
      maxResults: 10,
    };
    const gameParams = {
      locationId: 1700199,
      //categoryId: 141,//all games
      categoryId: 623, //older gen
      sortByName: "dateAsc",
    };
    try {
      const gameAds = await kijiji.search(gameParams, options);

      //setAd() does not seem to work, when viewing state in components dev tools, no state exists.

      setAd(gameAds);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const [Ad, setAd] = useState([]);

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className={styles.KijijiSearch}>
      <header className="KijijiSearch">
        <div>hello world</div>
        <div>{Ad.id}</div>
      </header>
    </div>
  );
};

export default KijijiSearch;
