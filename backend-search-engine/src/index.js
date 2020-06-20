//importaciones de módulos de tipo core, esto es más de lado del servidor

const express = require("express");

//importaciones de módulos locales, que son lo que se aporvechan para las funciones que se desarrolan. 
const {error, info  }= require('./modules/my-log');
const pais  = require('countries-list')

const app= express()

app.get("/", function(request,response){
    response.status(200).send("Holaaaa")
})
// var server = http.createServer(
//     function(request, response) {
//         var parsed = url.parse(request.url); // para dividir la url y recibir parametros
//         console.log("parsed",parsed)
//         var pathname= parsed.pathname;
//         var query = querystring.parse(parsed.query)
//         console.log("query",query)

//         if(pathname === "/"){
//             response.writeHead(200, {"Content-Type": "text/html"});
//             response.write("<html><body><p>Ella no te ama</p></body></html>");
//             response.end();
//         } else if(pathname === "/seguro") {
//             response.writeHead(200, {"Content-Type": "text/html"});
//             response.write("<html><body><p>Asies amiguito</p></body></html>");
//             response.end();
//         }else if(pathname === "/country") {
//             response.writeHead(200, {"Content-Type": "application/json"});
            
//             response.write(JSON.stringify(pais.countries[query.code] ));
//             response.end();
//         }else if(pathname === "/error") {
//             var result= error(request.url)
//             response.writeHead(200, {"Content-Type": "text/html"});
//             response.write(result);
//             response.end();
//         }else {
//             response.writeHead(404, {"Content-Type": "text/html"});
//             response.write("<html><body><p>NOT FOUND</p></body></html>");
//             response.end();
//         } 
//     }

// );

app.listen(4000, function(){
    console.log("running on 4000")
});