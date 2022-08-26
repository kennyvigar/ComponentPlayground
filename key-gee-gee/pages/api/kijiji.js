const kijiji = require("kijiji-scraper");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const options = {
  maxResults: 10,
};
const gameParams = {
  locationId: 1700199,
  //categoryId: 141,//all games
  categoryId: 623, //older gen
  sortByName: "dateAsc",
};

const handler = async (req, res) => {
  const gameAds = await kijiji.search(gameParams, options);

  res.status(200).json(gameAds);
};

export default handler;
