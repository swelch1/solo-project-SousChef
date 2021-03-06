'use strict';
require('dotenv').config()

const express = require('express');
const cors = require('cors');
import { router } from './router';

const app = new express();
const PORT = process.env.PORT;

app
  .use(cors())
  .use(express.json())
  .use(router)
  .listen(PORT, serverStatus)

  function serverStatus (err: Error) {
    err 
    ? console.log(`Error connecting to server at ${PORT}`, err)
    : console.log(`Listening at port ${PORT}`);
  }