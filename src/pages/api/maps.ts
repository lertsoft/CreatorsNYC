// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import path from 'path';

// // export default (req, res) => {
// //   res.statusCode = 200;
// //   res.json({ name: 'Alice & Bob' });
// // };

// // const path = require('path');

// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const express = require('express');
// // const { query } = require('express');
// // const { use } = require('express/lib/application');
// // const fetch = require('node-fetch');

// const PORT = process.env.PORT || 3003;
// base_url = 'http://api.earth911.com/';
// api_key = process.env.NEXT_PUBLIC_EARTH_API;

// const app = express();

// app.use(cors());

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../LifeCycle/')));

// // All other GET requests not handled before will return our React app
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../LifeCycle/', 'index.html'));
// });

// // Handle GET requests to /api route
// app.get('/api/', async (req, res) => {
//   const response = await fetch(
//     `http://api.earth911.com/earth911.getPostalData?api_key=${api_key}${query}`
//   );
//   const data = await response.json();

//   console.log(data);
//   res.json(data);
// });

// // app.post('/api/world', (req, res) => {
// //   console.log(req.body);
// //   res.send(
// //     `I received your POST request. This is what you sent me: ${req.body.post}`,
// //   );
// // });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
