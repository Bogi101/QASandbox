/**
 * @fileOverview Use Cases Card interact
 * @author Stefan Bogosavac
 * @version 1.0.0.
 */

/// <reference types='cypress'/>

import {UseCasesCardLocators} from './UseCasesCardLocators'
import {InputData} from './InputData'
import {HomePageLocators} from './HomePageLocators'

const Input = new InputData()
const UseCases = Input.UseCases()

/**
 * A class for managing Use Cases Card Page.
 * @class
 */
export class UseCasesCardInteract{
    constructor(){
        this.UseCasesCard = new UseCasesCardLocators()
        this.HomePage = new HomePageLocators()
    }
    /**
     * Used to click on Create Use Case Button.
     */
    clikCreateUseCase(){
        this.UseCasesCard.createUseCaseBtn().click()
    }
    /**
     * Used to open first Use Case with provided name.
     * 
     * @param {string} name - Name of the Use Case
     */
    openUseCase(name){
        this.UseCasesCard.useCase(name).click()
    }
    /**
     * Used to click on Back Button.
     */
    clickBackBtn(){
        this.UseCasesCard.backButton().click()
    }
    /**
     * Used to enter the name of Use Case.
     * 
     * @param {string} title - Title of Use Case
     */
    enterTitle(title){
        this.UseCasesCard.titleField().clear()
        this.UseCasesCard.titleField().type(title)
    }
    /**
     * Used to enter description of Use Case.
     * 
     * @param {text} description - Description of Use Case.
     */
    enterDescription(description){
        if(description.length > 0){
            this.UseCasesCard.descriptionField().clear()
            this.UseCasesCard.descriptionField().type(description)
        }
    }
    /**
     * Used to enter Expected results to Use Case.
     * 
     * @param {string} ExpResult - Expected results
     */
    enterExpectedResult(ExpResult){
        this.UseCasesCard.expectedResultField().clear()
        this.UseCasesCard.expectedResultField().type(ExpResult)
    }
    /**
     * 
     * Used to create Step in Use Case.
     * 
     * @param {number} StepNum - Number of the step
     * @param {string} Text    - Step description
     */
    enterStep(StepNum, Text){
        this.UseCasesCard.stepField(StepNum).clear()
        this.UseCasesCard.stepField(StepNum).type(Text)
    }
    /**
     * Used to click on Button for adding new Step.
     */
    addStep(){
        this.UseCasesCard.addTestStepBtn().click()
    }
    /**
     * Delete Step with provided number.
     * 
     * @param {number} StepNum - Number of the Step to be deleted
     */
    deleteStep(StepNum){
        this.UseCasesCard.deleteStepBtn(StepNum).click()
    }
    /**
     * Used to set Use Case to automated.
     */
    setAutomatedYes(){
        this.UseCasesCard.automatedSwitchOff().click()
    }
    /**
     * Used to set Use Case to not automated.
     */
    setAutomatedNo(){
        this.UseCasesCard.automatedSwitchOn().click()
    }
    /**
     * Used to click on Submit Button.
     */
    submit(){
        this.UseCasesCard.submitBtn().click()
        cy.wait(500)
    }
    /**
     * Used to click on Remove Use Case Button.
     */
    clickRemoveBtn(){
        this.UseCasesCard.removeUseCaseBtn().click()
    }
    /**
     * Used to click on Confirm Delete Button.
     */
    clickConfirmDeleteBtn(){
        this.UseCasesCard.confirmDelete().click()
    }
    /**
     * Used to remove Use Case.
     */
    removeUseCase(){
        this.clickRemoveBtn()
        cy.wait(500)
        this.clickConfirmDeleteBtn()
        cy.wait(500)
    }
    
    /**
     * Used to verify text inside of input field.
     * 
     * @param {Location} InputField - Field to be verified
     * @param {string} text         - Expected text
     */
    verifyInputField(InputField, text){
        InputField.then(($el)=>{
            expect($el.text(), text)
        })
    }

    /**
     * Used to enter Test Steps.
     * 
     * @param {string[]} steps - Steps to be entered
     */
    enterTestSteps(steps){
        for(let i = 0; i<steps.length; i++){
            this.enterStep(i, steps[i])
            if(steps[i+1]){
                this.addStep()
            }
        }
    }

    /**
     * Used to edit Test Steps.
     * 
     * @param {string[]} steps - Steps to be edited
     */
    editTestSteps(steps){
        let i=0
        this.UseCasesCard.stepFields().each(()=>{
            if(steps[i]){
                this.enterStep(i, steps[i])
            }else{
                this.deleteStep(i)
            }
            i++
        }).then(()=>{
            if(steps[i]){
                for(; i<steps.length; i++){
                    this.addStep()
                    this.enterStep(i, steps[i])
                }
            }
        })
    }

    /**
     * Used to verify Test Steps.
     * 
     * @param {string[]} steps - Steps to be verified
     */
    verifyTestSteps(steps){
        for(let i = 0; i<steps.length; i++){
            this.verifyInputField(this.UseCasesCard.stepField(i), steps[i])
        }
    }

    /**
     * Used to set if Use Case Card is automated.
     * 
     * @param {bool} bool - Set to TRUE if automated, otherwise set to FALSE
     */
    setAutomated(bool){
        if(bool){
            this.UseCasesCard.automated().invoke('attr', 'value').then(($status)=>{
                if($status=="false"){this.setAutomatedYes()}
            })
        }
        if(!bool){
            this.UseCasesCard.automated().invoke('attr', 'value').then(($status)=>{
                if($status=="true"){this.setAutomatedNo()}
            })
        }
    }

    /**
     * Used to verify if Use Case is automated.
     * 
     * @param {bool} bool - Set to TRUE if automated, otherwise set to FALSE
     */
    verifyAutomated(bool){
        if(bool){this.UseCasesCard.automatedSwitchOn()}
        else{this.UseCasesCard.automatedSwitchOff()}
    }

    /**
     * Used to set values for Use Case.
     * 
     * @param {UseCase} UseCase - Use Case from input data
     */
    setUseCaseValues(UseCase){
        this.enterTitle(UseCase.title)
        this.enterDescription(UseCase.description)
        this.enterExpectedResult(UseCase.ExpResult)
        this.setAutomated(UseCase.automated)
    }

    /**
     * Used to create Use Case.
     * 
     * @param {UseCase} UseCase - Use Case from input data
     */
    createUseCase(UseCase){
        this.clikCreateUseCase()
        this.setUseCaseValues(UseCase)
        this.enterTestSteps(UseCase.TestSteps)
        this.submit()
    }

    /**
     * Used to verify Use Case.
     * 
     * @param {UseCase} UseCase - Use Case from input data
     */
    verifyUseCase(UseCase){
        this.openUseCase(UseCase.title)
        this.verifyInputField(this.UseCasesCard.titleField(), UseCase.title)
        this.verifyInputField(this.UseCasesCard.descriptionField(), UseCase.description)
        this.verifyInputField(this.UseCasesCard.expectedResultField(), UseCase.ExpResult)
        this.verifyTestSteps(UseCase.TestSteps)
        this.verifyAutomated(UseCase.automated)
        this.clickBackBtn()
    }

    /**
     * Used to edit Use Case.
     * 
     * @param {UseCase} UseCaseToEdit - Use Case from input data to be edit
     * @param {UseCase} NewUseCase    - New Use Case from input data
     */
    editUseCase(UseCaseToEdit, NewUseCase){
        this.openUseCase(UseCaseToEdit.title)
        this.setUseCaseValues(NewUseCase)
        this.editTestSteps(NewUseCase.TestSteps)
        this.submit()
    }

    /**
     * Used to delete Use Case.
     * 
     * @param {UseCase} UseCase - Use Case from input data
     */
    deleteUseCase(UseCase){
        this.openUseCase(UseCase.title)
        this.removeUseCase()
    }

    /**
     * Used to verify that provided Use Case is deleted.
     * 
     * @param {UseCase} UseCase - Use Case from input data
     */
    verifyDeletedUseCase(UseCase){
        this.UseCasesCard.useCase(UseCase.title).should('not.exist')
    }

    /**
     * Used to delete Use Case with provided name.
     * 
     * @param {string} name - Name of the Use Case to be deleted
     */
    deleteUseCaseByName(name){
        this.openUseCase(name)
        this.removeUseCase()
    }

    /**
     * Used to delete all Use Cases.
     * 
     * @description
     * Reqired to be on Home Page to call this method.
     */
    deleteAllUseCases(){        
        this.HomePage.useCasesCard().find('small').then(($txt)=>{
            let text = $txt.text()
            this.HomePage.useCasesCard().click()
            if(text!='No use cases written yet'){
                this.UseCasesCard.useCases().each(($uc)=>{
                    let usecase = $uc.text()
                    this.deleteUseCaseByName(usecase)
                })
            }
        })
        
    }
    

    /** Verify Empty - methods */

    /**
     * Used to verify, after Submit, that Title field is empty and right message is displayed.
     */
    verifyEmptyTitle(){
        this.UseCasesCard.invalidTitle()
        this.UseCasesCard.emptyTitleMsg()
    }
    /**
     * Used to verify, after Submit, that Expected Result field is empty and right message is displayed.
     */
    verifyEmptyExpectedResult(){
        this.UseCasesCard.invalidExpectedResult()
        this.UseCasesCard.emptyExpectedResultMsg()
    }
    /**
     * Used to verify, after Submit, that Steps are empty and right message is displayed.
     */
    verifyEmptySteps(){
        this.UseCasesCard.invalidStep()
        this.UseCasesCard.emptyStepMsg()
    }

    /**
     * Used to verify empty Use Case. 
     * 
     * @description
     * Verifies that title, expectd results and steps are empty fields, after Submit.
     */
    verifyEmptyUseCase(){
        this.verifyEmptyTitle()
        this.verifyEmptyExpectedResult()
        this.verifyEmptySteps()
    }

    /** 
     * Used to verify missing Title of Use Case.
     */
    verifyMissingTitleUseCase(){
        this.verifyEmptyTitle()
    }
    /**
     * Used to verify missing Expecxted Resuts of Use Case.
     */
    verifyMissingExpectedResultUseCase(){
        this.verifyEmptyExpectedResult()
    }
    /**
     * Used to verify missing Steps of Use Case.
     */
    verifyMissingStepsUseCase(){
        this.verifyEmptySteps()
    }

    /**
     * Used to create empty Use Case.
     */
    createEmptyUseCase(){
        this.clikCreateUseCase()
        this.submit()
    }

    /**
     * Used to verify that number of characters in the Title
     * is not valid.
     */
    verifyInvalidNumberOfCharTitle(){
        this.UseCasesCard.invalidTitle()
        this.UseCasesCard.invalidTitleMsg()
    }
    /**
     * Used to verify that number of characters in the Expected Results
     * is not valid.
     */
    verifyInvalidNumberOfCharExpRes(){
        this.UseCasesCard.invalidExpectedResult()
        this.UseCasesCard.invalidExpectedResultMsg()
    }
    /**
     * Used to verify that number of characters in the Step
     * is not valid.
     */
    verifyInvalidNumberOfCharSteps(){
        this.UseCasesCard.invalidStep()
        this.UseCasesCard.invalidStepMsg()
    }

    /**
     * Used to verify that numbers of characters in the multiple Steps
     * are not valid.
     * 
     * @param {string[]} steps - Steps to be verified
     */
    verifyInvalidNumberOfCharMultipleSteps(steps){
        for(let i = 0; i<steps.length; i++){
            this.UseCasesCard.invalidMultipleSteps(i)
            this.UseCasesCard.invalidMultipleStepsMsg(i)
        }
    }

    /**
     * Used to verify vaidity of number of characters for each Step.
     * 
     * @param {string[]} steps - Steps to be verified
     */
    verifyValidityOfTestSteps(steps){
        for(let i = 0; i<steps.length; i++){
            if(steps[i].length < 256){
                this.UseCasesCard.validStep(i)
                this.UseCasesCard.validStepMsg(i)
            }
            else{
                this.UseCasesCard.invalidMultipleSteps(i)
                this.UseCasesCard.invalidMultipleStepsMsg(i)
            }
        }
    }

    /**
     * Used to edit Use Case as it is described in the Exam.
     * 
     * @description
     * Edit all input fields in the created test case by replacing it with string
     * This field previously had  + no. of characters in the previous string +  characters.
     * 
     * @example
     * If text in some test case field was "Creating test cases", after edit it should be "This field 
     * previously had 19 characters".
     * 
     * @param {UseCase} UseCase 
     */
    examEditUseCase(UseCase){
        this.openUseCase(UseCase.title)
        cy.xpath('//div[@class="form-group" or contains(@class, "input-delete")]/*').each(($el)=>{
            cy.wrap($el).invoke('attr', 'value').then(($text)=>{
                cy.log($text)
                cy.wrap($el).clear()
                cy.wrap($el).type('This field previously had '+$text.length+' characters')
            })
        })
        this.UseCasesCard.descriptionField().then(($el)=>{
            let text=$el.text()
            cy.wrap($el).clear()
            cy.wrap($el).type('This field previously had '+text.length+' characters')
        })
        this.submit()
    }
}