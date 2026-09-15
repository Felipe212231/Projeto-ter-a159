/*
    Esta função recebe o número do card
    que foi clicado.

    Exemplo:
    mostrarResposta(1)

    significa que queremos mostrar
    a resposta do primeiro card.
*/
function mostrarResposta(numero) {

    /*
        O document.getElementById()
        procura na página um elemento
        que tenha o ID informado.
    */
    const resposta = document.getElementById("resposta" + numero);


    /*
        Verificamos se a resposta está escondida.

        Se estiver escondida, mostramos.

        Se estiver aparecendo, escondemos novamente.
    */
    if (resposta.style.display === "none" || resposta.style.display === "") {

        resposta.style.display = "block";

    } else {

        resposta.style.display = "none";

    }
}
