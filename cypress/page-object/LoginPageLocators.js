/// <reference types='cypress'/>

/**
 * @class
 * Login Page Locators
 */
export class LoginPageLocators{
    getQaSandbox(){
        return cy.xpath('//b[text()="QA Sandbox"]');
    }
    getNavForgPass(){
        return cy.xpath('//a[text()="Forgot Password"]')
    }
    getNavLogin(){
        return cy.xpath('//a[@class="nav-link" and text()="Login"]')
    }
    geth1SandBox(){
        return cy.xpath('//h1[text()="QA Sandbox"]')
    }
    getPtextMainPage(){
        return cy.xpath('//p[text()="Quality Assurance testing playgrounds. Play, explore, test..."]')
    }
    getBtnForgPass(){
        return cy.xpath('//a[text()="Forgot password"]')
    }
    getBtnLogin(){
        return cy.xpath('//div[contains(@class, "col-")]//a[text()="Login"]')
    }
    getHtecLink(){
        return cy.xpath('//a[@href="http://htecgroup.com"]')
    }
    getBackBtn(){
        return cy.get('a .fa')
    }
    getTextForgPass(){
        return cy.xpath('//b[text()="Forgot Password"]')
    }
    getTextSmallReq(){
        return cy.xpath('//small[text()="* = required field"]')
    }
    getInputEmail(){
        return cy.xpath('//input[@placeholder="* Email Address"]')
    }
    getTxtSmallEnter(){
        return cy.xpath('//small[text()="Enter your email address and we will send you instructions to reset your password."]')
    }
    getBtnSub(){
        return cy.get('form .btn:not(:disabled):not(.disabled)')
    }
    geth1Login(){
        return cy.xpath('//h1[text()="Log In"]')
    }
    getptextLogin(){
        return cy.xpath('//p[text()="Sign in to your QA Sandbox account"]')
    }
    getEmailLogin(){
        return cy.xpath('//input[@type="email"]')
    }
    getPassLogin(){
        return cy.xpath('//input[@type="password"]')
    }
    getInvalidEmail(){
        return cy.xpath('//input[@type="email" and contains(@class, "invalid")]')
    }
    getEmptyEmailMsg(){
        return cy.xpath('//div[text()="Email field is required"]')
    }
    getInvalidPass(){
        return cy.xpath('//input[@type="password" and contains(@class, "invalid")]')
    }
    getEmptyPassMsg(){
        return cy.xpath('//div[text()="Password is required"]')
    }
    getInvalidEmailMsg(){
        return cy.xpath('//div[text()="User not found"]')
    }
    getInvalidPssMsg(){
        return cy.xpath('//div[text()="Password incorrect"]')
    }
}