const p = require('phin');

export default async (req, res) => {
  const {
    query: {wiki, date},
  } = req;
  let result;
  if (!wiki) {
    result = await p({url: 'https://httpbin.org/uuid', parse: 'json'});
  } else {
    result = await p({
      url: `https://zh.wikipedia.org/w/api.php?action=parse\
        &format=json\
        &page=${encodeURIComponent(date)}\
        &prop=text%7Crevid%7Cwikitext\
        &formatversion=2`,
      parse: 'json',
    });
  }
  res.statusCode = 200;
  res.json(result.body);
};
