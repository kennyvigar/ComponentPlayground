import React, { useState, useEffect } from "react";
import "./App.css";

const kijiji = require("kijiji-scraper");

const App = () => {
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
      setAd(gameAds);

      }
      catch (err) {
        // Handle Error Here
        console.error(err);
      }
      // for (game of gameAds){
      //     console.log(game.id)
      // }

    
  } 
  const [Ad, setAd] = useState([]);

  useEffect(() => {
    getAds();
  }, []);




  return (
    <div className="App">
      <header className="App-header">
        <div>hello world</div>
        <div>{Ad.id}</div>
      </header>
    </div>
  );
};

export default App;
