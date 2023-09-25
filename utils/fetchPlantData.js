const axios = require('axios');

const fetchPlantData = async (apiKey) => {
  const url = `https://perenual.com/api/species-list?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching plant data from API');
  }
};

module.exports = fetchPlantData;