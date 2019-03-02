# angularjs-skeleton
Live : https://ug-code.github.io/angularjs-skeleton/app

Simplest possible AngularJS skeleton with AngularJS,Bootstrap,Jquery 

# For latest available version
When you install a package using npm install <packagename>, the latest available version of the package is downloaded and put in the app/assets/{css,js} folder then you can delete node_modules folder or npm run delModules for Windows
 
 ```
 ...
 "dependencies": {
    "angular": "^1.7.7",
    "angular-route": "^1.7.7",
    "bootstrap": "^4.3.1",
    "jquery": "^3.3.1"
  },
  "devDependencies": {
    "cpx": "^1.5.0"
  },
  "scripts": {
    "postinstall": "npm run copyAngularjs && npm run copyBootstrap && npm run copyjQueryJS",
    "update-deps": "npm update",
    "delModules": "rmdir node_modules /s /q",
    "postupdate-deps": "npm run copyAngularjs && npm run copyBootstrap && npm run copyjQueryJS",
    "copyAngularjs": "cpx \"node_modules/{angular,angular-*}/*.min.js\" app/assets/js -C",
    "copyBootstrap": "cpx \"node_modules/bootstrap/dist/js/bootstrap.min.js\" app/assets/js -C && cpx \"node_modules/bootstrap/dist/css/bootstrap.min.css\" app/assets/css -C",
    "copyjQueryJS": "cpx \"node_modules/jquery/dist/jquery.min.js\" app/assets/js -C"
  }
  ...
```




