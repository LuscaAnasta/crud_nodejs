const mysql = require('mysql2');
const credentials = require('./credentials')

console.log(credentials.secrets.host)

const connection = mysql.createConnection({
        host: credentials.secrets.host,     // host for connection
        port: credentials.secrets.port,            // default port for mysql is 3306
        database: credentials.secrets.database,      // database from which we want to connect our node application
        user: credentials.secrets.user,          // username of the mysql connection
        password: credentials.secrets.password 
    })


connection.connect(function(err) {
    if (err) {
        console.log("error occurred while connecting:\n"+err);
    } else {
        console.log("connection created with mysql successfully");
    }
});

function insertUsuario(data){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        let sql = `INSERT INTO usuariosdolulu (nome, senha) VALUES ('${data.nome}', '${data.senha}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}



module.exports = {
    insertUsuario
}