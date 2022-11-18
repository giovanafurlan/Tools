var axios = require('axios');

export default function handler(req, res) {
    const {
        user
    } = req.body;

    var data = JSON.stringify({
        "url": user.url,
        "proxyCountry": "us",
        "followRedirect": true
    });

    var config = {
        method: 'post',
        url: 'https://api.geekflare.com/brokenlink',
        headers: {
            'x-api-key': '4c8fa19f-200d-42f8-aa0a-412725006e2f',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            res.status(200).json(response.data);
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log('erro api', error);
        });
}