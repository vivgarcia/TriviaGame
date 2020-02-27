$(document).ready(function(){
//define variables
var timeLeft = 16;
var wrongAnswers = 0;
var rightAnswers = 0;
var questionsLeft = 0;
var intervalID;
var indexQA = 0;
var answered = false;
var correct;
var triviaQuestions = [
    {
        question: "What state is Parks and Rec based in?",
        options: [
            "Indiana", 
            "Texas", 
            "Wisconsin", 
            "California"
        ],
        correctAnswer: "0"
    },
    {
        question: "What is the name of Ron Swanson's saxophone playing alter-ego?",
        options: [
            "Kenny G", 
            "Pablo Johnson", 
            "Duke Silver", 
            "Sammy Tunes"
        ],
        correctAnswer: "2"
    },
    {
        question: "What was April Ludgate's job position at the Pawnee Parks Department initially?",
        options: [
            "Janitor", 
            "College Intern", 
            "Rapid Animal Extermination Crew", 
            "Secretary"
        ],
        correctAnswer: "1"
    },
    {
        question: "What is the name of the rival town, that Leslie Knope was born in?",
        options: [
            "Pawnee", 
            "Muncie", 
            "Eagleton", 
            "Indianapolis"
        ],
        correctAnswer: "2"
    },
    {
        question: "Why was Ben Wyatt famous for before moving to Pawnee?",
        options: [
            "State Auditor", 
            "Creating Cones of Dunshire", 
            "Children's TV Host", 
            "Kid Mayor"
        ],
        correctAnswer: "3"
    }
    ];

    // gamePlay functions

    function startGame(){
        $(".startButton").remove();
        rightAnswers = 0;
        wrongAnswers = 0;
        questionsLeft = 0;
        playGame();
    }

    function playGame(){

    };

    $(".startButton").on("click", function(){
    //     $(".main-content").text(triviaQuestions[1].question)
        startGame();
    });

});