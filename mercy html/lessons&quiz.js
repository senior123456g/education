function checkAnswers() {
    let score = 0;
    
    // Question 1
    if (document.querySelector('input[name="question1"]:checked') && document.querySelector('input[name="question1"]:checked').value === "mountain") {
        score++;
    }
    
    // Question 2
    if (document.querySelector('input[name="question2"]:checked') && document.querySelector('input[name="question2"]:checked').value === "valley") {
        score++;
    }
    
    // Question 3
    if (document.querySelector('input[name="question3"]:checked') && document.querySelector('input[name="question3"]:checked').value === "desert") {
        score++;
    }
    
    // Question 4
    if (document.querySelector('input[name="question4"]:checked') && document.querySelector('input[name="question4"]:checked').value === "plateau") {
        score++;
    }

    // Display the result
    let result = document.getElementById('result');
    result.textContent = "You scored " + score + " out of 4.";
}
