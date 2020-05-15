const express = require('express')
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

import {PORT} from './Config/config';
import { addUserRole, addUser } from './Controller/user-controller';
import dbConnection from './Database/database-connection';

//Maintain dbConnection
dbConnection();

//Routes
app.post('/role',addUserRole);
app.post('/user',addUser)

app.listen(PORT,async()=>{
 console.log(`Server is Running at port ${PORT}`)
})