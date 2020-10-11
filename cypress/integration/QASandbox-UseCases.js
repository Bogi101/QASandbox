/// <reference types='cypress'/>

import {HomePageInteract} from '../page-object/HomePage'
import {InputData} from '../page-object/InputData'
import {LoginPageInteract} from '../page-object/LoginPage'
import {UseCasesCardInteract} from '../page-object/UseCasesCard'

const HomePage = new HomePageInteract()
const LoginPage = new LoginPageInteract()
const UseCasesCard = new UseCasesCardInteract()

const data = new InputData()
const UseCases = data.UseCases()
const login = data.LoginPage()

describe('Use Cases card', ()=>{
    describe('Invalid use cases - Create Use Case', ()=>{
        beforeEach(()=>{
            LoginPage.login(login["ValidEmail"], login["ValidPass"])
            HomePage.clickUseCasesCard()
        })
        it('Empty Use Case',()=>{
            UseCasesCard.createEmptyUseCase()
            UseCasesCard.verifyEmptyUseCase()
        })
        it('Whitespace values Use Case', ()=>{            //      THIS TEST WILL FAIL BECAUSE OF "It is possible to create Use Case without Use Case Step" REPORTED ISSUE
            const whitespace = UseCases.WhitespaceUseCase
            UseCasesCard.createUseCase(whitespace)
            UseCasesCard.verifyEmptyUseCase()
        })
        it('Use Case with empty Steps', ()=>{             //      THIS TEST WILL FAIL BECAUSE OF "It is possible to create Use Case without Use Case Step" REPORTED ISSUE
            const EmptySteps = UseCases.UseCaseWithEmptySteps
            UseCasesCard.createUseCase(EmptySteps)
            UseCasesCard.verifyEmptySteps()
        })
        it('Invalid Title (too short and too long)',()=>{
            const TooShortTitle = UseCases.TooShortTitle
            const TooLongTitle = UseCases.TooLongTitle
            UseCasesCard.createUseCase(TooShortTitle)
            UseCasesCard.verifyInvalidNumberOfCharTitle()
            UseCasesCard.enterTitle(TooLongTitle["title"])
            UseCasesCard.submit()
            UseCasesCard.verifyInvalidNumberOfCharTitle()
        })
        it('Invalid Expected Result (too short and too long)', ()=>{
            const TooShortExpectedResult = UseCases.TooShortExpRes
            const TooLongExpectedResult = UseCases.TooLongExpRes
            UseCasesCard.createUseCase(TooShortExpectedResult)
            UseCasesCard.verifyInvalidNumberOfCharExpRes()
            UseCasesCard.enterExpectedResult(TooLongExpectedResult["ExpResult"])
            UseCasesCard.submit()
            UseCasesCard.verifyInvalidNumberOfCharExpRes()
        })
        it('Too long Use Case Step', ()=>{
            const TooLongUseCaseStep = UseCases.TooLongUseCaseStep
            UseCasesCard.createUseCase(TooLongUseCaseStep)
            UseCasesCard.verifyInvalidNumberOfCharSteps()
        })
        it('Too long Use Case Steps (multiple steps)', ()=>{            //  THIS TEST WILL FAIL BECAUSE OF "Multiple 'Test step needs to be between 0 and 255' messages get combined in one message" REPORTED ISSUE
            const TooLongMultipleTests = UseCases.TooLongMultipleUseCaseSteps
            UseCasesCard.createUseCase(TooLongMultipleTests)
            UseCasesCard.verifyInvalidNumberOfCharMultipleSteps(TooLongMultipleTests["TestSteps"])
        })
        it('Combine valid and invalid(too long) test steps', ()=>{     //  THIS TEST WILL FAIL BECAUSE OF "'Test step needs to be between 0 and 255' message displayed for valid steps" REPORTED ISSUE
            const CombineValidInvalidSteps = UseCases.CombineValidInvalidSteps
            UseCasesCard.createUseCase(CombineValidInvalidSteps)
            UseCasesCard.verifyValidityOfTestSteps(CombineValidInvalidSteps["TestSteps"])
        })
    })
    describe('Valid use cases - Create Use Case', ()=>{
        beforeEach(()=>{
            LoginPage.login(login["ValidEmail"], login["ValidPass"])
            HomePage.clickUseCasesCard()
        })
        it('Create simple Use Case - madatory fields only, one Test Step', ()=>{
            const SimpleUseCase = UseCases.SimpleUseCase
            UseCasesCard.createUseCase(SimpleUseCase)
            UseCasesCard.verifyUseCase(SimpleUseCase)
        })
        it('Create full Use Case - all fields, multiple Test Steps', ()=>{
            const FullUseCase = UseCases.FullUseCase
            UseCasesCard.createUseCase(FullUseCase)
            UseCasesCard.verifyUseCase(FullUseCase)
        })
        it('Create full Use Case - minimum edge case', ()=>{
            const MinEdgeUseCase = UseCases.MinEdgeUseCase
            UseCasesCard.createUseCase(MinEdgeUseCase)
            UseCasesCard.verifyUseCase(MinEdgeUseCase)
        })
        it('Create full Use Case - maximum edge case', ()=>{    //  THIS CASE FINDES "Long Title of Use Case is not displayed well in Use Cases card" REPORTED ISSUE, BUT IT WILL PASS BECAUSE IT IS VISUAL BUG
            const MaxEdgeUseCase = UseCases.MaxEdgeUseCase
            UseCasesCard.createUseCase(MaxEdgeUseCase)
            UseCasesCard.verifyUseCase(MaxEdgeUseCase)
        })
    })
    describe('Invalid use cases - Edit Use Casd', ()=>{})       //      TO BE DONE
    describe('Valid use cases - Edit Use Case', ()=>{})         //      TO BE DONE - SOME OF THOSE TESTS WILL BE TESTED IN FURTHER TESTS
    describe('Full use case and Exam use case', ()=>{           //      THESE TESTS TEST ALL FUNCTIONALITIES WITH COMBINING EACH OF THEM
        beforeEach(()=>{
            LoginPage.login(login["ValidEmail"], login["ValidPass"])
            HomePage.clickUseCasesCard()
        })
        it('Full use case', ()=>{
            const test1 = UseCases.test1
            const test2 = UseCases.test2
            const test3 = UseCases.test3
            UseCasesCard.createUseCase(test1)           //automated
            UseCasesCard.verifyUseCase(test1)
            UseCasesCard.editUseCase(test1, test2)      //not automated, less test steps (step deleted)
            UseCasesCard.verifyUseCase(test2)
            UseCasesCard.editUseCase(test2, test3)      //automated, more test steps (steps added)
            UseCasesCard.verifyUseCase(test3)
            UseCasesCard.deleteUseCase(test3)
            UseCasesCard.verifyDeletedUseCase(test3)
        })
        it('Exam use case', ()=>{
            const ExamTest1 = UseCases.ExamTest1
            const ExamTest2 = UseCases.ExamTest2
            const ExamTest3 = UseCases.ExamTest3
            const ExamTest4 = UseCases.ExamTest4
            UseCasesCard.createUseCase(ExamTest1)
            UseCasesCard.createUseCase(ExamTest2)
            UseCasesCard.createUseCase(ExamTest3)
            UseCasesCard.createUseCase(ExamTest4)
            UseCasesCard.examEditUseCase(ExamTest1)
            UseCasesCard.examEditUseCase(ExamTest2)
            UseCasesCard.examEditUseCase(ExamTest3)
            UseCasesCard.examEditUseCase(ExamTest4)
        })
    })
})