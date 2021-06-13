const questions = document.querySelectorAll('div[class="question-container"]');

var wasActivate = false;
var questionActivated = undefined;
var lastActivated = undefined;

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        if(!wasActivate && !questionActivated){
            question.classList.add('activate-question');
            question.querySelector('div[class="reply"]').classList.add('showing-reply')
            wasActivate = true;
            questionActivated = index;
            lastActivated = index;

        }else if(wasActivate && questionActivated == index){
            question.querySelector('div[class^="reply"]').classList.remove('showing-reply')
            question.classList.remove('activate-question')
            wasActivate = undefined;
            questionActivated = undefined;
            lastActivated = undefined;
        }
        else if(wasActivate && questionActivated != index){
            questions[lastActivated].classList.remove('activate-question');
            questions[lastActivated].querySelector('div[class^="reply"]').classList.remove('showing-reply');
            question.classList.add('activate-question');
            question.querySelector('div[class="reply"]').classList.add('showing-reply')
            wasActivate = true;
            questionActivated = index;
            lastActivated = index;
        }

    })
})