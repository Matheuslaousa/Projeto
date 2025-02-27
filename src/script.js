function calcularIdade() {
    let anoNascimento = document.getElementById("anoNascimento").value;

    // Obter o ano atual
    let anoAtual = new Date().getFullYear();

    // Cálculo da idade
    let idade = anoAtual - anoNascimento;

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = `Idade é : ${idade}`;
}

