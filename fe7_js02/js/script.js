var nameBase = new Array(5);
var inputName;

for (var counter = 0; counter < 5; counter++) {
    nameBase[counter] = prompt('Введите имя пользователя');
}

inputName = prompt('Введите имя пользователя для входа');

if (loginChek(nameBase, inputName) === true)
    alert(inputName + ', вы успешно вошли');
else
    alert('Ошибка. Пользователя с именем ' + inputName + ' не обнаружено');


function loginChek(checkNameBase, checkInputName) {
    for (counter = 0; counter < checkNameBase.length; counter++) {
        if (checkNameBase[counter] == checkInputName)
            return (true);
    }
    return (false);
}
