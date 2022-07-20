const os = require("os");

//obtener informacion del usuario
const user = os.userInfo();
console.log(user);

//tiempo que el sistema estuvo activo(en segundos)
console.log("Tiempo de uso del sistema: " + os.uptime() + " segundos");

//obtener el marcador de fin de linea (/r  /n   /r/n)
console.log(os.EOL);

//ver si el sistema es de 32 o 64 bits
console.log(os.arch(constants));

//obtener info. de cada cpu de la pc
console.log(os.cpus())

//ruta especifica del dispositivo
console.log(os.devNull)

//identificador del cpu para el que node compila
console.log(os.endianness())

//memoria disponible
console.log(os.freemem())

//verificar una prioridad
console.log(os.getPriority([pid]))

//direccion del directorio principal
console.log(os.homedir())

//nombre del host actual
console.log(os.hostname())

//medidas de carga de 5 y 15 minutos
console.log(os.loadavg())

//interfaces de red
console.log(os.networkInterfaces())

//plataforma del sistema operativo
console.log(os.platform())

//ver el sistema operativo
console.log(os.release())

//añadir una prioridad
console.log(os.setPriority([pid, ]))

//directorio de los archivos temporales
console.log(os.tmpdir())

//memoria total
console.log(os.totalmem())

//tipo del sistema operativo
console.log(os.type())

//version del nucleo
console.log(os.version())