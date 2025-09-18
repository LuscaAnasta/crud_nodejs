const con = require('./connection')

function login(data){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        let sql = `select * from usuariosdolulu where nome='${data.nome}' and senha='${data.senha}'`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            if(result){
                console.log('Usuario encontrado!')
            }else{
                
                console.log('Usuario não encontrado.')
            }
        });
    });
}


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
    
}