const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'text.txt')

const output = fs.createWriteStream(fileName);

const { stdin, stdout } = process;
stdout.write('\n*** Вывод в консоль приветственного сообщения\r\nДля выхода напишите exit\n');
let resText = '';
stdin.on('data', data => {
    let curText = data.toString();
    if (curText.toUpperCase() === 'EXIT\r\n') {
        process.exit();
    } else {
        resText += curText;
        output.write(curText);
    }

});

process.on('SIGINT', () => {
    process.exit();
});
process.on('exit', () => {
    stdout.write('\n*** Асинхронная запись файла завершена\r\nРеализация прощального сообщения при остановке процесса\r\n')
});