/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const pinataSDK = require("@pinata/sdk");

let hash;

const pinata = pinataSDK(
  "edbd9cd10dfc32668c46",
  "dabc3eee2a027b5c6feead5479904446fdb2511f13e41e5d684e5b89a3622ffc"
);
const fs = require("fs");

const pinFile = async (path) => {
  const strmFile = fs.createReadStream(path);
  const options = {
    pinataMetadata: {
      name: "DinoSours",
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };
  const result = await pinata.pinFileToIPFS(strmFile, options);

  return result.IpfsHash;
};

const main = async (params) => {
  // read images
  const imageFiles = fs.readdirSync("./images");
  console.log("image files: ", imageFiles);

  // loop through the images and pin to pinata
  for (const image of imageFiles) {
    const [index] = image.split(".");
    // if (index > 0 && index <= 1) {
    try {
      hash = await pinFile(`./images/${image}`);

      // load metadata for image as JSON object
      const metaDataPath = `./json/${index}.json`;
      const indexMetaData = JSON.parse(
        fs.readFileSync(metaDataPath).toString()
      );
      // add hash to JSON object
      indexMetaData.image = "https://dinosours.mypinata.cloud/ipfs/" + hash;

      // write meta data back to file (Optional: You can write JSON directly to IPFS)
      fs.writeFileSync(metaDataPath, JSON.stringify(indexMetaData));

      console.log(`Write for image ${index}: IPFS Hash is ${hash}`);
    } catch (error) {
      console.error("Error: ", error);
    }
    // }
  }

  // upload JSON folder to IPFS here
  const options = {
    pinataMetadata: {
      name: "DinoSours",
      keyvalues: {
        series: "1",
        minted: "03/2022",
      },
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  pinata
    .pinFromFS("./json", options)
    .then((result) => {
      // handle results here
      console.log(result);
    })
    .catch((err) => {
      // handle error here
      console.log(err);
    });
};

main();
