
   
   const fetch = require('node-fetch')
  
   
    // Gets horoscopes from different sources 
   

    // POST: https://aztro.sameerkumar.website?sign= <sign> &day= <day>

    //http://HoroscopesAPI.com/ <sign> //ACAO error

     // http://ohmanda.com/api/horoscope/ <sign>

    const zodiac = ['aries', 'taurus', 'gemeni', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagitarius', 'capricorn', 'aquarius', 'pisces']

    const sign = zodiac[11]

    let day = 'today'

// URLs

    const urlAztro = `https://aztro.sameerkumar.website?sign=${sign}&day=${day}`

    const urlHoroscopesAPI = `http://HoroscopesAPI.com/${sign}`

    const urlOhmanda = `http://ohmanda.com/api/horoscope/${sign}/` 

//------------------------------

async function aztro(urlAztro) {
    try {

        const response = await fetch(urlAztro, {'method':'post'})
        const myJSON = await response.json()

        console.log(myJSON.description + '\n' + '**Aztro')

    } catch (error) {
        console.log('ERROR MSG - ', error.msg)  
    }

}

function horoscopes(sign) {

    // need to find a new one
} 


async function ohmanda(urlOhmanda) {
    try {
        const response = await fetch(urlOhmanda)
        const myJSON = await response.json()

        console.log(myJSON.horoscope + '\n' + '**Ohmanda')

    } catch (error) {
        console.log('ERROR horoscopesAPI', error.msg)
    }
    
}

ohmanda(urlOhmanda)
console.log('-------------------------' + sign + '---------------------------------------------')
aztro(urlAztro)
//horoscopes(sign)