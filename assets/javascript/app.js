$(document).ready(function(){
//trivia questions and answers
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
    //define variables
    var timeLeft = 16;
    var wrongAnswers = 0;
    var rightAnswers = 0;
    var questionsLeft = 0;
    var intervalID;
    var indexQA = 0;
    var answered = false;
    var correct;
    // gamePlay functions
    //when button is pressed, startGame beings gamePlay
    function startGame(){
        $(".startButton").remove();
        rightAnswers = 0;
        wrongAnswers = 0;
        questionsLeft = 0;
        displayQuestions();
    }
    //displays questions and answers in main-cotent
    function displayQuestions(){
        $("#question").html("<h2>" + triviaQuestions[indexQA].question + "</h2>");
        var answerChoices = triviaQuestions[indexQA].options;
        for(var i = 0; i < triviaQuestions[indexQA].options.length; i++){
            $("#answers").append("<br><input type=radio name='possible-answers'> " + answerChoices[i] + "</input><br>");
        }
        run();
    }
    
    //runs timer
    function run(){
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    }
    //decreases time by one second
    function decrement(){
        timeLeft--;
        $(".timeLeft").html("<h3> Time Left: " + timeLeft + "</h3>");
        if(timeLeft === 0){
            stop();
            $(".timeLeft").html("<h3>You ran out of time!</h3>");
        }
    }
    //stops timer and clears interval
    function stop(){
        clearInterval(intervalID);
    }
    //press button to play
    $(".startButton").on("click", function(){
        startGame();
    });

});