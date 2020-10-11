/// <reference types='cypress'/>

export class InputData{
        LoginPage(){
                const lp = {
                        ValidEmail: "bogosavac_s@hotmail.com",
                        InvalidEmail : "asd@asd.asd",
                        ValidPass : "L0zinka.123",
                        InvalidPass : "asdasd",
                        InputTxt1 : "text1",
                        InputTxt2 : "text2"
                }
                return lp
        }
        UseCases(){
                const uc = {
                        WhitespaceUseCase : {
                                title: "                   ",
                                description:"                 ",
                                ExpResult:"                 ",
                                TestSteps:["                "],
                                automated: true
                        },
                        UseCaseWithEmptySteps : {
                                title: "No Steps",
                                description:"description",
                                ExpResult:"Expected Result",
                                TestSteps:["           ", "             ", "           "],
                                automated: true
                        },
                        TooShortTitle : {
                                title: "1234",
                                description:"description",
                                ExpResult:"Expected Result",
                                TestSteps:["test"],
                                automated: true
                        },
                        TooLongTitle : {
                                title: "fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa",
                                description:"256 characters",
                                ExpResult:"Expected Result",
                                TestSteps:["test"],
                                automated: true
                        },
                        TooShortExpRes : {
                                title: "title",
                                description:"description",
                                ExpResult:"1234",
                                TestSteps:["test"],
                                automated: true
                        },
                        TooLongExpRes : {
                                title: "title",
                                description:"description",
                                ExpResult:"fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa",
                                TestSteps:["test"],
                                automated: true
                        },
                        TooLongUseCaseStep : {
                                title: "title",
                                description:"description",
                                ExpResult:"Expected Result",
                                TestSteps:["fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa"],
                                automated: true
                        },
                        TooLongMultipleUseCaseSteps : {
                                title: "title",
                                description:"description",
                                ExpResult:"Expected Result",
                                TestSteps:["fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa", "fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa", "fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa"],
                                automated: true
                        },
                        CombineValidInvalidSteps : {
                                title: "title",
                                description:"description",
                                ExpResult:"Expected Result",
                                TestSteps:["fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa", "valid", "fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa", "valid", "valid", "fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa", "fhragoiuwhgvouazerhfiwejanfvhdfbviejnbhusnfijabnouesnjvabtouhvnjabdniugnfaosnibujeandirnanbodsgabthvnćaohbanardthngvnbflhgjgbushfoargbjgbnslvrnsblhjhnbičvjbnnfgshbbvyjgodhfhragoiuwhgvouazerhfiwasdasdsadasdasdasdsadasdsadasdsadasdasdasdasdasdadsadasadsasdaa"],
                                automated: true
                        },

                        test1 : {
                                title : "test1",
                                description : "description1",
                                ExpResult : "Expected Result1",
                                TestSteps : ["teststep1", "teststep2", "teststep3", "teststep4"],
                                automated : true
                        },
                        test2 :{
                                title : "test2",
                                description : "description2",
                                ExpResult : "Expected Result2",
                                TestSteps : ["teststep21", "teststep22", "teststep23"],
                                automated : false
                        },
                        test3 :{
                                title : "test3",
                                description : "description3",
                                ExpResult : "Expected Result3",
                                TestSteps : ["teststep31", "teststep32", "teststep33", "teststep34"],
                                automated : true
                        },
                        ExamTest1 : {
                                title : "Exam title first",
                                description : "Exam description first",
                                ExpResult : "Exam expected result first",
                                TestSteps : ["Exam test step first one", "Exam test first two"],
                                automated : true
                        },
                        ExamTest2 : {
                                title : "Exam title second",
                                description : "Exam description second",
                                ExpResult : "Exam expected result second",
                                TestSteps : ["Exam test step second one", "Exam test second two"],
                                automated : true
                        },
                        ExamTest3 : {
                                title : "Exam title third",
                                description : "Exam description third",
                                ExpResult : "Exam expected result third",
                                TestSteps : ["Exam test step third one", "Exam test third two"],
                                automated : true
                        },
                        ExamTest3 : {
                                title : "Exam title third (3th)",
                                description : "Exam description third (3th)",
                                ExpResult : "Exam expected result third (3th)",
                                TestSteps : ["Exam test step third (3th) one", "Exam test third (3th) two"],
                                automated : true
                        },
                        ExamTest4 : {
                                title : "Exam title fourth (4th)",
                                description : "Exam description fourth (4th)",
                                ExpResult : "Exam expected result fourth (4th)",
                                TestSteps : ["Exam test step fourth (4th) one", "Exam test fourth (4th) two"],
                                automated : true
                        },
                        SimpleUseCase :{
                                title : "Simple use case",
                                description : "",
                                ExpResult : "Mandatory only",
                                TestSteps : ["One step"],
                                automated : true
                        },
                        FullUseCase  : {
                                title : "Full use case",
                                description : "All fields",
                                ExpResult : "All fields",
                                TestSteps : ["Multiple steps one", "Multiple steps two", "Multiple steps three"],
                                automated : true
                        },
                        MinEdgeUseCase : {
                                title : "12345",
                                description : "Five characters for each field",
                                ExpResult : "12345",
                                TestSteps : ["12345", "12345", "12345"],
                                automated : true
                        },
                        MaxEdgeUseCase : {
                                title : "qwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyx",
                                description : "255 characters for each field",
                                ExpResult : "qwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyx",
                                TestSteps : ["qwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyx", "qwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyx", "qwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyxqwertzuioplkjhgyx"],
                                automated : true
                        }
                }
                return uc
        }
        Dashboard(){
                const usecases = {
                        NotAutomatedUseCase : {
                                title : "Not automated Use Case",
                                description : "Description",
                                ExpResult : "Expected Result",
                                TestSteps : ["Test step"],
                                automated : false
                        },
                        AutomatedUseCase : {
                                title : "Automated Use Case",
                                description : "Description",
                                ExpResult : "Expected Result",
                                TestSteps : ["Test step"],
                                automated : true
                        }
                }
                return usecases
        }
}