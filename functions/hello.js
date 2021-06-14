
exports.handler = async event => {
    const axios = require('axios')
    const response =await axios.get('https://swapi.dev/api/people/1')
    return {
        statusCode: 200,
        body: `Hello ${response.data.name}!`
    }
  }