// Выбираем все элементы на странице, которые содержат текст
const elements = document.querySelectorAll('*:not(script):not(style):not(meta)');

//Получаем регулярное выражение из массива words
let myPhrase = `(rape)`;
words.forEach(word => {
    myPhrase +=`|(${word})`
});
// Проходимся по каждому элементу и заменяем необходимое в тексте его подчеркнутой версией
let regex = new RegExp(myPhrase, "gi");
elements.forEach(element => {
    element.innerHTML = element.innerHTML.replace(regex, '<span style="background-color: #f38181;text-decoration: underline dashed red;">$&</span>');
}); 