# Mi Perfil

Este proyecto es una pagina web que permite a los usuarios conocer un poco sobre mi 
y enviar mensajes a traves de un formulario. La aplicacion esta construida con:
**Node.js** y **Express** y utiliza **CSS** para el estilo de la interfaz.

## Caracteri­sticas

- Formulario de contacto con campos de **nombre**, **email** y **mensaje**.
- Validacion de entrada para asegurarse de que los campos no estan vaci­os y de que el email sea valido.
- Redireccion de los datos del formulario a una pagina de resultados.
- Respuesta visual con los datos enviados.

## Tecnologi­as Usadas

- **Node.js**: Para la creacion del servidor y manejo de rutas.
- **Express.js**: Framework para manejar las rutas y peticiones HTTP.
- **Body-parser**: Middleware para analizar el cuerpo de las solicitudes HTTP.
- **Cors**: Middleware para habilitar la comunicacion entre diferentes dominios.
- **HTML/CSS**: Para la estructura de las pÃ¡ginas y el diseño visual.

## Instalacion

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio en tu maquina local:

   git clone https://github.com/PaoChacin28/Mi-Perfil.git

2. Navega al directorio del proyecto:

    cd Nombre-del-proyecto

3. Instala las dependencias necesarias con npm:

    npm install

4. Inicia el servidor:

    node server.js

El servidor estara disponible en http://localhost:3000.

#Estructura del Proyecto

css/estilos.css: El archivo de estilo para las paginas del proyecto.
perfil.html: Pagina de mi perfil con el formulario de contacto.
server.js: Archivo principal del servidor que maneja las rutas y la logica del formulario.
form.js: se encarga de manejar la validación del formulario y redirigir al usuario a la 
página de resultados con los datos ingresados
images: Carpeta con la imagen de la pagina
package.json: Archivo de configuracion de Node.js que contiene las dependencias del proyecto.

#Rutas

/: Pagina principal que muestra el formulario de contacto.
/resultado: Pagina de resultados que muestra los datos enviados en el formularion.

#Autor 

Br. Paola Chacin
V-31.443.201 
