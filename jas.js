function calculate() {
    let num1 = parseFloat(prompt("Введите число"));
    let operation = prompt("Введите знак или название операции");

   let result;

   switch(operation){
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
        case 'sqrt':
            let num2 = parseFloat(prompt("Введите 2ое число:"));
            switch (operation){
                case '+':
                    result = num1 + num2;
                    break;

                case "-":
                    result = num1 - num2;
                    break;

                case "*":
                    result = num1 * num2;
                    break;

                case "/":
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        alert("Ошибка: деление на ноль!");
                        return;
                    }
                    result = num1 / num2;
                    break;
                    
                case "^":
                    result = Math.pow(num1,num2);
                    break;

                case "%":
                    result = num1/100;
                    break;

                case 'sqrt':
                    result = Math.sqrt(num1,num2);
                    break;
                    
                case 'PI':
                    result = Math.PI;
                    break;
                case 'sin':
                    result = Math.sin(num1);
                    break;
                case 'cos':
                    result = Math.cos(num1);
                    break;
                case 'tan':
                    result = Math.tan(num1);
                    break;
                case 'log':
                    result = Math.log(num1);
                    break;
                case 'save':
                    if (typeof(Storage) !== "undefined") {
                        localStorage.setItem("lastResult", result);
                        alert("Результат сохранен в локальном хранилище");
                        }
                        return;
                        break;
                default:
                    alert("Ошибка: неверный оператор!");
                        return;
                        break;
                }
                    alert(result);
   }

}