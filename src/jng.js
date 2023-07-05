const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const SetupInit = async ({ cloud_name, api_key, api_secret }) => {
    if (!cloud_name) throw new Error('No cloud_name provided');
    if (!api_key) throw new Error('No api_key provided');
    if (!api_secret) throw new Error('No api_secret provided');
    cloudinary.config({
        cloud_name: cloud_name,
        api_key: api_key,
        api_secret: api_secret,
    });
}

const FileUpload = async (inputJson, addonName, outputFormat, tags) => {
    return new Promise(async (resolve, reject) => {
        if (!inputJson) throw new Error('No inputJson provided');
        const data = JSON.parse(fs.readFileSync(inputJson, "utf-8"));
        const conversions = [];

        data.forEach((imagePath) => {
            const name = imagePath.split("/").pop().split(".")[0] + "_" + addonName + "_" + data.length;
            if (outputFormat === 'png') {
                cloudinary.uploader.upload(`${imagePath}`, { public_id: `${name}`, tags: tags });
            } else if (outputFormat === 'jpg') {
                cloudinary.uploader.upload(`${imagePath}`, { public_id: `${name}`, tags: tags, format: 'jpg' });
            } else {
                throw new Error('Invalid output format specified');
            }

            const url = cloudinary.url(`${name}`, {
                secure: true,
            });

            const convertedURL = outputFormat === 'jpg' ? `${url}.jpg` : `${url}.png`;
            conversions.push(convertedURL);
        });

        resolve(conversions);
    });
};


module.exports.init = SetupInit;
module.exports.upload = FileUpload;