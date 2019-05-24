# Protocommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Production Deployment Tips by [Galaxy Codes](www.galaxycodes.com):

for deploying on specific route you need to add the route name `<myRoute>` in `navbar.component.html` links at starting path
e.g `<myRoute>/shop`

to build the project use the following commands:
`npm install`
`npm run ng -- build --base-href /<myRoute>/ --deploy-url /<myRoute>/`

This will create all the compiled files in `/dist` folder

replace the line `RewriteRule ^ /<myRoute>/index.html` in `.htaccess` file and copy it in `/dist` folder if needed.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# Protocommerce
