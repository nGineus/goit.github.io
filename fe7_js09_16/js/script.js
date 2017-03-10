function Human(name, age, gender, height, weight) {
        this.name = name || 'ИМЯ';
        this.age = age || '?';
        this.gender = gender || 'ПОЛ';
        this.height = height || 'РОСТ';
        this.weight = weight || 'ВЕС';
        this.introduce = function() {
         console.log('Меня зовут: ', this.name + '\n' + 'Мой возраст: ', this.age + '\n' +
                     'Мой пол: ', this.gender + '\n' + 'Мой рост: ', this.height + '\n' +
                     'Мой вес: ', this.weight);
        }
    }

    function Worker(job, zp) {
        this.job = job || 'РАБОТА';
        this.zp = zp || 'ЗАРПЛАТА';
        this.work = function() {
            console.log('Работаю!');
        };

        this.introduce_worker = function() {
          console.log('Моя профессия: ', this.job + '\n' + 'Моя ЗП: ', this.zp);
        }
    }

    function Student(study, stepuha) {
        this.study = study || 'УЧЕБА';
        this.stepuha = stepuha || 'СТИПЕНДИЯ';
        this.watch = function() {
            console.log('Смотрю сериалы!');
        };

        this.introduce_student = function() {
          console.log('Я занимаюсь: ', this.study + '\n' + 'Я получаю: ', this.stepuha);
        }
    }


    Worker.prototype = new Human("Василий", 99, "муж", 183, 85);
    Student.prototype = new Human("Степан", 19, "муж", 168, 55);

    var Worker1 = new Worker("дворник", 1000);

    Worker.prototype = new Human("Лариса", 25, "жен", 150, 44);
    var Worker2 = new Worker("инженер", 9999);

    var Student1 = new Student("студент", 65);


    Worker1.introduce();
    Worker1.introduce_worker();
    Worker1.work();

    Worker2.introduce();
    Worker2.introduce_worker();
    Worker2.work();

    Student1.introduce();
    Student1.introduce_student();
    Student1.watch();
