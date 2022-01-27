## Módulo 3: Ejercicio de evaluación final

El ejercicio consiste en desarrollar una página web con un listado de personajes de Harry Potter, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

---

**Diseño**

<img src="./src/images/hp-design.png"/>

Vamos de definir las distintas partes del ejercicio:

**1. Listado de personajes**

En primer lugar, vamos a realizar una web con el listado de personajes de Harry Potter. Para eso, vamos a
utilizar el servicio de https://hp-api.herokuapp.com/ que nos devuelve información sobre los personajes de
Harry Potter filtrados por la casa a la que pertenece. Sobre cada uno, vamos a pintar al menos:

- Foto
- Nombre
- Especie

Puedes ingresar a su página oficial del servicio https://hp-api.herokuapp.com/

**Imágenes**

Algunas de los personajes que devuelve el API no tienen imagen (como, por ejemplo, los Dursley: Vernon
Dursley, Petunia Dursley, ... o James Potter). En ese caso hay que mostrar una imagen de relleno. Podemos
crear una imagen de relleno con el servicio de placeholder.com donde en la propia URL indicamos el
tamaño, colores, texto: https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter, o puedes usar
tu creatividad...

**2. Filtrado de personajes**

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos
por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al
escribir 'h' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

Nota: en principio no es necesario tener en cuenta si las letras están en mayúscula / minúscula para
la búsqueda, pero si queréis añadir esta mejora pues genial.

**3. Filtrado por casa**
Ahora que ya tenemos el listado de personajes en pantalla, y filtrado por nombre la siguiente parte consiste
en poder buscarlos por casa. Para eso, añadimos un select a la interfaz, de forma que al seleccionar una
casa queden en la interfaz solo los personajes cuya casa es la seleccionada.

Nota: Por defecto, cuando carga la página debe aparecer la casa gryffindor.

**4. Componentes del listado de personajes**

El listado debe tener los siguientes componentes como mínimo:

- Componente para el filtro de nombre.
- Componente para el listado.
- Componente para la tarjeta de cada personaje del listado
- Componente para el detalle de cada personaje.

**5. Detalle de personajes**

Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información
aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá además de la foto, nombre, la casa a la que pertenece , si está vivo o muerto, género, especie y los nombres alternativos en caso de que los tenga.

**6. Detallitos de calidad**

- Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta
  `<form />`.
- Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie
  la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto
  se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o
  minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar
  el texto que tenía anteriormente.

**7. BONUS: Mejoras visuales**

Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:

- En el detalle del personaje mostrar la casa con su respectivo emblema y si un personaje está vivo o
  muerto con su respectivo icono.
- Usar algún sistema de grid para pintar el listado de personajes.
- Que funcione bien el responsive en dispositivos pequeños.

**8. BONUS: URL compartible**

Como ejercicio extra os proponemos que la URL del detalle de personaje sea compatible, es decir,
que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Si refescamos
el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje
del tipo "El personaje que buscas no existe".

**9. BONUS: Ordenación**

Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.

**10. BONUS: Más filtros**

Un extra interesante sería que añadáis más filtros para filtrar por ejemplo por género.

**11. BONUS: Boton Reset**

Un extra interesante sería añadir un boton de reset para que la página vuelva a su listado principal
