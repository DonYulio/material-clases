# Instalación de Git
Para poder usar **Git** de forma en su computador de desarrollo, se debe instalar la herramienta Git del siguiente enlace https://git-scm.com/, y bajar la versión correspondiente para su sistema operativo.
<br>
Una vez instalado puede ejecutar el comando:

```bash
git –version
```
 
en un terminal o cmd para comprobar su instalación y versión.

# Uso de Git de forma local

Para poder trabajar con versiones en sus proyectos, primero debe inicializar un repositorio, esto se puede hacer con el comando: 

```bash
git init 
```

dentro de la carpeta en donde se trabajará.
<br>
Una vez que se inicie el repositorio, ya estamos listos para empezar a versionar los diversos cambios que usted haga. Estos se separan en tres fases:
<br>
## Fase 1: Directorio de trabajo o Working directory

En este espacio es donde tu estarás trabajando, haciendo modificaciones, borrando, creando carpetas, copiando, pegando, etc. Cualquier modificación que necesitas hacer sobre un archivo, es el espacio en donde trabajas. 

## Fase 2: Staging Area, Área de preparación, Área de trabajo temporal

En esta fase es cuando ustedes añaden todos los cambios realizados en el paso anterior con el comando:

```bash
git add .
git add -A
git add <archivo>
``` 

Es un espacio en memoria en donde se preparan los archivos que se usarán para crear un versionamiento, lo natural es que se ejecute el comando git add, una vez que termines de trabajar, para iniciar el proceso de crear un nuevo commit.

## Fase 3: Git repository, Repositorio Git

En esta fase es la final para el **commit**, en donde tomarás todos los archivos añadidos en la fase 2 (archivos que estén dentro del staging Area) y serán versionados creando un punto de control en la rama de trabajo actual, que por defecto puede ser **master** o **main**. El Comando para hacer un commit: 

```bash
git commit -m “mensaje”
```

Estas tres fases deberán pasar para hacer un **commit**, en donde se **repetirá** hasta que el proyecto termine o ustedes ya no quieran crear más modificaciones en su proyecto.

## Resumen de este punto

![Ciclo local](https://raw.githubusercontent.com/DonYulio/material-clases/master/Clase%201%3A%20Git%20y%20GitHub/img/Local.png)

El ciclo mostrado anteriormente se deberá seguir para crear versiones de nuestro proyecto.

---

# Uso de Git remoto

Para poder usar Git de forma remota y colaborativa con un equipo de trabajo, es ideal que se pueda tener un servidor de Git o directamente una cuenta en alguna plataforma de trabajo, como puede ser GitHub, GitLab, Bitbucket, etc.
<br>
Una vez registrado crear un repositorio en la correspondiente plataforma y obtener el enlace de tu repositorio. (normalmente el enlace termina en. git)
<br>
Una vez creado el repositorio remoto y tener el enlace correspondiente, hay que añadirlo a tu trabajo con los comandos remotos que nos entrega Git. Para ello tenemos dos opciones:
## Opción 1: Primera vez que subiré mi proyecto a una plataforma.
<br>
Si es la primera vez que subirás tu trabajo al repositorio remoto, deberás configurar las fuentes remotas en tu proyecto para poder hacer los **push** (empujes o subidas de tu historial) o **pull** (traer el historial de internet).
Configurando las fuentes remotas, para ello deberás correr el siguiente comando

```bash
git remote add <alias> <enlace>
```

* reemplazar el <**alias**> por el sobrenombre, o nombre que tendrá tu enlace.
* reemplazar el <**enlace**> con la URL que te entregará la plataforma que estes usando.

Una vez realizado procedemos a subir nuestro historial a la plataforma (no deberás tener ningún **commit** pendiente, procura de hacer un **commit** antes de seguir) con el comando:

```bash
git push <alias> <rama>
```

* reemplazar <**alias**> con el sobrenombre que tiene tu enlace, los puedes ver con el comando ```git remote -v  ```.
* reemplazar <**rama**> con el Branch que actualmente estas trabajando, por defecto puede ser **master** o **main**

Una vez ejecutado podrás ir a la plataforma correspondiente, actualizar la página y ver que todo está arriba.

## Opción 2: Soy colaborador de un proyecto y quiero traerlo a mi computador.

Hay muchas formas de poder colaborar en un proyecto, en este caso nos enfocaremos en que eres un invitado a colaborar a un proyecto, por lo tanto, eres parte de él y tienes el enlace de este. 
<br>

Con esto requerimientos cumplidos, procederemos a clonar el proyecto con el siguiente comando<br>

```bash
git clone <enlace>
```

* reemplazar <**enlace**> con la URL del repositorio

al momento hacer un clone, están bajando el historial completo del repositorio, como también, las fuentes remotas configuradas el cual se llamará **origin** por defecto (pueden comprobarlo con el comando ```git remote -v```), por lo tanto, con esto ya configurador puedes hacer un **push** (empujes o subidas de tu historial) o **pull** (traer el historial de internet).

---

## Continuando con el trabajo colaborativo.

Ya implementado las fuentes remotas o clonado el proyecto, podemos acceder al ciclo de trabajo remoto, el cual continua con los siguientes pasos:

### Paso 1: Hacer un pull.

Este comando nos ayudará a traer todos los cambios que estén en la nube a nuestro repositorio local para implementar el trabajo del equipo, el comando:

```bash
git pull <alias> <rama>
```

* reemplazar <**alias**> con el sobrenombre que tiene tu enlace, los puedes ver con el comando ```git remote -v```.
* reemplazar <**rama**> con el Branch que actualmente estas trabajando, por defecto puede ser **master** o **main**

### Paso 2: implementar los pasos de Git local

Implementar los cambios de trabajo local, el cual el ciclo es el siguiente:

1. Hacer cambios
2. Añadir al statging Area
3. hacer un commit

### Paso 3: Una vez realizado el commit procedemos a subirlo a nuestra plataforma con el comando:

```bash
git push <alias> <rama>
```

* reemplazar <**alias**> con el sobrenombre que tiene tu enlace, los puedes ver con el comando ```git remote -v  ```.
* reemplazar <**rama**> con el Branch que actualmente estas trabajando, por defecto puede ser **master** o **main**

### Observaciones
durante este proceso de **push** puede ocurrir un **error** el cual consiste, que arriba hay una versión más reciente de la que actualmente estas trabajando, en caso de que ocurra dicho error, se recomiendo hacer un ```git pull``` (paso 1), y reiterar el push.
<br>
Con esto realizado, acabas de subir tus cambios a la plataforma, por lo tanto, tu equipo de trabajo deberá repetir el ciclo desde el paso 1.

## Resumen

![Ciclo remoto](https://raw.githubusercontent.com/DonYulio/material-clases/master/Clase%201%3A%20Git%20y%20GitHub/img/remoto.png)

De esta manera entramos en un ciclo de trabajo colaborativo que se repetirá hasta que el proyecto se termine o ya no se necesiten hacer más cambios.

# Tabla de comandos útiles

Aquí algunos comandos que pueden ser de ayuda al momento de usar está herramienta. Puedes leer más comandos en la documentación oficial de Git https://git-scm.com/doc


| Comando                           | Utilidad                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------ |
| git init                          | Inicializar un repositorio en una carpeta                                      |
| git status                        | Nos entrega información sobre el trabajo actual                                |
| git add -A / git add .            | Agrega todos archivos al staging area                                          |
| git commit -m “mensaje”           | Agrega todo lo que está en el staging area para hacer un versionamiento        |
| git branch <nombre>               | Agrega una nueva rama llamada <nombre>                                         |
| git branch / git branch –list     | Lista todas las ramas del repositorio                                          |
| git branch -d <nombre>            | Borra la rama llamada <nombre>                                                 |
| git checkout <nombre>             | Te mueves de la rama actual a la rama <nombre>                                 |
| git push <alias> <rama>           | Empuja todos los cambios de la <rama> a la Fuente remota <alias>               |
| git pull <alias> <rama>           | Trae todos los cambios remote que están en <alias> de la rama <rama>           |
| git merge <rama>                  | Trae los cambios de la <rama> a la rama actualmente posicionado                |
| git config --global user.email “correo” | Necesario para hacer un commit, configurando tu correo electrónico             |
| git config --global user.name “nombre”  | Necesario para hacer un commit, configurando tu nombre ( o nombre de usuario ) |
| git remote -v                     | Lista las fuentes remotas                                                      |
| git remote add <alias> <enlace>   | Añade una nueva Fuente remota llamada <alias> a la URL <enlace>                |
| git reset –hard <HEAD>            | Para Volver a un commit con el <HEAD>                                          |
| Git rev-parse –short HEAD         | Para ver los HEAD de los commits                                               |
