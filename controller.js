'use strict';

var response = require ('./res');
var connection = require ('./connection');

exports.index = function (req, res){
    response.ok('Aplikasi restAPI anda sudah berjalan!', res);
};

//menampilkan data 
exports.showdata = function (req,res){
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan data berdasrkan id
exports.showdataid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id_mahasiswa = ?', [id], function (error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};