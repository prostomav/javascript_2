/* Напишите функцию counter(), которая при каждом вызове возвращает число на единицу большее предыдушего  */
{
    /*
    function fn(i = 0) {
        return function () {
            return ++i;
        }
    }
    */
    const fn = (i = 0) => () => ++i;

    const counter = fn(0);

    console.log(counter()); //1
    console.log(counter()); //2
    console.log(counter()); //3
}