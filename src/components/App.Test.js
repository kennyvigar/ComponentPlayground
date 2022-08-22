const kijiji = require("kijiji-scraper");

//This works as a Node Script
// Run by
//  npm i
//  node componentplayground/src/components/App.Test.js

// For some reason, this does not work within the `KijijiComponent.js` to render in state
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
  
    const gameAds = await kijiji.search(gameParams, options);
    
    for (game of gameAds){
        console.log(game.id)
    }
   // setAd(gameAds)
  
  }
  getAds()
