# QASandbox

<b>REQUIRED:</b>

Node.js: https://nodejs.org/en/


<b>CYPRESS INSTALLATION:</b>
1.  Create cypress folder (<b>DO NOT NAME IT "cypress"</b>)
2.  In cmd go to your cypress folder: <b>cd /your/cypress/path</b>
3.  Make sure that you have package.json file (or node_modules) in your project to ensure cypress is installed in the correct directory.
    To do that, in cmd from your cypress folder run <b>npm init -y</b>
4. In cmd from your cypress folder run <b>npm install cypress --save-dev</b>


<b>PREPARE TEST ENVIRONMENT:</b>
1. To avoid any possible conflicts, create separate project folder to clone project from github
2. clone github project to your project folder: 
in cmd run <b>git clone 'repo link' /your/project/path</b>


<b>CODE DOCUMENTATION:</b>
    
Documentation folder can be found in project root folder.<br>
<b>index.html</b> presents whole project code documentation.


<b>RUN CYPRESS TESTS:</b>

There are several ways to run tests, depending on how you want to run it:

1) <b>BAT FILES:</b>

    BAT files are created to run tests and create reports all in one:<br>
    <b>run cypress Chrome.bat</b> - this will run tests in Chrome browser and create report in Reports folder in project root directory<br>
    <b>run cypress Firefox.bat</b> - this will run tests in Firefox browser and create report in Reports folder in project root directory<br>
    <b>run cypress All.bat</b> - this will run tests in Chrome and Firefox (one after another). Reports will be created in Reports folder in project root directory separately                                       for each browser<br>

2) <b>NPM run from CMD:</b>

    You can run tests the way you want with npm from cmd:<br>
    <b>npm run cypress</b> - run all tests headless with Electron browser<br>
    <b>npm run cypressChrome</b> - run all tests in Chrome<br>
    <b>npm run cypressFirefox</b> - run all tests in Firefox<br>
    run specific test suite with --spec argument, e.g. : <b>npm run cypress --spec 'cypress/integration/QASandbox-UseCases.js'</b><br>
    <b>npm run reportChrome</b> - merge all created json files from cypress/results folder and create mochawesomeChrome.html in mochawesome folder in project root directory<br>
    <b>npm run reportFirefox</b> - merge all created json files from cypress/results folder and create mochawesomeFirefox.html in mochawesome folder in project root                                                directory<br>

3) <b>Cypress Test Runner:</b>

    You can run any test suite separately with any browser and any configuration with Cypress Test Runer.<br>
    In cmd go to your project folder and run <b>npx cypress open</b>.<br>
