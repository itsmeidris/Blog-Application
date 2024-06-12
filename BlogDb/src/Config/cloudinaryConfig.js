const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const cloudName = process.env.CLOUD_NAME;
const cloudApiKey = process.env.CLOUD_API_KEY;
const cloudApiKeySecret = process.env.CLOUD_KEY_SECRET;

cloudinary.config({
    cloud_name : cloudName,
    api_key : cloudApiKey,
    api_secret : cloudApiKeySecret,
    secure : true
});

module.exports = {cloudinary};