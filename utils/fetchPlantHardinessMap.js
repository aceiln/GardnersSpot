const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

// Function to fetch the plant hardiness map
async function fetchPlantHardinessMap() {
  const apiKey = process.env.COMPANION_PLANTS_API_KEY; // Retrieve the API key from the environment variable
  
  const apiUrl = `https://perenual.com/api/hardiness-map?species_id=[ID]&key=${apiKey}`;
  
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching plant hardiness map: ${error.message}`);
  }
}

module.exports = { fetchPlantHardinessMap };