/// <reference types='cypress'/>

import {LoginPageInteract} from '../page-object/LoginPage'
import {InputData} from '../page-object/InputData'
import {HomePageInteract} from '../page-object/HomePage'

const LoginPage = new LoginPageInteract()
const HomePage = new HomePageInteract()
const input = new InputData()
const data = input.LoginPage()

describe('LoginPage', ()=>{
    before(()=>{
        cy.visit('https://qa-sandbox.apps.htec.rs/')
    })
    describe('Verify LoginPage Links',()=>{     //VERIFY ONLY LINKS AND INPUT FIELDS
        afterEach(()=>{
            LoginPage.clickQaSandbox()
        })
        it('QA Sandbox', ()=>{
            LoginPage.clickQaSandbox()
            LoginPage.verifyQaSandbox()
        })
        it('Forget Password - navigate', ()=>{
            LoginPage.clickNavForgPass()
            LoginPage.verifyForgPass(data["InputTxt1"])
            LoginPage.clickBackBtn()
            LoginPage.verifyQaSandbox()
        })
        it('Forget Password - button', ()=>{
            LoginPage.clickForgPassBtn()
            LoginPage.verifyForgPass(data["InputTxt1"])
            LoginPage.clickBackBtn()
            LoginPage.verifyQaSandbox()
        })
        it('Login - navigate', ()=>{
            LoginPage.clickNavLogin()
            LoginPage.verifyLogin(data["InputTxt1"])
        })
        it('Login - button', ()=>{
            LoginPage.clickLogin()
            LoginPage.verifyLogin(data["InputTxt1"])
        })
        it('Login navigate to Forgot Password navigate to Login', ()=>{
            LoginPage.clickLogin()
            LoginPage.clickNavForgPass()
            LoginPage.verifyForgPass(data["InputTxt1"])
            LoginPage.clickNavLogin()
            LoginPage.verifyLogin(data["InputTxt1"])
        })
        it('Forgot Password navigate to Login navigate to Forgot Password', ()=>{
            LoginPage.clickForgPassBtn()
            LoginPage.clickNavLogin()
            LoginPage.verifyLogin(data["InputTxt1"])
            LoginPage.clickNavForgPass()
            LoginPage.verifyForgPass(data["InputTxt1"])
        })
    })
    describe('Verify Login',()=>{
        describe('Login - Invalid cases',()=>{
            beforeEach(()=>{
                LoginPage.clickLogin()
            })
            afterEach(()=>{
                LoginPage.clickQaSandbox()
            })
            it('Empty Email and Password', ()=>{
                LoginPage.submitLogin()
                LoginPage.verfiyEmptyEmailPass()
            })
            it('Empty Email',()=>{
                LoginPage.enterLoginPass(data["InvalidPass"])
                LoginPage.submitLogin()
                LoginPage.verifyEmptyEmail()
            })
            it('Empty Password', ()=>{
                LoginPage.enterLoginEmail(data["InvalidEmail"])
                LoginPage.submitLogin()
                LoginPage.verifyEmptyPass()
            })
            it('Wrong Email', ()=>{
                LoginPage.enterLoginEmail(data["InvalidEmail"])
                LoginPage.enterLoginPass(data["InvalidPass"])
                LoginPage.submitLogin()
                LoginPage.verifyInvalidEmail()
            })
            it('Wrong Password', ()=>{
                LoginPage.enterLoginEmail(data["ValidEmail"])
                LoginPage.enterLoginPass(data["InvalidPass"])
                LoginPage.submitLogin()
                LoginPage.verifyInvalidPass()
            })
        })
        describe('Login - Valid case', ()=>{
            beforeEach(()=>{
                LoginPage.clickLogin()
            })
            afterEach(()=>{
                HomePage.logOut()
            })
            it('Login', ()=>{
                LoginPage.enterLoginEmail(data["ValidEmail"])
                LoginPage.enterLoginPass(data["ValidPass"])
                LoginPage.submitLogin()
                HomePage.verifyHomePage()
            })
            it('Login after wrong Email and wrong Password',()=>{
                LoginPage.enterLoginEmail(data["InvalidEmail"])
                LoginPage.enterLoginPass(data["InvalidPass"])
                LoginPage.submitLogin()
                LoginPage.verifyInvalidEmail()
                LoginPage.enterLoginEmail(data["ValidEmail"])
                LoginPage.submitLogin()
                LoginPage.verifyInvalidPass()
                LoginPage.enterLoginPass(data["ValidPass"])
                LoginPage.submitLogin()
                HomePage.verifyHomePage()
            })
        })
    })
})