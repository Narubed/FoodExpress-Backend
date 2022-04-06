let mysql = require('mysql');
// connection to mysql database

var dbCon = mysql.createConnection({
    host: 'foodexpress2.nbadigitalworlds.com',
    user: 'admin2',
    password: '*9111NBADigital',
    database: 'nbadigit_express'
})
dbCon.connect();
module.exports = dbCon;