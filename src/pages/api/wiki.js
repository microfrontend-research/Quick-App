const got = require('got');

export default async (req, res) => {
  const {
    query: {wiki, date},
  } = req;
  let result;
  if (!wiki) {
    result = await got('https://httpbin.org/uuid');
  } else {
    result = await got(
      `https://zh.wikipedia.org/w/api.php?action=parse\
        &format=json\
        &page=${encodeURIComponent(date)}\
        &prop=text%7Crevid%7Cwikitext\
        &formatversion=2`
    );
  }
  res.statusCode = 200;
  res.json(result.body);
};
