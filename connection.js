var mysql = require('mysql');

//koneksi kedatabase
const connect = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database : "db_mhs"
});

connect.connect((error) => {
    if(error) throw error;
    console.log('Database Connection ...');
});

module.exports = connect;