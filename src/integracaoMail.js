const nodemailer = require('nodemailer');
const { host, port, secure, user, pass, rejectUnauthorized, from, text } = require('./config/mailConfig.json')
const JSONTransport = require('nodemailer/lib/json-transport');

var express = require('express');
var app = express()



function main(){
    const transport = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass, },
        tls: { rejectUnauthorized },
    });
    
    function verificarIntegracao(statusIntegracao) {
        statusIntegracao = transport.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Integrado com sucesso!");
            }
        });
        return statusIntegracao

    };
    
    
    function envio(enviar) {
        enviar = transport.sendMail({
            from,
            text,
            to: "joao.alves@nectarcrm.com.br, ddessak@outlook.com",
            subject: "Teste de termmo condiminio",
            html: "<p>HTML version of the message</p>"
        });
        return enviar

    };

    
    return verificarIntegracao();

};

app.post('/sendMail', function (req, res){
    res.send(envio())
});

app.listen(3000)

console.log(main());

// comentario


