const axios = require('axios');
const getClima = async(lat,lng) => {
  let encodedUrl= encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=b383109f4ecaa8e9d83cf764ca1ebd8c`);
  let res = await axios.get(encodedUrl);
  return res.data.main.temp;
}

module.exports = {
  getClima
}