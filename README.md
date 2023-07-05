<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/crizmo/JNG">
    <img src="https://cdn.discordapp.com/attachments/1126205512212553818/1126205549806104576/jng.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">JNG</h3>
  <p align="center">
    <a href="https://www.npmjs.com/package/jng"><img src="https://img.shields.io/npm/v/jng.svg?maxAge=3600&style=for-the-badge" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/jng"><img src="https://img.shields.io/npm/dt/jng?style=for-the-badge" /></a>
    <a href="https://www.npmjs.com/package/jng"><img src="https://img.shields.io/npm/l/jng?style=for-the-badge" /></a>
  </p>
  <p align="center">
    Convert images to urls
    <br />
    <a href="https://github.com/crizmo/JNG"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/crizmo/JNG">View Demo</a>
    ·
    <a href="https://github.com/crizmo/JNG/issues">Report Bug</a>
    ·
    <a href="https://github.com/crizmo/JNG/issues">Request Feature</a>
  </p>
</div>
    

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#functions">Functions</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Converts .jpg urls to .png urls and vice versa. <br>
- How it works <br>
Images are sent to a cloudinary server and then converted to .png or .jpg. <br>
The package willthen return the changed url. <br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

1. Make a account on cloudinary - https://cloudinary.com/users/register/free
2. Copy the cloud name, api key and api secret from the cloudinary console - https://cloudinary.com/console
3. Paste the cloud name, api key and api secret in the .env file named `CLOUD_NAME`, `API_KEY` and `API_SECRET`
4. Check env_example file for more info - <a href="/tests/.env_example">env_example</a>
7. Install the required packages - `cloudinary, dotenv, fs`
8. Install jng using npm <br>
   ```sh
   npm install jng
   ```
9. Require the package in your main file <br>
   ```JS
   const jng = require('jng');
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Functions

```javascript
jng.init({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Init function is used to setup the cloudinary server

jng.upload('tests/test.json', 'kurizu', 'png', 'anime').then(url => {
    console.log(url);
});

```

## Note

1. Here tests/test.json - is the path to the image you want to send and it looks like this - 
```json
[ 
  "https://kurizuanime_1.jpg", 
  "https://kurizuanime_2.jpg" 
]
```

2. kurizu - is the name that i want to add to the url
3. png - is the format that i want to convert the image to
4. anime - is the tag that i want to add to the image

// Upload function uploads the image to the channel and then fetches its url
Check env_example file for more info - <a href="/tests/.env_example">env_example</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

```javascript
const jng = require('jng');
require('dotenv').config()

jng.init({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

jng.upload('tests/test.json', 'kurizu', 'png', 'anime').then(url => {
    console.log(url);
});

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## For more information on how to use it visit

- [Github](https://github.com/crizmo/JNG)
- [Example](https://github.com/crizmo/JNG/tree/main/tests)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Add Changelog
- [ ] Add Tests
- [ ] Add Additional Templates w/ Examples
- [ ] Add Support for more image formats
- [ ] Documentation
    - [ ] Website
    - [ ] Examples
    - [ ] Wiki
- [ ] Add Support for more platforms

See the [open issues](https://github.com/crizmo/JNG/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contjng
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
Package Made by: `kurizu.taz` on discord <br>
Github - [https://github.com/crizmo/JNG](https://github.com/crizmo/JNG)