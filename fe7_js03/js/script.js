var bodyTag = document.querySelector("body");
var h1 = document.createElement('h1');
var container = document.createElement('form');
var level = 0;

var data = {
    "Вопрос №1": {
        " Вариант ответа №1": {},
        " Вариант ответа №2": {},
        " Вариант ответа №3": {}
    },
    "Вопрос №2": {
        " Вариант ответа №1": {},
        " Вариант ответа №2": {},
        " Вариант ответа №3": {}
    },
    "Вопрос №3": {
        " Вариант ответа №1": {},
        " Вариант ответа №2": {},
        " Вариант ответа №3": {}
    }
};

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
    var li = '';
    for (var key in obj) {
        if (level === 0) {
            level = 1;
            li += '<ul>' + key + createTreeText(obj[key]) + '</ul>';
            level = 0;
        } else {
            li += '<li> <label> <input type="checkbox">' + key + createTreeText(obj[key]) + '</label> </li>';
        }
    }
    if (li) {
        var ul = '<ul>' + li + '</ul>';
        // level = 0;
    }
    return ul || '';
}

var header = document.createElement('h1');
header.innerHTML = 'Тест по программированию';

createTree(container, data);

var submitButton = document.createElement('div');
submitButton.className = 'submit_btn';

var submitButton_a = document.createElement('a');
submitButton.innerHTML = '<a href="#">' + 'Проверить мои результаты';
submitButton.appendChild(submitButton_a);


bodyTag.appendChild(header);
bodyTag.appendChild(container);
bodyTag.appendChild(submitButton);
