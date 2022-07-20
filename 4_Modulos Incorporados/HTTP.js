const http = require('http');

//creamos un servidor
const server = http.createServer((req, res) => {
    //si recibimos la peticion del puerto local respondemos con Welcome to home
    //res.write() se puede escribir varias veces hasta que se ponga res.end()
    if (req.url === "/") {
        res.write("Welcome to home");
        res.end();
    }else if(req.url === "/about"){
        res.end("Here is our short history");
    }else{
        res.end(`<h1>oops error 404</h1>  
            <a href="/">Go back to home</a>
        `);
    }
});

//activamos el puerto 3000 para usar dentro nuestro servider
server.listen(3000, () => {
    console.log("Corriendo en el puerto 3000");
});