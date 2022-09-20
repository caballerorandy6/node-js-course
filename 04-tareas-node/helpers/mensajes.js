require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================".green);
    console.log("Seleccione una opcion".green);
    console.log("======================\n".green);

    console.log(`${"1".green}. Crear Tarea`);
    console.log(`${"2".green}. Listar Tareas`);
    console.log(`${"3".green}. Listar Tareas Completadas`);
    console.log(`${"4".green}. Listar Tareas Pendientes`);
    console.log(`${"5".green}. Completar Tarea`);
    console.log(`${"6".green}. Borrar Tarea`);
    console.log(`${"0".green}. Salir\n`);

    //Creando Interfaz para recibir y mostrar informacion al usuario
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion:", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

//Creando una pausa, el usuario necesitara presionar ENTER para continuar
const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
