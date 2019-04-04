const axios = require('axios');

const getClima = async(lat, lng)=>{
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=AquiVaLaKeyApi&units=metric`);
  // debes registrarte y obtener el apikey de openweathermap, te proporciona una que se activa en cuestion de horas
  return resp.data.main.temp;
}
module.exports = {
  getClima
}