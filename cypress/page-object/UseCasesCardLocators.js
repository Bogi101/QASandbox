/// <reference types='cypress'/>

/**
 * @class
 * Use Cases card locators
 */
export class UseCasesCardLocators{
    useCasesTitle(){
        return cy.xpath('//b[text()="Use Cases"]')
    }
    useCase(name){
        return cy.xpath('//div[@class="list-group mt-5"]//a[text()="'+name+'"][1]')
    }
    useCases(){
        return cy.xpath('//div[@class="list-group mt-5"]//a')
    }
    automatedUseCases(){
        return cy.xpath('//div[@class="list-group mt-5"]//i')
    }
    createUseCaseBtn(){
        return cy.xpath('//a[text()="CREATE USE CASE"]')
    }
    newUseCaseTitle(){
        return cy.xpath('//b[text()=" New Use Case"]')
    }
    titleField(){
        return cy.xpath('//input[@name="title"]')
    }
    descriptionField(){
        //return cy.xpath('//textarea[@name="description"]')
        return cy.get('textarea.form-control')
    }
    expectedResultField(){
        return cy.xpath('//input[@name="expected_result"]')
    }
    stepField(StepNum){
        return cy.xpath('//input[@name="testStepId-'+StepNum+'"]')
    }
    stepFields(){
        return cy.xpath('//input[@id="stepId"]')
    }
    deleteStepBtn(StepNum){
        return cy.xpath('(//button[@data-testid="delete_usecase_step_btn"])['+StepNum+']')
    }
    automated(){
        return cy.xpath('//input[@name="automated-switch"]')
    }
    automatedSwitchOn(){
        return cy.xpath('//label[parent::div[./input[@name="automated-switch" and @value="true"]]]')
    }
    automatedSwitchOff(){
        return cy.xpath('//label[parent::div[./input[@name="automated-switch" and @value="false"]]]')
    }
    addTestStepBtn(){
        return cy.xpath('//button[contains(@class, "addTestStep")]')
    }
    deleteTestStepBtn(){
        return cy.xpath('//button[@data-testid="delete_usecase_step_btn"]')
    }
    submitBtn(){
        return cy.xpath('//button[@type="submit"]')
    }
    removeUseCaseBtn(){
        return cy.xpath('//button[@data-testid="remove_usecase_btn"]')
    }
    confirmDelete(){
        return cy.xpath('//button[text()="Delete"]')
    }
    backButton(){
        return cy.get('.fa')
    }

    invalidTitle(){
        return cy.xpath('//input[@name="title" and contains(@class, "invalid")]')
    }
    emptyTitleMsg(){
        return cy.xpath('//div[text()="Title is required"]')
    }
    invalidTitleMsg(){
        return cy.xpath('//div[text()="Title needs to be between 5 and 255"]')
    }
    invalidExpectedResult(){
        return cy.xpath('//input[@name="expected_result" and contains(@class, "invalid")]')
    }
    emptyExpectedResultMsg(){
        return cy.xpath('//div[text()="Expected result is required"]')
    }
    invalidExpectedResultMsg(){
        return cy.xpath('//div[text()="Expected results needs to be between 5 and 255"]')
    }
    invalidStep(){
        return cy.xpath('//input[@id="stepId" and contains(@class, "invalid")]')
    }
    invalidMultipleSteps(StepNum){
        return cy.xpath('//input[@id="stepId" and contains(@class, "invalid") and @data-id='+StepNum+']')
    }
    emptyStepMsg(){
        return cy.xpath('//div[text()="There must be at least one test step"]')
    }
    emptyMultipleStepsMsg(StepNum){
        return cy.xpath('//div[parent::div[./input[@id="stepId" and contains(@class, "invalid") and @data-id='+StepNum+']] and text()="There must be at least one test step"]')
    }
    invalidStepMsg(){
        return cy.xpath('//div[text()="Test step needs to be between 0 and 255"]')
    }
    invalidMultipleStepsMsg(StepNum){
        return cy.xpath('//div[parent::div[./input[@id="stepId" and contains(@class, "invalid") and @data-id='+StepNum+']] and (text()="Test step needs to be between 0 and 255" and not(text()[2]="Test step needs to be between 0 and 255"))]')
    }
    validStep(StepNum){
        return cy.xpath('//input[@name="testStepId-'+StepNum+'"] and not(contains(@class, "invalid"))]')
    }
    validStepMsg(StepNum){  //  NO MESSAGE
        return cy.xpath('(//div[@class="input-delete" and not(./div[@class="invalid-feedback"])])['+StepNum+']')
    }
}