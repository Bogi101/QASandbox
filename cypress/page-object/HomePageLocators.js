/// <reference types='cypress'/>

/**
 * @class
 * Home Page Locators
 */
export class HomePageLocators{
    qaSandbox(){
        return cy.xpath('//b[text()="QA Sandbox"]')
    }
    sandbox(){
        return cy.xpath('//a[contains(@class, "nav-link") and text()="Sandbox"]')
    }
    exam(){
        return cy.xpath('//a[contains(@class, "nav-link") and text()="Exam"]')
    }
    intro(){
        return cy.xpath('//a[contains(@class, "nav-link") and text()="Intro"]')
    }
    logout(){
        return cy.xpath('//a[contains(@class, "nav-link") and text()="Logout"]')
    }
    dashboard(){
        return cy.xpath('//b[text()="Dashboard"]')
    }
    progressBar(){
        return cy.xpath('//div[@class="progress-bar"]')
    }
    profileCard(){
        return cy.xpath('//div[@data-testid="profile_card_id"]')
    }
    useCasesCard(){
        return cy.xpath('//div[@data-testid="use_cases_card_id"]')
    }
    playgroundCard(){
        return cy.xpath('//div[@data-testid="playground_card_id"]')
    }
    reportsCard(){
        return cy.xpath('//div[@data-testid="reports_card_id"]')
    }
}