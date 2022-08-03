# Coderhouse
## Mi proyecto

## Descripcion

El proyecto se basara en una tienda de herramientas. La idea seria que el usuario pueda ver todos los productos en el home del sitio y pueda seleccionar y comprar eligiendo la cantidad que desee. 

## Librerias

Use la libreria de Bootstrap dado que me permitia asignarle un estilo mas rapidamente, asi podia enfocarme en el codigo.

## Paginas

Mediante la funcion de react "browser router" es que funciona la navegacion, junto una url especifica para cada pagina.

#### Home

En esta seccion se muestran todos los productos disponibles, para acceder a cada producto se debe clickear en el boton de detalles para poder acceder a los mismos.

#### Categorias

Esta seccion incluye dos categorias que son martillos y palas. Cada una de las paginas muestra los productos por sus respectivas secciones. Esto lo logre filtrando mis listas de firestore utilizando el comando where dentro del comando query para filtrar por categorias.

#### Quienes somos

Esta pagina muestra brevemente la descripcion de la empresa.


## Items

Los items muestran su imagen, nombre y un boton de detalles que redirecciona a los detalles del item. Dentro de los detalles se puede ver todo lo anterior mas una descripcion y un contador con el cual se pueden sumar las cantidades deseadas para comprar siempre y cuando no superen el stock. En ese caso no se podra sumar mas. Luego de apretar en el boton de agregar al carrito, te aparece un boton para ir al carrito. Si se agrega un item con cantidad 0 se pide que por favor se ingrese un numero. Si en la url se ingresa el id de un item que no existe, aparecera en la pagina un mensaje diciendo que no hay stock de ese producto y aparecera un boton para ir al inicio.

## Carrito

Al carrito se puede acceder una vez agregado un item o clickeando en el icono del carrito. En esta seccion aparecen todos los items que se agregaron al mismo, con formato de imagen contador y un boton para eliminar directamente el item. A traves de este contador se podra restar y sumar la cantidad siempre y cuando no supere el stock. Los items son agregados a un array mediante la funcion "useState", el cual este sera el carrito. Luego debajo tendra un contador el cual muestra el total del carrito y un boton para vaciar el mismo. Luego habra un formulario para concretar la compra, el cual pedira que ingreses los datos para luego informarte si no hubo errores, que se concreto la compra exitosamente, e informara el codigo de compra generado por firebase. Todos estos datos son enviados al servidor de firebase. Si el usuario no ingresa ningun dato en el formulario le saldra un mensaje para que ingrese los datos, sino no podra avanzar con la compra. Las funciones y propiedades del carrito estan hechas dentro de un context el cual me permite acceder a sus funciones en las distintas paginas.


#### 