/**
 * @fileOverview Home page interact
 * @author Stefan Bogosavac
 * @version 1.0.0.
 */

/// <reference types='cypress'/>

import {HomePageLocators} from '../page-object/HomePageLocators'
import {LoginPageInteract} from '../page-object/LoginPage'
import {UseCasesCardLocators} from './UseCasesCardLocators'

/**
 * A class for managing Home Page.
 * @class
 */
export class HomePageInteract{
    constructor(){
        this.HomePage = new HomePageLocators()
        this.LoginPage = new LoginPageInteract()
        this.UseCasesCard = new UseCasesCardLocators()
    }

    /**
     * Used to click on Use Cases Card.
     * 
     */
    clickUseCasesCard(){
        cy.wait(500)
        this.HomePage.useCasesCard().click()
    }

    /**
     * Used to log out of Home page and to verify Login page.
     * 
     */
    logOut(){
        this.HomePage.logout().click()
        this.LoginPage.verifyQaSandbox()
    }

    /**
     * Used to navigate to Home page.
     * 
     */
    gotoHomePage(){
        this.HomePage.sandbox().click()
    }

    /**
     * Used to verify Header Links of Home page.
     * @description
     * Links that are verified are:
     * qaSandbox, sandbox, exam, intro, logout.
     * 
     */
    verifyHeader(){
        this.HomePage.qaSandbox()
        this.HomePage.sandbox()
        this.HomePage.exam()
        this.HomePage.exam()
        this.HomePage.intro()
        this.HomePage.logout()
    }

    /**
     * Ued to verify Home page links.
     * 
     * @description
     * Verified links:
     * Header links, Dashboard, Progress bar, Profile card, 
     * Use Cases Card, Playground Card and Reports Card.
     * 
     */
    verifyHomePage(){
        this.verifyHeader()
        this.HomePage.dashboard()
        this.HomePage.progressBar()
        this.HomePage.profileCard()
        this.HomePage.useCasesCard()
        this.HomePage.playgroundCard()
        this.HomePage.reportsCard()
    }

    /**
     * Ued to verify Use Cases Card header.
     * 
     * @description
     * Verifies: Back button, Use Cases title and create Use Case button.
     * 
     */
    verifyUseCasesCardHeader(){
        this.UseCasesCard.backButton()
        this.UseCasesCard.useCasesTitle()
        this.UseCasesCard.createUseCaseBtn()
    }

    /**
     * Used to open Use Cases Card.
     * 
     * @description
     * Click on Use Cases Card and verifies Use Cases Card header.
     * 
     */
    openUseCasesCard(){
        this.clickUseCasesCard()
        this.verifyUseCasesCardHeader()
    }

    /**
     * Used to click on Back Button.
     * 
     */
    clickBackButton(){
        this.UseCasesCard.backButton().click()
    }

    /**
     * Methods for verification of number of written and automated use cases on Dashboards of Use Cases and Playground cards.
     * 
     * 
     * Num of use cases(automated)              UseCases card status                        Playground card status
     *          $i($j)
     *          0                               No use cases written yet                    Add use cases which you will automate
     *          1-3(0)                          $i written down so far (4-$i to go)         $i use cases written but none automated yet
     *          1-3(1-2)                                                                    $j out of $i use cases automated (4-$j to go)
     *          4+(1-3)                         $i use cases written down so far            $j out of $i use cases automated (4-$j to go)
     *          4+(4+)                                                                      $j out of $i use cases automated
     * 
     */ 
     
    /**
     * Used to verify text on Use Cases card Dashboard.
     * 
     * @description
     * Verify text on Use Cases Card Dashboard that says how many use cases are written.
     * 
     * @param {number} UseCases - Number of written Use Cases
     */
    verifyUseCasesCard(UseCases){
        expect(UseCases).to.not.equal(0)
        if(UseCases < 4){
            this.HomePage.useCasesCard().find('small').then(($txt)=>{
                cy.wrap($txt).should('have.text', UseCases + ' written down so far (' + (4-UseCases) + ' to go)')
        })
        }else{
        this.HomePage.useCasesCard().find('small').then(($txt)=>{
            cy.wrap($txt).should('have.text', UseCases + ' use cases written down so far')
        })
    }
    }

    /**
     * Used to verify text on Playground Card Dashboard.
     * 
     * @description
     * Verify text on Playground Card Dashboard that says how many use cases are automated.
     * 
     * @param {number} UseCases  - Number of written use cases
     * @param {number} AutoCases - Number of automated use cases
     */
    verifyPlaygroundCard(UseCases, AutoCases){
        expect(UseCases).to.not.equal(0)
        if(AutoCases==0){
            this.HomePage.playgroundCard().find('small').then(($txt)=>{
                cy.wrap($txt).should('have.text', UseCases + ' use cases written but none automated yet')
            })
        }
        else if(AutoCases < 4){
            this.HomePage.playgroundCard().find('small').then(($txt)=>{
                cy.wrap($txt).should('have.text', AutoCases + ' out of ' + UseCases + ' use cases automated ('+ (4-AutoCases) + ' to go)')
            })
        }
        else{
            this.HomePage.playgroundCard().find('small').then(($txt)=>{
            cy.wrap($txt).should('have.text', AutoCases + ' out of ' + UseCases + ' use cases automated')
        })
    }
    }

   
    /**
     * Used to count number of written and automated Use Cases and verify Use Cases Card and Playground Card Dashboards.
     * 
     * @param {boolean} automatedExist - Set to TRUE if automated use cases exists, 
     *                                   otherwise set to FALSE
     */
    numberOfUsesCases(automatedExist){
        let TestCases=0
        let AutoTestCases=0
        this.clickUseCasesCard()
        this.UseCasesCard.useCases().each(()=>{
            TestCases++
        }).then(()=>{
            if(automatedExist){
                this.UseCasesCard.automatedUseCases().each(()=>{
                    AutoTestCases++
                })
        }
        }).then(()=>{
            this.clickBackButton()
            this.verifyUseCasesCard(TestCases)
            this.verifyPlaygroundCard(TestCases, AutoTestCases)
        })
    }

    /**
     * Used to verify text on Dashboards in case there is no written use cases.
     */
    verifyNoUseCases(){
        this.HomePage.useCasesCard().find('small').then(($txt)=>{
            cy.wrap($txt).should('have.text', 'No use cases written yet')
        })
        this.HomePage.playgroundCard().find('small').then(($txt)=>{
            cy.wrap($txt).should('have.text', 'Add use cases which you will automate')
        })
        this.clickUseCasesCard()
        this.UseCasesCard.useCases().should('not.exist')
        this.clickBackButton()
    }

    /**
     * Main method for verification of written and automated use cases.
     * 
     */
    verifyNumberOfUseCases(){
        this.clickBackButton()
        this.HomePage.useCasesCard().find('small').then(($txt)=>{
            let text = $txt.text()
            this.HomePage.playgroundCard().find('small').then(($pgtxt)=>{
                let playgroundtext = $pgtxt.text()
                let autoExist = playgroundtext.includes("none automated yet")
                if(text=='No use cases written yet'){
                    this.verifyNoUseCases()
                }else{
                    this.numberOfUsesCases(!autoExist)
                }
            })
        })
    }
    /**********                 END OF USE CASES NUMBER VERIFICATION                    **********/
    
}