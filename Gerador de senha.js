const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite o tamanho da sua senha:\n', (input) => {
    let tamanho = parseInt(input);
    let senha = '';

    for (let i = 0; i < tamanho; i++) {
        let aleatorio = Math.floor(Math.random() * alfabeto.length);

        senha += alfabeto[aleatorio];
    }
    console.log(`Sua senha é:\n${senha}`);
    rl.close();
});
