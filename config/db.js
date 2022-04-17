let mysql = require('mysql2');
// connection to mysql database

var dbCon = mysql.createConnection({
    host: '203.159.92.65',
    user: 'nbadigit_express',
    password: 'U18XcYBs',
    database: 'nbadigit_express'
})
dbCon.connect();
module.exports = dbCon;