# Property Binding

Antes de comenzar con este hito, hay que recodar la composición de un **elemento HTML**, el cual, es la siguiente:

![Composición de un elemento HTML](./img/Elemento%20HTML.png)

Con esto claro, podemos continuar con **Property Binding**, el cual, consiste en tomar un atributo de nuestro **elemento HTML** y envolverlo en corchetes **[ ]**, para crear un enlace de una dirección.

Que quiere decir esto, si tu atributo de tu clase (TypeScripts) cambia, también lo hará en los atributos de los elementos en donde se encuentren enlazados con **[ ]**.

 También hay que mencionar, que esta característica también nos permite enviar variables a nuestros componentes personalizados, como también, llamar a directivas de Angular. 
 **Este punto se aplicará más adelante**

 Pongamos esto en práctica, haremos un **Property Binding** para poder mostrar una imagen por pantalla, pero dicho enlace de la imagen vendrá desde una **variable / propiedad / atributo** de nuestro TypeScript.

```Typescript
// Archivo app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imagen: string = 'https://picsum.photos/200/300';
}

```

```html
<!-- Archivo app.component.html -->
<h1>Property Binding</h1>
<img [src]="imagen" >
```
## Resultado final

![Binding Imagen](./img/Binding%20Imagen.png)

## Ejercicio 1

Sigamos jugando, hagamos una barra de progreso suba en base a un input de tipo rango “range”:

### Archivo app.component.ts

- Primero, en nuestro **TypeScripts** crearemos una nueva propiedad que se llame **“valorActual”** para que nos pueda guardar los valores y se usará para mostrarlo por nuestro template.
- Segundo, crearemos una función que reciba un parámetro de tipo Event, el cual, es será la información sobre el elemento que esta ejecutando la acción, para más información pueden leer:
  - https://www.w3schools.com/jsref/dom_obj_event.asp aquí podrán encontrar una gran cantidad de eventos que pueden ser llamados desde el DOM, como también, las propiedades del elemento de tipo Event.
- Tercero: Tomaremos el responsable de la ejecución del evento, y lo transformaremos a un objeto de **HTMLInputElement** para acceder a las propiedades de un elemento tipo **input**.
- Cuarto: Obtenemos el valor y lo convertimos a número, y en caso de dar NaN que sea 0. para más información [Operadores de JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators)

```Typescript
// Archivo app.component.ts
...
public valorActual: number = 0;
public cambiarValorActual(evento: Event): void {
const elemento = evento.target as HTMLInputElement;
this.valorActual = Number.parseInt(elemento.value) || 0;
}
...
```

### Archivo app.component.html

- Primero, crearemos nuestro elemento **“input”** de tipo **“range”** en donde aplicaremos un **Property Binding** a al atributo **“value”** de esta manera si nuestra variable cambia internamente, será reflejado en el elemento.
- Segundo, Haremos un **Event Binding** al evento **oninput** para escuchar en el momento que nuestro elemento cambie de valor.
- Tercero: Imprimiremos con **String Interpolation** nuestra variable para ver el valor internamente con un % al lado.
- Cuarto: Creamos un elemento **“progress”**, el cual, es una barra de progreso que recibirá los cambios en su atributo **"value"** provenientes de la variable, provocando que la barra suba o baje en base al **“input”**.
```html
<!-- Archivo app.component.html -->
<input
  type="range"
  min="0"
  max="100"
  [value]="valorActual"
  (input)="cambiarValorActual($event)"
>
{{ valorActual }}%
<progress max="100" [value]="valorActual"></progress>

```
### Resultado final

![Resultado Barra de progreso](./img/Resultado%20progress.gif)

**Hermoso que es la reactividad….**

## Ejercicio 2

Hagamos otro ejercicio, en donde una imagen cambie su ancho y alto en base a lo que ingresa el usuario por unos **“inputs”**

### Archivo app.component.ts

- Primero: Creamos una variable que nos permita guardar el número del **ancho** de la imagen.
- Segundo: Creamos una **función** que recibe un **parámetro** de tipo **“Event”** que nos permite saber que **elemento** está ejecutando el evento.
- Tercero: Hacemos la conversión a número y lo guardamos en nuestra **propiedad** de la clase llamada **ancho**, en caso de ingresar un valor que no corresponde dejamos en cero. para más información [Operadores de JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators)

```Typescript
// Archivo app.component.ts
...
public ancho: number = 0;
...
public cambiarAncho(evento: Event): void {
const elemento = evento.target as HTMLInputElement;
this.ancho = Number.parseInt(elemento.value) || 0;
}
...
```

### Archivo app.component.html

- Primero: Creamos un **“input”** de tipo **“number”** que haga un **Property Binding** al atributo **“value”** con la variable **“ancho”**
- Segundo: Hacemos un **Event Binding** del evento **"oninput"** y lo capturamos con la función **“cambiarAncho”**, enviando por parámetro **$event** <- importante.
-  Tercero: Creamos un elemento imagen **"img"** con un **Property Binding** de **"src"** a **“imagen”**, y hacemos un **Property Binding** de **“width”** con la variable **“ancho”**

```html
<!-- Archivo app.component.html -->
...
<hr>
<input type="number" [value]="ancho" (input)="cambiarAncho($event)">
<br>
<img [src]="imagen" [width]="ancho">
```
### Resultado

![Binding Ancho](./img/Binding%20Ancho.gif)

--- 

## **Reto: Tomate una pausa e intenta hacer lo mismo para el alto**

--- 

### Resultado para el alto

```Typescript
// Archivo app.component.ts
...
public alto: number = 0;
...
public cambiarAlto(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.alto = Number.parseInt(elemento.value) || 0;
}
...
```
```html
<!-- Archivo app.component.html -->
...
<input type="number" [value]="alto" (input)="cambiarAlto($event)">
...
<img [src]="imagen" [width]="ancho" [height]="alto">
...
```
### Resultado alto

![Binding Alto](./img/Binding%20Alto.gif)

## Resultado final de alto y ancho

![Final alto y ancho](./img/Final%20alto%20y%20ancho.gif)

---

**Nota:** Para obtener un mejor resultado de la experiencia de usuario, se recomienda leer sobre los atributos de los elementos y en que les afecta, de esta manera se puede saber el comportamiento de cada uno de los elementos en base a los atributos que estos mismos tienen a su disposición.

---

# NgClass - NgStyle

La necesidad de tener una pagina web estilizada es clave al momento de darle un buen diseño de interfaz al usuario, pero siempre, queremos más, como web dinámicas y que reaccionen a las interacciones de usuario, ya sea, escondiendo o mostrando elementos, o directamente cambiando su estilos, y es por eso que en esta sección aprenderemos a aplicar clases con **Angular** y también aprenderemos una **directiva** que nos ayudará a hacer este proceso mas sencillo, claro también, manteniendo la reactividad que hasta el momento estamos conociendo.

Para esto, primero usaremos lo aprendido en la sección anterior, el cual, es cambiar una barra de progresos **“progress”** en base a un **“input”**, pero ahora le daremos estilos en base a una condición.

---

**Nota:** Recordar que una condición en programación retorna un verdadero o negativo, llámese true o false.

---

## Property Binding de class

Construyamos una barra reactiva en base a un **"input"** de tipo **“range”**

```Typescript
// Archivo app.component.ts
...
public valorBarra: number = 0;
...
public cambiarValorBarra(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.valorBarra = Number.parseInt(elemento.value) || 0;
}
...
```

```html
<!-- Archivo app.component.html -->
...
<h1>NgClass y NgStyle</h1>
<input type="range" min="0" max="100" [value]="valorBarra" (input)="cambiarValorBarra($event)">
<br>
<progress max="100" [value]="valorBarra"></progress>
...
```
### Resultado

![Barra de progreso](./img/Progress%20y%20Input.gif)

Vamos ahora a nuestro archivo de estilos llamado **app.component.scss** y creemos **3 clases** para lo siguiente:

- Si la barra es menor o igual 20 la barra será roja
- Si la barra es mayor a 20 y menor o igual a 70 la barra será naranja.
- Si la barra es mayor a 70 la barra será azul

Para cambiar el color a la barra se debe aplicar la regla de estilos llamada **“accent-color”**

```scss
// Archivo app.component.scss
.rojo {
  accent-color: red;
}
.naranja{
  accent-color: orange;
}
.azul {
  accent-color: blue;
}
```

Apliquemos las clases usando la técnica Property Binding de la siguiente manera:

![Atributo class para Binding](./img/Atributo%20Class%20para%20Binding.png)

```html
...
<progress
    max="100"
    [value]="valorBarra"
    [class.rojo]="valorBarra <= 20"
></progress>
```
De está manera cuando la variable este menor o igual a 20, la barra será roja, de la siguiente manera.

![Barra con una clase](./img/Progress%20con%20una%20clase.gif)

Apliquemos las demás clases y sus condiciones

- Si la barra es menor o igual 20 la barra será roja
- Si la barra es mayor a 20 y menor o igual a 70 la barra será naranja.
- Si la barra es mayor a 70 la barra será azul

```html
...
<progress
    max="100"
    [value]="valorBarra"
    [class.rojo]="valorBarra <= 20"
    [class.naranja]="valorBarra > 20 && valorBarra <= 70"
    [class.azul]="valorBarra > 70"
></progress>
```

### Resultado del ejercicio

![Barra con tres clases](./img/Progress%20con%20tres%20clases.gif)

## Las directivas

Antes de continuar con **NgClass** y **NgStyle**, hay que saber lo siguiente; las directivas en **Angular** nos sirven para añadirle nuevas funcionalidades a nuestros **elementos** y se pueden catalogar en tres grandes grupos

![Grupo de directivas](./img/Grupo%20de%20directivas.png)

En donde: 

- Las directivas estructurales son responsables de cambiar el DOM o elementos directos en donde se apliquen, las tres mas utilizadas son las siguientes:
  - **NgIf:** Se utiliza para evaluar una condición y en base a ella mostrar o ocultar el elemento en donde se aplique u otro en base a un Template Reference
  - **NgFor:** Permite iterar un array de elementos (Objetos o primitivos) para insertarlo como contenido del elemento que está invocando está directiva.
  - **NgSwitch:** Permite realizar una evaluación sucesiva de condiciones llamado “casos” el cual se debe implementar con la directiva NgSwitchCase
- Las directivas de atributos se aplican como atributos a los diferentes elementos HTML, permitiendo modificar el comportamiento del DOM, pero no tienen la capacidad de destruir o crear elementos, como lo hacen las directivas estructurales, dentro de las directivas de atributo tenemos:
  - **NgStyle**: Nos permite aplicar estilos lineales a nuestros elementos HTML seleccionados, dichos estilos pueden ir acompañados por condiciones.
  - **NgClass**: Nos permite aplicar clases en a nuestros elementos seleccionados, ya sea aplicación directa o en base a condición.
  - **NgModel**: Nos permite crear un enlace directo entre un atributo y elemento Input, o componentes personalizados que envíen información hacia un padre logrando una característica llamada Two way binding, necesita el modulo **FormModule** para funcionar
- Directivas de componentes son las responsables de poder crear componentes y módulos dentro de angular usando el decorador @Component… o @NgModule.. en una clase en particular.
  - **Componentes**, son clases que están decoradas con   **@Component** y tienen enlazado HTML.
  - **Módulos**, son clases que están decoradas con** @NgModel** y tienen la responsabilidad de gestionar y compartir, **Directivas**, **Servicios**, **Módulos**, **Routas**, etc. Dependiendo del comportamiento elegido

Ahora sí, entendiendo un poco mejor que son las **directivas** en **Angular** y del tipo que tenemos, podemos continuar con la aplicación de nuestro **NgClass** y **NgStyle**, el cual nos permitirá cambiar el comportamiento de nuestro elemento en base a **Clases** y **Estilos** correspondientemente.

## NgClass

Modifiquemos nuestro elemento progress de** Property Binding** a **Directiva NgClass**, de la siguiente manera

```html
<!-- Archivo app.component.html -->
...
<progress
    max="100"
    [value]="valorBarra"
    [ngClass]="{
      rojo: valorBarra <= 20,
      naranja: valorBarra > 20 && valorBarra <= 70,
      azul: valorBarra > 70
    }"
></progress>
...
```


Llamando a la **directiva NgClass** y encerrándola en **[ ]**, dentro de ella creamos un objeto de JS y procedemos a llamar a las clases y su condición de invocación, una vez realizado esto, deberemos tener el mismo resultado que antes, pero ahora usando directivas.

![NgClass y Property Binding](./img/NgClass%20y%20Class.gif)

Funciona exactamente igual, esto es lo que hacen las directivas de atributo, cambian el comportamiento del elemento, en este caso aplicando clases dinámicamente en base a una condición.

## NgStyle

Para aplicar estilos lineales reactivos, usaremos **NgStyle**, y su implementación es similar a **ngClass**, la diferencia es que, en vez de llamar a **Clases**, llamaremos a **reglas de estilos de CSS**, hagamos que un Párrafo agrande su fuente en base a un **"input"** de tipo **“range”**

```Typescript
// Archivo app.component.ts
...
public tamanioFuente: number = 10;
...
public cambiarFuente(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.tamanioFuente = Number.parseInt(elemento.value) || 0;
}
...
```
```html
<!-- Archivo app.component.html -->
...
<input type="range" min="0" max="100" [value]="tamanioFuente" (input)="cambiarFuente($event)">
<br>
<p
    [ngStyle]="{
      'font-size.px': tamanioFuente
    }"
>
  Hola soy un Párrafo :D
</p>
...
```
---

**Nota:** Para la regla font-size, debe recibir el tamaño en una medida, usaremos al final de la regla la medida que queramos, en este caso px de píxel.

---

### Resultado

![Cambiando Font-Size ngStyle](./img/Font-Size%20NgStyle.gif)

Ahora cambiemos la fuente de color, que sea elegida por el usuario en base a un **"input"** de tipo **“color”**

```Typescript
// Archivo app.component.ts
...
public color: string = '';
...
public cambiarColor(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.color = elemento.value;
}
...
```

```html
<!-- Archivo app.component.html -->
...
<input type="range" min="0" max="100" [value]="tamanioFuente" (input)="cambiarFuente($event)">
<input type="color" [value]="color" (input)="cambiarColor($event)">
<br>
<p
    [ngStyle]="{
      'font-size.px': tamanioFuente,
      'color': color
    }"
>
  Hola soy un Párrafo :D
</p>
...
```
### Resultado

![cambiando el color y la fuente ngStyle](./img/font-size%20y%20color%20NgStyle.gif)

De esta manera podemos entregar una mejor experiencia de usuario reactiva, gracias a las características de **Angular** y las **Directivas**.