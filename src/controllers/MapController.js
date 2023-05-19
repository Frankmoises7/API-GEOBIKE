require("dotenv").config();
const axios = require("axios");
const apiKey = process.env.API_KEY_MAP;
const apiUrl = process.env.API_URL;

class MapController {
  renderMaps(req, res) {
    const search = req.params.query;
    const params = {
      access_key: apiKey,
      query: search,
      limit: 1,
    };
    console.log(search)
    const getData = async () => {
      try {
        const response = await axios.get(apiUrl, { params });
        const { data } = response;
        const name = data.data[0].name;
        const latitude = data.data[0].latitude;
        const longitude = data.data[0].longitude;
        return { name, latitude, longitude };
      } catch (error) {
        console.log(error);
      }
    };

    const sendData = async () => {
      try {
        const { name, latitude, longitude } = await getData();
        //console.log(`${name}, ${latitude}, ${longitude}`);
        res.send(`${name}, ${latitude}, ${longitude}`);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    sendData();
  }
}

module.exports = MapController;
