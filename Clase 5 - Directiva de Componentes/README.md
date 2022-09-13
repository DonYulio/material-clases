# Componentes

Hay que recordar que los componentes son una directiva en Angular, bastante especial, ya que uno de sus principales fines es mostrar contenido por pantalla mediante la estructura HTML que tienen enlazado.

También hay que recordar que las directivas en Angular se utilizan en manipular el **DOM** y si lo vemos de un punto de vista, está directica se encarga de mostrar contenido por el **DOM** que viene desde una plantilla (**plantilla** o **templateUrl**).

Para identificar un componente, hay que observar lo siguiente:

![Estructura de un componente](./img/Estructura%20de%20un%20componente.png)

En donde se observa, un decorador que describe:

* Selector, es el nombre de la etiqueta que se deberá usar para la invocación del componente, debe ser único.
* Template/templateUrl, es la vinculación con una estructura HTML, puede ser archivo externo o escrito directamente con “template”
* styleUrls, parámetro opcional, puede vincular uno o más archivos de estilos.
* Clase normal, Clase normal que se añadirán nuevas funcionalidades y vinculará a una plantilla gracias al decorador @Component 

## Creación de componentes

Para crear un componente, se puede usar la herramienta CLI que trae Angular, con el siguiente comando:

```bash
ng generate component <nombre del componente>
```

**Nota:**  se puede crear un componente dentro de una carpeta, especificándola de la siguiente forma: <**nombre carpeta**>/<**nombre del componente**>

* Reemplazar <**nombre del componente**> con el nombre de tu componente.
* **Opcional** puedes anteponer una carpeta para almacenar tu componente.

Puedes abreviar este comando de la siguiente forma:

```bash
ng g c <nombre del componente>
```

| Abreviatura | Comando   |
| ----------- | --------- |
| g           | generate  |
| c           | component |

Para este ejemplo crearemos un componente llamado **“contador“** que este dentro de la carpeta **“componentes”**

![Creando un componente](./img/Creando%20un%20componente.png)

### Resultado

![Salida de la creación](./img/Salida%20creaci%C3%B3n%20componente.png)

![Archivos de un componente](./img/Archivos%20de%20un%20componente.png)

Un componente creado, en donde tenemos:
* Un archivo para la lógica de programación (ts)
* Un archivo para nuestra estructura web (html)
* Un archivo para nuestros estilos (css)
* Actualización del archivo llamado app.modulo.ts.

**Nota:** Los componentes deben ser registrados dentro de un modulo de **forma obligatoria** para su uso, esto se debe hacer en el apartado de **“declarations”** del módulo, previamente importado el componente. **Si se creo el componente por el CLI de Angular, este paso se hace de forma automática**

**Nota:** Un componente solo puede estar en un módulo. Si dicho componente de quiere utilizar en otros módulos, se debe compartir el modulo que contenga dicho componente en el apartado “imports” de los módulos.

Vista del app.module.ts en su importación

![Vista app module](./img/Vista%20app.module.ts.png)

Una vez creado el componente y registrado, podemos empezar a usar el componente.

## Usando un componente

La estructura de nuestro componente por defecto será el siguiente:

```typescript
// Archivo contador.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

```html
<!-- Archivo contador.component.html -->
<p>contador works!</p>
```

Para ver nuestro componente en acción, usaremos su selector en nuestro componente principal, que en este caso es **app** en su html:

```html
<!-- Archivo app.component.html -->
<app-contador></app-contador>
```

Vista jerárquica del resultado

![Vista jerárquica 1](./img/Vista%20jer%C3%A1rquica%201.png)
### Resultado
![Resultado 1](./img/Resultado%201.png)

## Modificando un componente

Para empezar a trabajar haremos unas cuantas modificaciones, en este caso:
* Sacaremos la implementación OnInit.
* Borraremos el constructor.
* Borraremos la función ngOnInit.
* Borraremos la importación de la interfaz OnInit.

Esto lo hacemos ya que:
* No estamos usando el ciclo de vida de un Componente.
* No estamos inyectando dependencias por el constructor.

Quedando:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent  {

}
```
**Nota:** Si se necesita utilizar inyecciones de dependencia, no borrar el constructor.

**Nota:** Si se necesita trabajar con el ciclo de vida **onInit**, no borrar la implementación y la función.

## Creando el contador
Para crear nuestro contador, utilizaremos un botón que cada vez que alguien presione click aumente una variable que irá contando.

```typescript
// Archivo contador.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent  {
  public contador: number = 0;
  public aumentar(): void {
    this.contador += 1;
  }
}
```

```html
<!-- Archivo contador.component.html -->
<section>
  <button (click)="aumentar()">Pinchame</button>
  <p>Has pinchado el botón de arriba un total de : {{contador}} veces  </p>
</section>
```
### Resultado en nuestra web

![Resultado 1](./img/resultado%201.gif)

Con lo anterior podemos ver que todo funciona de forma correcta, toda nuestra lógica y estructura ahora vive dentro del componente llamado **“contador”**, el cual, se invoca con su etiqueta **“app-contador”**.

### Pregunta

Pero… ¿qué pasará si repito la etiqueta **“app-contador”**? tomate una pausa y saca tu conclusión.

### Respuesta

Efectivamente, cada componente es una **instancia única** de su lógica, estructura y estilos, provocando que cada llamado al componente funcione de forma independiente, maravillo, ¿no?

```html
<!-- Archivo app.component.ts -->
<app-contador></app-contador>
<app-contador></app-contador>
<app-contador></app-contador>
```
Vista jerárquica 

![Vista jerárquica 2](./img/Vista%20jer%C3%A1rquica%202.png)

![Resultado 2](./img/resulado%202.gif)

## Resumen
los componentes son **directivas de Angular** que son piezas que pueden contener su lógica propia encapsulada para un propósito puntual o crear piezas de diseño para luego juntarlas y reutilizarlas en base a las necesidades del proyecto, uno de los propósitos de crear estos elementos es reutilizarlos a lo largo del desarrollo, así evitar caer en repetición de código, permitiendo encapsular cierta lógica o estilos para reutilizarlos. Y aquí te dejo una pequeña imagen para que te puedas armar una mejor idea de todos los posibles usos que pueden tener.

![Diseño Atomico](./img/Diseño%20atomico.png)