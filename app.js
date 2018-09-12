const {getLugarLatLng} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion ciudad para clima',
    demand: true
  }
}).argv;

let getInfo = async (direccion)=>{

  try{
    let coors = await getLugarLatLng(direccion);
    let temp = await getClima(coors.lat,coors.lng);

    return `El clima en: ${coors.direccion} es de ${temp}°C`
  }catch(e){
    return `No se pudo determinar el clima en: ${direccion}`;
  }

  
}

getInfo(argv.direccion)
  .then( res => console.log(res))
  .catch(e => console.log(e));

