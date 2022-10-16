// const abas = document.querySelectorAll(".aba");
// abas.forEach(aba => {
//     aba.addEventListener("click", function () {

//         if (aba.classList.contains("selecionado")) {
//             return;
//         } else {
//             const abaSelecionada = document.querySelector(".aba.selecionado");
//             abaSelecionada.classList.remove("selecionado");

//             aba.classList.add("selecionado");

//             const infoSelecionada = document.querySelector(".info.selecionado");
//             infoSelecionada.classList.remove("selecionado");

//             const idDoElementoDeInfoDaAba = `info-${aba.id}`;

//             const infoASermostrada = document.getElementById(idDoElementoDeInfoDaAba);
//             infoASermostrada.classList.add("selecionado");
//         }
//     });
// });

const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        } else {

            selecionarAba(aba);

            mostrarInfoDaAba(aba);
        }
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}

function mostrarInfoDaAba(aba) {
    const infoSelecionada = document.querySelector(".info.selecionado");
    infoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInfoDaAba = `info-${aba.id}`;

    const infoASermostrada = document.getElementById(idDoElementoDeInfoDaAba);
    infoASermostrada.classList.add("selecionado");
}