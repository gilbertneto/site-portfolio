function abreNav() {
    document.getElementById("navslide").style.height = "40%";
    document.getElementById("navslide").style.marginTop = "60px";
}

function fechaNav() {
    document.getElementById("navslide").style.height = "0";
}

function digitarLinha(elemento, texto, velocidade, aoTerminar) {
    let i = 0;
    elemento.textContent = '';

    (function digitarProximoCaractere() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(digitarProximoCaractere, velocidade);
        } else if (typeof aoTerminar === 'function') {
            aoTerminar();
        }
    })();
}

function iniciarDigitacao() {
    const linhas = document.querySelectorAll('.introcodigo .texto');
    const cursorFinal = document.querySelector('.cursor-final');

    const VELOCIDADE_DIGITACAO = 40; 
    const PAUSA_ENTRE_LINHAS = 80;  

    let indiceLinha = 0;

    function proximaLinha() {
        if (indiceLinha < linhas.length) {
            const elementoAtual = linhas[indiceLinha];
            const texto = elementoAtual.dataset.texto || '';

            digitarLinha(elementoAtual, texto, VELOCIDADE_DIGITACAO, () => {
                indiceLinha++;
                setTimeout(proximaLinha, PAUSA_ENTRE_LINHAS);
            });
        } else if (cursorFinal) {
            cursorFinal.classList.add('piscando');
        }
    }

    proximaLinha();
}

document.addEventListener('DOMContentLoaded', iniciarDigitacao);