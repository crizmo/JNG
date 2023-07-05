const jng = require('../index');
require('dotenv').config()

jng.init({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

jng.upload('tests/test.json', 'kurizu', 'png', 'anime').then(url => {
    console.log(url);
});
