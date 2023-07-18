# Ecommerce de Aceites

Este es un proyecto de un ecommerce de aceites implementado utilizando React, React Bootstrap, Formik y Yup.

## Características

- Muestra una lista de productos de aceites disponibles.
- Permite ver los detalles de un producto seleccionado.
- Permite agregar productos al carrito de compras.
- Muestra el carrito de compras con los productos agregados.
- Permite vaciar el carrito de compras.
- Implementa un formulario de contacto utilizando Formik y Yup para la validación.
- Los datos del formulario de contacto se envían y se almacenan en Firebase.

## Instalación

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la configuración de Firebase.

5. Ejecuta el siguiente comando para iniciar la aplicación:

   ```
   npm run start
   ```

6. Abre tu navegador web y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Tecnologías utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- React Bootstrap: Biblioteca de componentes de interfaz de usuario basados en Bootstrap para React.
- Formik: Biblioteca para manejar formularios en React.
- Yup: Biblioteca para la validación de esquemas de datos en JavaScript.

## Estructura del proyecto

- **`src/Components`**: Contiene componentes reutilizables utilizados en varias páginas.
- **`src/Context`**: Contiene el contexto y el proveedor para la gestión del carrito de compras.
- **`src/firebase`**: Contiene la configuración de Firebase.
- **`src/Pages`**: Contiene las páginas principales de la aplicación.
- **`src/App.js`**: Punto de entrada de la aplicación y definición de las rutas.
- **`public`**: Contiene archivos estáticos y la página HTML principal.
