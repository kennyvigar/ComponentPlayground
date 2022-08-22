const kijiji = require("kijiji-scraper");



// async function getOldGames() {
//     const options = {
//       maxResults: 10,
//     };
//     const gameParams = {
//       locationId: 1700199,
//       //categoryId: 141,//all games
//       categoryId: 623, //older gen
//       sortByName: "dateAsc",
//     };
  
//     const gameListArray = [];
  
//     const gameAds = await kijiji.search(gameParams, options);
//     gameAds.forEach(function (item) {
//       const title = item.title;
//       const id = item.id;
//       const price = item.attributes.price;
//       const date = item.date;
//       const description = item.description;
//       gameListArray.push({
//         date: date,
//         id: id,
//         title: title,
//         price: price,
//         //description: description,
//       });
//       console.log(gameListArray)
//     //   setAd(gameListArray)
//       //console.log(title);
//     });
//     //console.log(gameListArray);
//     return gameListArray;
//   }
//   getOldGames()

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
