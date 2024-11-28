# Levantamiento del FrontEnd

Este documento describe el proceso de configuración del entorno de desarrollo para un proyecto FrontEnd basado en Angular.

### 1. Instalación de Node.js

1. Validamos que no tengas instalado node con el comando node –v, en caso tal que ya lo tengas instalado. Te vas a dirigir al panel de control, le vas a dar click en desinstalar un programa y desinstalamos la versión de node que tengas. O puedes buscar la alternativa de usar nvm para cambiar la versión de node. Lo importante es tener la versión 20.12.2. Puedes dirigirte a la siguiente página para descargar la versión [Node version - 20.12.2](https://nodejs.org/en/blog/release/v20.12.2 ). Buscas la lista la versión compatible con el sistema operativo de tu computadora. En mi caso es Windows.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813566/imagenesFront/caqsrt3nawht8yhklcql.png)

2. Una vez descargado, te diriges a tu carpeta de descargas y le das doble click al archivo.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813566/imagenesFront/scika4yxc0q2qmtrjwoc.png)

3. Sigues los pasos de siguiente hasta instalarlo. Una vez instalado abres un cmd en tu computadora y corres el comando node –v y ya te saldrá la versión 20.12.2 y tambien se instalará la version de npm 10.5.0 esa la puedes validar con el comando

```bash
npm –v
```

### 2. Instalación de Angular 15.2.11

1. Una vez instalado node procedemos a instalar la versión de angular, en este caso el proyecto se construyó con angular 15 entonces vamos a instalar la versión 15.2.11. Inicialmente corremos el siguiente comando para validar que versión de angular que tenemos

```bash
ng v
```
Si nos arroja alguna versión, tenemos que desinstalar esta versión con el siguiente comando
```bash
npm uninstall -g @angular/cli 
```

y procedemos a instalar angular 15.2.11 con el siguiente comando 

```bash
npm install -g @angular/cli@15.2.11
```

Si en caso tal no nos arrojo ninguna version procemos a instalar la version de angular 15.2.11 con el siguiente comando

```bash
npm install -g @angular/cli@15.2.11. 
```

Una vez instalada la versión de angular, validamos con el comando

```bash
ng v
```

nos tiene que salir algo asi. Posiblemente te salga una pregunta que dice “Would you like to share psudonymous usage data aboit this project with tha Angular Team at Google under Google’s Privacy Policy at https://policies.google.com/privacy. For more details and how to change this setting, see https://angular.io/analytics” A esta pregunta tienes que responder que No ósea la N. Seguido de eso te saldrá la versión de angular instalada. 

![Image](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813566/imagenesFront/cpioh353dvyqsuzk5dhy.png)


### 3. Instalación de Visual Studio Code

1. Una vez instalada la versión de angular procedes a instalar visual studio code en el siguiente link [Pagina para descargar VS Code](https://code.visualstudio.com/download) y seleccionas la versión que sea compatible con tu sistema operativo. 

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813567/imagenesFront/cztb90zsvbs5gnwoyhv7.png)

2. En mi caso instale el de Windows. Una vez descargado procedes a instalarlo.
![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813566/imagenesFront/it3zfoxvbt6ninv9audq.png)

### 4. Abrir Visual Studio Code

1. Una vez instalado buscas en tu navegador Visual Studio Code.
   
![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813566/imagenesFront/wsqyggpe76hv7mwbkanq.png)

2. Abres la aplicación y te debe salir la siguiente interfaz.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813566/imagenesFront/qusloqpvvq09g50ucygv.png)

### 5. Abrir el proyecto.

1. Una vez dentro de la aplicación y la das click en Open Folder.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813566/imagenesFront/er2pd828ehjc55jrjluq.png)

2. Vamos a la ruta donde clonaste los repositorios y abreas la carpeta FrontPruebaBlue y le damos Seleccionar carpeta.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813567/imagenesFront/aswjq83rshdv06urfdgx.png)

3. Y te va a salir la estructura de carpetas y demas archivos.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813567/imagenesFront/r25qi5d9xrz27imvu54y.png)

### 6. Compilacion del proyecto.

1. Luego abres una terminal y seleccionas new terminal.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813567/imagenesFront/gwcfonbjjon6shsqiscy.png)

2. Se abre una ventana terminal en parte inferior del IDE.

![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813567/imagenesFront/eumdc1hl522vaiojxfl8.png)

3. Y procedemos a instalar los modulos de node con el siguiente comando

```bash
npm i o npm install.
```
![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813567/imagenesFront/wfullbrgvqdc1cjuurod.png)

4. Dejas instalar los modulos, una vez terminado de instalar, ejecutas el siguiente comando.

```bash
ng serve –o
```
![Imagen](https://res.cloudinary.com/dsb2nqwja/image/upload/v1732813567/imagenesFront/snz95ce7motrdsbbgr8b.png)

5. Y se te ejecutara el proyecto en el puerto 4200, en caso tal que no te abra el proyecto con

```bash
ng serve –o
```
ejecutas el ng serve sin el –o y te diriges al link http://localhost:4200/ y ya te diriges a la página y te saldrá una tarjeta con un personaje aleatorio.

Y con esto desplegamos el front.

