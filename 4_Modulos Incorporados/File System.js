const fs = require("fs");

//SINCRONO

//leemos un archivo, le decimos la ubicacion con el archivo y la decodificacion
const first = fs.readFileSync("./content/firstText.txt", "utf8");
console.log(first);

//escribimos dentro de un archivo y si no existe lo crea
const second = fs.writeFileSync("./content/result-sync.txt", "Hello there", {flag: "a"});


//ASINCRONO

fs.writeFile("./content/firstText.txt", "Texto Asincrono", (err, result)=>{
    if(err){
        console.log(`Error: ${err}`);
    }else{
        console.log(result);
    }
});

fs.readFile("./content/firstText.txt", "utf8", (err, result)=>{
    if(err){
        console.log(`Error: ${err}`);
    }else{
        //undefined xque writeFile no devuelve nada
        const firstFile = result;
    }
});

//el asincrono ermite que todos los usuarios trabajen al mismo tiempo
//el sincrono no permite que un usuario haga nada hasta que el otro ya haya acabada

//sincrono puede ser util al descargar archivos ya que no permitimos que se descargue un archivo hasta que se haya descargado el anterior