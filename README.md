# ReCapProject-FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## First Installation help
install https://nodejs.org/en/   	(1. olarak node kurulacak)

install https://code.visualstudio.com/  (2. olarak node kurulacak)

open Visual Studio Code

open Terminal / Select Default Shall / Command Promp / Press "+" Button

to check node version write "node --version"

install angular write "npm install -g @angular/cli"   (npm - node package manager (paket yükleme için kullanılır))(-g global demek (birkere kurdum bundan sonra angular projesi oluşturursam bunu kurmayacağım demek))

create project on "C:" directory manuaaly

to create new ptoject wtite "ng new projectname" on terminal

to enforce type checking select "y" press enter

to use routing (Would you like to add Angular routing?) select "y" press enter

select CSS press enter

to locate in created project directory write "cd projectname" press enter

to start created project write on Editor select File/Open Folder /"Find and select created projectname"

on Editor select Terminal/New terminal

wtite "ng serve --open" to start project (ng - Angular demek)(serve - yayına al demek),(--open -tarayıcıda benim için aç demek),(to open project with selected port number "ng serve --open --[portnumber]")
(başka birinin projesini github dan indirip kurmak istedigimizde projeyi açtıktan sonra ilk yapmamız gereken şey "npm install" demek bu bize kullanacağımız tük paketleri projeye kurmamızı sağlar, kurulacak kütüphaneler package.json dosyası içindeki dependencies ve devDependencies kütüphaneleridir)

to stop application run "ctrl + C" enter, to start again "ng serve --open" enter

to create new component, right click on components/ "Open in integrated terminal" /
on opened terminal paga write "ng g component componentname" press enter (g - generate(oluştur) demek)

install bootstrap "npm install bootstrap" press enter

go to angular.json file and add bootstrap css conffiguration file path to stypes on line 30 "./node_modules/bootstrap/dist/css/bootstrap.min.css",
after configuring bootstrap restart application run "ctrl + C" enter, to start again "ng serve --open" enter

to create new service right click on services forded / "Open in integrated terminal" /
on opened terminal page write "ng g service servicename" press enter

to get data from webApi add import to app.module
	import { HttpClientModule } from '@angular/common/http';
	imports: [HttpClientModule]

for bootstrap version update "npm install bootstrap@5.0.0-beta2" press enter

to install jquery "npm install jquery" press enter and add "./node_modules/jquery/dist/jquery.min.js", "./node_modules/bootstrap/dist/js/bootstrap.min.js" line to "scripts": [] array, restart project
