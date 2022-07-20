//vemos el directorio actual
console.log(__dirname);
//vemos el directorio actual y el nombre del archivo ejecutandose
console.log(__filename);

//creamos un intervalo de tiempo para que se ejecute algo cada x milisegundos
setInterval(()=>{
    console.log("Hello World");
}, 1000);