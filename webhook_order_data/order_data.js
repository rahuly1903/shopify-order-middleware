const axios = require("axios");
const https = require('https');
function order_data(data) {
  console.log("order_data");
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    };
    axios
      .request(config)
      .then((response) => {
        console.log("sendStatus 200");
      })
      .catch((error) => {
        console.log("sendStatus 500");
      });
  } catch (error) {
    console.error(error);
  }
}

module.exports = order_data;
