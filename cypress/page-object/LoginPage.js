/**
 * @fileOverview Login page interact
 * @author Stefan Bogosavac
 * @version 1.0.0.
 */

/// <reference types='cypress'/>

import {LoginPageLocators} from './LoginPageLocators'
import {InputData} from './InputData'

const input = new InputData()
const data = input.LoginPage()

/**
 * A class for managing Login Page.
 * @class
 */
export class LoginPageInteract{
    constructor(){
        this.LoginPage = new LoginPageLocators()
    }

    /** Methods for Login Page */

    /**
     * Used to click on QaSandbox link.
     */
    clickQaSandbox(){
        this.LoginPage.getQaSandbox().click()
    }

    /**
     * Used to verify Header links of Login Page.
     */
    verifyHeader(){
        this.LoginPage.getQaSandbox()
        this.LoginPage.getNavForgPass()
        this.LoginPage.getNavLogin()
    }

    /**
     * Used to verify Login Page links.
     */
    verifyQaSandbox(){
        this.verifyHeader()
        this.LoginPage.geth1SandBox()
        this.LoginPage.getPtextMainPage()
        this.LoginPage.getBtnForgPass()
        this.LoginPage.getBtnLogin()
        this.LoginPage.getHtecLink()
    }

    /**
     * Used to verify Input filed.
     * 
     * @description
     * Verify that it is possible to enter and edit text in input field.
     * 
     * @param {string} txt  - Text to be entered.
     * @param {locator} loc - Field to be tested.
     */
    verifyInputField(txt, loc){
        loc.type(txt)
        loc.should('have.value', txt)
        loc.clear()
        loc.type(txt+data["InputTxt2"])
        loc.should('have.value', txt+data["InputTxt2"])
        loc.clear()
    }

    /**
     * Used to click on Forgot Password navigate link.
     */
    clickNavForgPass(){
        this.LoginPage.getNavForgPass().click()
    }
    /**
     * Used to click on Forgot Password button.
     */
    clickForgPassBtn(){
        this.LoginPage.getBtnForgPass().click()
    }
    /**
     * Used to click on Back button.
     */
    clickBackBtn(){
        this.LoginPage.getBackBtn().click()
    }

    /**
     * Used to verify Forgot password page.
     * 
     * @param {string} string - Text to verify input field
     */
    verifyForgPass(string){
        this.verifyHeader()
        this.LoginPage.getBackBtn()
        this.LoginPage.getTextForgPass()
        this.LoginPage.getTextSmallReq()
        this.LoginPage.getInputEmail()
        this.LoginPage.getTxtSmallEnter()
        this.LoginPage.getBtnSub()
        this.LoginPage.getHtecLink()
        this.verifyInputField(string, this.LoginPage.getInputEmail())
    }

    /**
     * Used to click on Login navigate link.
     */
    clickNavLogin(){
        this.LoginPage.getNavLogin().click()
    }

    /**
     * Used to click on Login Button.
     */
    clickLogin(){
        this.LoginPage.getBtnLogin().click()
    }

    /**
     * Used to verify Login page.
     * 
     * @param {string} string - Text to verify input field
     */
    verifyLogin(string){
        this.verifyHeader()
        this.LoginPage.geth1Login()
        this.LoginPage.getptextLogin()
        this.LoginPage.getEmailLogin()
        this.LoginPage.getPassLogin()
        this.LoginPage.getBtnSub()
        this.LoginPage.getHtecLink()
        this.verifyInputField(string, this.LoginPage.getEmailLogin())
        this.verifyInputField(string, this.LoginPage.getPassLogin())
    }

    /** Methods for Login functionality */

    /**
     * Used to verify Login functionality with provided 
     * empty email and emtpy password.
     */
    verfiyEmptyEmailPass(){
        this.LoginPage.getInvalidEmail()
        this.LoginPage.getEmptyEmailMsg()
        this.LoginPage.getInvalidPass()
        this.LoginPage.getEmptyPassMsg()
    }
    /**
     * Used to verify Login functionality with provided empty email.
     */
    verifyEmptyEmail(){
        this.LoginPage.getInvalidEmail()
        this.LoginPage.getEmptyEmailMsg()
    }
    /**
     * Used to verify Login functionality with provided 
     * empty password.
     */
    verifyEmptyPass(){
        this.LoginPage.getInvalidPass()
        this.LoginPage.getEmptyPassMsg()
    }
    /**
     * Used to verify Login functionality with provided 
     * invalid email.
     */
    verifyInvalidEmail(){
        this.LoginPage.getInvalidEmail()
        this.LoginPage.getInvalidEmailMsg()
    }
    /**
     * Used to verify Login functionality with provided 
     * invalid password.
     */
    verifyInvalidPass(){
        this.LoginPage.getInvalidPass()
        this.LoginPage.getInvalidPssMsg()
    }

    /**
     * Used to enter provided email.
     * 
     * @param {string} string - User email
     */
    enterLoginEmail(string){
        this.LoginPage.getEmailLogin().clear()
        this.LoginPage.getEmailLogin().type(string)
    }
    /**
     * Used to enter provided password.
     * 
     * @param {string} string - User password
     */
    enterLoginPass(string){
        this.LoginPage.getPassLogin().clear()
        this.LoginPage.getPassLogin().type(string)
    }
    /**
     * Used to click on Submit Button.
     */
    submitLogin(){
        this.LoginPage.getBtnSub().click()
    }

    /**
     * Used to login to page with provided email and password.
     * 
     * @param {string} Email    - User email
     * @param {string} Password - User password
     */
    login(Email, Password){
        cy.visit('https://qa-sandbox.apps.htec.rs/')
        this.clickLogin()
        this.enterLoginEmail(Email)
        this.enterLoginPass(Password)
        this.submitLogin()
    }
}