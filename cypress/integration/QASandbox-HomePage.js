/// <reference types='cypress'/>

import {HomePageInteract} from '../page-object/HomePage'
import {InputData} from '../page-object/InputData'
import {LoginPageInteract} from '../page-object/LoginPage'
import {UseCasesCardInteract} from '../page-object/UseCasesCard'

const HomePage = new HomePageInteract()
const LoginPage = new LoginPageInteract()
const UseCasesCard = new UseCasesCardInteract()

const data = new InputData()
const login = data.LoginPage()
const Dashboard = data.Dashboard()

describe('Home Page', ()=>{
    before(()=>{
        LoginPage.login(login["ValidEmail"], login["ValidPass"])
    })
    it('Verify Home Page', ()=>{
        HomePage.verifyHomePage()
    })
    describe('Verify Dashboard - Use Cases & Playground cards', ()=>{       //VERIFY NUMBER DISPLAYED ON USES CASES CARD AND PLAYGROUND CARD DASHBOARDS
        const AutomatedUseCase = Dashboard.AutomatedUseCase
        const NotAutomatedUseCase = Dashboard.NotAutomatedUseCase
        beforeEach(()=>{
            LoginPage.login(login["ValidEmail"], login["ValidPass"])
            UseCasesCard.deleteAllUseCases()
        })
        it('No Use Cases', ()=>{
            HomePage.verifyNumberOfUseCases()
        })
        it('1 Use Cases - none automated', ()=>{
            UseCasesCard.createUseCase(NotAutomatedUseCase)
            HomePage.verifyNumberOfUseCases()
        })
        it('3 Use Cases - 1 automated', ()=>{
            UseCasesCard.createUseCase(NotAutomatedUseCase)
            UseCasesCard.createUseCase(NotAutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            HomePage.verifyNumberOfUseCases()
        })
        it('4 Use Cases - 3 automated', ()=>{
            UseCasesCard.createUseCase(NotAutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            HomePage.verifyNumberOfUseCases()
        })
        it('5 Use Cases - 4 automated', ()=>{
            UseCasesCard.createUseCase(NotAutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            HomePage.verifyNumberOfUseCases()
        })
        it('5 Use Cases - 5 automated', ()=>{
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            UseCasesCard.createUseCase(AutomatedUseCase)
            HomePage.verifyNumberOfUseCases()
        })
    })
})