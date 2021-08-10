
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# ORM-ECommerceBackEnd 

## Table of Contents
1. [Description](#descrip) 
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#lic)
5. [Contributing](#contri)
6. [Tests](#test)
7. [Mock](#mock)
8. [Questions](#quest)

---------------------------------------
## 1. Description <a id="descrip"> </a>
Backend ECommerce Relational Database using Sequelize, MySQL and Express. Implements a basic Products, Categories and Tags Tables with one to many and many to many schema. Uses RESTful design philosophy.

----------------------------------------------

## 2. Installation <a id="install"></a>
Installation Instructions: 

1) Navigate to folder where server.js and login to mysql using your userid and password (cli : mysql -u 'userid' -p) 
 2) Source schema in mysql using command 'source db/schema.sql  
 3) quit out of mysql ctrl-c and seed database using command 'node seeds/index.js'  
 4) Open Insomnia and excersize the GET, PUT, POST and DELETE http commands against the routes.  Note GET can be performed by opening a localhost:3001/ using /api/tags , /api/products/ and /api/categories  respectively.

Files used in API found : https://github.com/gmcmurray/ORM-ECommerceBackEnd 

API deployed here : Not applicable - see Mock section

-------------------------------------------------

## 3. Usage <a id="usage"></a>
The API is target to be used:
Can be used for basic ECommerce product sales whichtracks inventory, price, categories.  Requires Insomnia or Postman to execute POST, PUT and DELETE requests.  Application is a RESTful implementaion using a MySQL Relational database.

-----------------------------------------------------

## 4. License <a id="lic"></a>

License covering API:
MIT License
    Copyright (c) <2021> <George McMurray>
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

----------------------------------------------

## 5. Contributing <a id="contri"></a>
George McMurray

-------------------------------------------------

## 6. Tests <a id="test"></a>
The following tests were conducted on the API:
Insomnia used to test all routes

----------------------------------------------------------------

## 7.  Mock <a id="mock"></a>

GET and POST functionality can be seen : https://youtu.be/qhW0TdXn-4M
PUT and DELETE functionality can be seen : https://youtu.be/k5XQSx8E6PU


## 8.  Questions <a id="quest"></a>
For any questions you can email me at:
gmcmurray1493@gmail.com

My github username is gmcmurray

---------------------------------
