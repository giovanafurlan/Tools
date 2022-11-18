var axios = require('axios');

export default async function handler(req, res) {
  const {
    user
  } = req.body;

  var config = {
    method: 'get',
    url: `https://api.ip2whois.com/v2?key=65ED04B517E05788FA98313B0DEB8ADE&domain=${user.url}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}