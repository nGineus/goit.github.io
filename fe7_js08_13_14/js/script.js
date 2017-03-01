'use strict';

let data_Object = {
    members: [{
            name: "question1",
            h4: "Что обозначает директива ‘use strict’?",
            type: "radio",
            answer1: "Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.",
            value1: "incorrect",
            answer2: "Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.",
            value2: "correct",
            answer3: "Код данного скрипта будет обработан по строгим правилам стандарта HTML5.",
            value3: "incorrect"
        },
        {
            name: "question2",
            h4: "К какому участку скрипта применяется строгие правила ‘use strict’?",
            type: "radio",
            answer1: "Во всем скрипте.",
            value1: "incorrect",
            answer2: "Либо во всем скрипте, либо в отдельной функции.",
            value2: "correct",
            answer3: "Внутри блока {}",
            value3: "incorrect"
        },
        {
            name: "question3",
            h4: "Какие основное ограничения к объявлению переменных в строгом режиме?",
            type: "checkbox",
            answer1: "Переменные функций НЕ должны объявляться с использованием ключевого слова.",
            value1: "incorrect",
            answer2: "Глобальные переменные должны объявляться с использованием ключевого слова.",
            value2: "correct",
            answer3: "Любая переменная должна объявляться с использованием ключевого слова",
            value3: "correct"
        }
    ]
};

// Processing with localStorage
localStorage.clear();
localStorage.setItem('questions', JSON.stringify(data_Object));
let local_questions = localStorage.getItem('questions');
data_Object = JSON.parse(local_questions);


var test_block = document.getElementById("test_block");
var submit_btn = document.getElementById("test_block");
test_block.innerHTML = tmpl("test_script", data_Object);

let answers = [];
let correct = [];

function compare(cor, ans) {
    for (let i in cor) {
        if ((cor[i] === "correct" && ans[i] === false) || (cor[i] === "incorrect") && ans[i] === true) return false;
    }
    return true;
}

// Calculating results
submit_btn.addEventListener("submit", function(event) {
    event.preventDefault();
    for (var i = 0; i < data_Object.members.length; i++) {
        answers[i * 3] = event.target[i * 3].checked;
        answers[i * 3 + 1] = event.target[i * 3 + 1].checked;
        answers[i * 3 + 2] = event.target[i * 3 + 2].checked;

        correct[i * 3] = data_Object.members[i].value1;
        correct[i * 3 + 1] = data_Object.members[i].value2;
        correct[i * 3 + 2] = data_Object.members[i].value3;
    }

    if (compare(correct, answers)) {
        $('#overlay').fadeIn(600,
            function() {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
                $('#modal_form .modal_message').html("ПОЗДРАВЛЯЕМ ВСЕ ВЕРНО");
            });
    } else {
        $('#overlay').fadeIn(300,
            function() {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
                $('#modal_form .modal_message').html("ВСЕ ПЛОХО !!!");
            });
    }

    $('#modal_close, #overlay').click(function() {
        $('#modal_form')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function() {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                    test_block.reset();
                }
            );
    });
});
