/*Ejercicio5
Gestor de Lista de Tareas.
El objetivo es crear un programa que permita al usuario gestionar 
una lista de tareas usando un arreglo y ciclos. 
El programa:
Almacena tareas en un arreglo.
Permite agregar nuevas tareas.
Muestra todas las tareas con su índice.
Permite marcar tareas como completadas.
Usa ciclos para recorrer y mostrar el estado de las tareas.
Este ejercicio combina arrays (para almacenar las tareas),
 ciclos (para mostrarlas o modificarlas), 
 y un poco de interacción con el usuario para hacerlo dinámico.

*/
    let tareas =[];

    function mostrarTareas(){
        console.log("---Lista de tareas---");
        if (tareas.length === 0){
            console.log("No hay tareas en la lista");
            return;
        }
        for(let i = 0; i < tareas.length; i++){
            //Aquí estuve atorado buen rato.
            //No tenía definida la variable estado.
            //No sabía como imprimir el índice como lo quería.
            //No podía imprimir en una sola línea, quería hacer dos console.
            //Estaba usando directamente valores boleanos, lo cual era confuso.
            let estado = tareas[i].completada ? "Completada" : "Pendiente";
            console.log(`[${i + 1}] ${tareas[i].descripcion} - ${estado}`);
        }
    }

    function agregarTarea(){
        let nuevaTarea = prompt("Ingrese una nueva tarea");
        //Usamos trim para eliminar espacios y verificamos que la tarea no esté vacía.
        if(nuevaTarea && nuevaTarea.trim() !== ""){//Validamos que exista una nueva tarea por el usuario.
            //Aquí la IA me sugirió que no solo validara que no fuera null, sino también verificar que no fuera una cadena vacía
            tareas.push({descripcion: nuevaTarea, completada: false});
            console.log(`Tarea "${nuevaTarea}" agregada.`);
            //Aquí coloqué el mostrar tareas porque estaba fuera del if.
            mostrarTareas();
        }else{//Se me sugirió al añadir las condiciones que faltaban al if, explicar qué pasa si no se cumple.
            console.log("Error: La descripción no puede estar vacía.");
        }
    }
    function completarTarea(){//Aquí en las funciones cometí el error de usar parámetros sin usarlos.
        //if(indice >=0 && indice < tareas.lenght){//Este error me apareció muchas veces.
        if(tareas.length === 0){
            console.log("No hay tareas para completar");
            return;//Esta parte no la entiendo bien.
        }
        mostrarTareas();
        let indice = parseInt(prompt("Qué tarea quieres marcar como completada?"));
        //Agregamos otra validación más.
        if(isNaN(indice)){
            console.log("Opcion no válida");
            return;
         } //Modifiqué la validación del siguiente if porque estaba incorrecta, validaba con 0
        else if(indice >= 1 && indice <= tareas.length){//Verifica si existen tareas
            tareas[indice - 1].completada = true;
            //No entendí muy bien el por qué ajustar los indices.
            //Aquí tuve un error al mandar llamar el índice en los corchetes.
            console.log(`Tarea "${tareas[indice-1].descripcion}" marcada como completada`);//Me confundo mucho con las comillas dobles.
        }else{//No había puesto que pasaba sino existía una tarea.
            console.log("Índice inválido. Por favor, selecciona una tarea válida");//El mensaje que tenía no correspondía a la acción.
        }
    }

    function mostrarOpciones(){
        let opcion;

        do{
            //Mostrar el gestor
            console.log("---Gestor de tareas---");
            console.log("Por favor selecciona la opción deseada");
            console.log("1. Mostrar tareas");
            console.log("2. Agregar tarea");
            console.log("3. Completar tarea");
            console.log("4. Salir");
            console.log("Selecciona una opción(1-4):");

            //Obtener la opción.
            opcion = parseInt(prompt("Seleccione una opción"));

            //Procesar opción deseada.
            if(isNaN(opcion) || opcion <1 || opcion >4){//Se me siguen olvidando los corchetes.
                console.log("Opción no válida. Por favor selecciona una opción entre 1 y 4");

            } //Sigo batallando para el orden de este método.
            else if(opcion === 1){
                mostrarTareas();
            }else if(opcion === 2){
                agregarTarea();//Se me siguen olvidando los punto y coma.
            }else if(opcion === 3){
                completarTarea();
            }else if(opcion === 4){
                console.log("Gracias por usar el gestor de tareas");//Cambiamos el mensaje por uno más amigable.
            }
        } while(opcion !=4);
    }
    mostrarOpciones();

