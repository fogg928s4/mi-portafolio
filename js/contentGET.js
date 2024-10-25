//this will helpo us get the data for the projects
//declare variables and objs
let xmlhttp = new XMLHttpRequest();

//just declare for future use in other functions
let jsondata;



//this is for fetching data from the JSON file
function ajaxRequest(){
    //creat arr with str for activeX obj
    //first check for older browser cus u just dont know these days
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }
    else 
        return false;
}
//call what we jsut did
//yeah so the JSON decided not to work so well just raw it idec atp
let proyectsInfo = [
    {
        "title": "Texted alpha",
        "description": "Un editor de texto desde la terminal",
        "language": "C",
        "Platform": "Linux",
        "link": "https://github.com/fogg928s4/texted",
        "image": "img/texted.png",
        "info": "Texted es un editor de texto que puede usarse desde la terminal al igual que otros editores populares como Nano, Vim o NeoVim. A través de distintas herramientas y funciones disponibles en la librería estándar del lenguaje C es posible crear este proyecto. Al momento se tiene planificada una versión que incluya syntax highlight y un mejor soporte para Windows."
    },
    {
        "title": "ViU - Vi Unimproved",
        "description": "Vim, pero en JavaScript",
        "language": "JavaScript", 
        "Platform": "Web",
        "link": "https://github.com/fogg928s4/viu",
        "image": "img/viu.png",
        "info": "ViU (Vi Unimproved) es un proyecto personal que sirve como práctica para JavaScript y objetos. Es un editor de texto inspirado en la familia de editores basados en Vi como Vim y NeoVim, pues está pensando para un uso sin mouse. El editor incluye una \"línea de comandos\" en la cual es posible realizar distintas acciones de interacción. La más importante interacción es el uso de w para guardar lo escrito en un archivo que será automáticamente descargado al presionar enter junto con el nombre del archivo."
    },
    {
        "title": "DrawUI",
        "description": "Una aplicación de dibujo usando WinUI",
        "language": "CSharp", 
        "Platform": "Windows",
        "link": "https://github.com/fogg928s4/DrawUI",
        "image": "img/DrawIT.png",
        "info": "DrawUI o DrawIT es un programa de dibujo sencillo inspirado en Paint. Incluye diversas herramientas para dibujos sencillos como un lápiz, pincel, borrador y figuras. También permite cambiar el color de fondo, de lápiz y el grosor de este.El programa hecho con el framework de Microsoft para la creación de aplicaciones de escritorio llamado \"WinUI\". Este framework hace uso de XAML para establecer la estructura gráfica del proyecto, y C# o C++ para la funcionalidad."
    },
    {
        "title": "LorocOS",
        "description": "Un sistema operativo basado en Linux From Scratch",
        "language": "Bash", 
        "Platform": "Linux",
        "link": "https://github.com/fogg928s4/lorocoLFS",
        "image": "img/loroco.png",
        "info": "LorocOS es un proyecto en progreso que sigue las instrucciones del libro \"Linux from Scratch\" que sirve como guía para crear una distribución o distro de Linux desde 0 como su nombre indica. El proyecto está hecho con Bash y realiza diversas operaciones necesarias preliminares incluyendo: compilación, partición de disco y descarga de paquetes necesarios. Posteriormente se hará uso del lenguaje de programación C para acciones más complejas. El nombre del proyecto está basado en una planta tradicional salvadoreña."
    },
    {
        "title": "Mi Biblioteca",
        "description": "Sistema de administracion de una biblioteca",
        "language": "CSharp", 
        "Platform": "Windows",
        "link": "https://github.com/fogg928s4/mi-biblioteca-udb",
        "image": "img/biblioteca.png",
        "info": "Este proyecto fue un trabajo universitario de primer año que pretendía servir como un sistema de administración de biblioteca con funciones para el bibliotecario (administrador) y el usuario común. Posee un sistema funcional de registro de usuarios, libros y préstamos. Este guarda los datos en archivos de texto al ser requerimiento del proyecto. Aunque es en consola usando C#, se tiene previste adaptarse a una aplicación de GUI con Windows Forms y el uso de una base de datos de SQLite."
    },
    {
        "title": "TacoByte",
        "description": "Una plantilla para reservas de restaurantes",
        "language": "JavaScript", 
        "Platform": "Web" ,
        "link": "https://github.com/alberrtval/Taco-Byte",
        "image": "img/taco-byte.png",
        "info": "Esta aplicación web hecha con React está hecha como una plantilla para restaurantes que deseen adaptar un sistema de reserva de mesas a su inventario. El programa posee varias ventanas que incluyen una landing page, galería, un menú, contacto y la página destinada a la reserva de mesas. El proyecto realiza todas sus operaciones de manera local."
    },
    {
        "title": "The Fast Recipe",
        "description": "Una página web para buscar recetas para estudiantes",
        "language":  "HTML",
        "Platform": "Web",
        "link": "https://github.com/fogg928s4/fastrecipe",
        "image": "img/fast.png",
        "info": "The Fast Recipe es un sitio web que permite a los estudiantes buscar, encontrar y publicar sus propias recetas de comida casera."
    },
    {
        "title": "Sistema de Inscripción",
        "description": "Una aplicación para la inscripción de materias universitarias",
        "language": "CSharp", 
        "Platform": "Windows",
        "link": "https://github.com/fogg928s4/inscripcion-udb",
        "image": "img/inscripcion.png",
        "info": "Esta aplicación está hecha con Windows Forms y permite a estudiantes universitarios inscribirse a sus clases según requerimientos de carrera y horario. La aplicación admite diferentes tipos de usuarios que tienen acceso a diferentes funciones e información según su rol. Estos roles se dividen principalmente en estudiantes, profesores y administrador. El programa cuenta con una conexión a una base de datos local en MS SQL Server."
    },
    {
        "title": "Invernadero",
        "description": "Un invernadero automático hecho con Arduino",
        "language": "C++", 
        "Platform": "Arduino",
        "link": "https://github.com/fogg928s4/aco-catedra",
        "image": "img/arduino.png",
        "info": "Este proyecto universitario tenía como objetivo la creación de un invernadero automático con el uso de Arduino. Por su naturaleza, el proyecto fue hecho con C++ y luego cargado al Arduino. La imagen que aparece es el modelo del proyecto en TinkerCad con el código del mismo a la derecha. El sistema permite la verificación manual de las distintas condiciones ambientales como temperatura, humedad del suelo, nivel de luz, y también cuenta con un modo automático que realiza distintas acciones con tal de adecuar las condiciones anteriormente mencionadas. Paralelamente, el proyecto incluye un sistema de cerradura para evitar el acceso no permitido al invernadero."
}];
