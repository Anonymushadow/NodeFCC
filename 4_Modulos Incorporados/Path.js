const path = require("path");

//devuelve el separador de archivos de la plataforma (/ o \)
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);