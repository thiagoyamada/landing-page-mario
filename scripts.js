let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")


function cliqueiNoBotao() {
    formulario.style.left = "570px"
    mascara.style.visibility = "visible"
}

function sumirFormulario () {
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}