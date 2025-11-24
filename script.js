let botaoQuestionario = document.getElementById('botaoQuestionario')

let quadranteSelect = document.getElementById('quadranteSelect')
let novoItem = document.getElementById('item')

let quadrante1 = document.querySelector('#quadrante1 ul')
let quadrante2 = document.querySelector('#quadrante2 ul')
let quadrante3 = document.querySelector('#quadrante3 ul')
let quadrante4 = document.querySelector('#quadrante4 ul')

let listaSalva = localStorage.getItem('listaChave')
let lista = listaSalva ? JSON.parse(listaSalva) : []

lista.forEach(atividade => {
    let item = document.createElement('li')
    item.classList.add('item')

    let texto = document.createElement('p')
    texto.innerHTML = atividade.nome
    item.appendChild(texto)

    let quadrante

    if (atividade.quadrante == 1){
        quadrante = quadrante1
    } else if (atividade.quadrante == 2) {
        quadrante = quadrante2
    } else if (atividade.quadrante == 3) {
        quadrante = quadrante3
    } else if (atividade.quadrante == 4){
        quadrante = quadrante4
    }

    quadrante.appendChild(item)

    let image = document.createElement('img')
    item.appendChild(image)
    image.src = "./img/close-svgrepo-com.svg"
    image.classList.add('removeItem')
});

localStorage.clear()

botaoQuestionario.addEventListener('click', () => {
    let atividade = {
        nome: novoItem.value,
        quadrante: quadranteSelect.value
    }

    lista.push(atividade)

    if (novoItem.value == '') {
        alert('Coloque um nome')

    } else {
        let item = document.createElement('li')
        item.classList.add('item')

        let texto = document.createElement('p')
        texto.innerHTML = atividade.nome
        item.appendChild(texto)

        let quadrante

        if (atividade.quadrante == 1){
            quadrante = quadrante1
        } else if (atividade.quadrante == 2) {
            quadrante = quadrante2
        } else if (atividade.quadrante == 3) {
            quadrante = quadrante3
        } else if (atividade.quadrante == 4){
            quadrante = quadrante4
        }

        quadrante.appendChild(item)

        let image = document.createElement('img')
        item.appendChild(image)
        image.src = "./img/close-svgrepo-com.svg"
        image.classList.add('removeItem')
    }

    novoItem.value = ''

    localStorage.clear()
    localStorage.setItem("listaChave", JSON.stringify(lista));
})

quadrante1.addEventListener('click', (event) => {
    if (event.target.classList.contains("removeItem")){
        let item = event.target.parentElement
        let quadrante = item.parentElement
        let texto = item.querySelector('p').textContent

        quadrante.removeChild(item)

        lista.forEach(atividade => {
            if (atividade.nome == texto){
                let itemRemove = lista.indexOf(atividade)
                lista.splice(itemRemove, 1)

                localStorage.clear()
                localStorage.setItem("listaChave", JSON.stringify(lista));
            }
        })
    }
});

quadrante2.addEventListener('click', (event) => {
    if (event.target.classList.contains("removeItem")){
        let item = event.target.parentElement
        let quadrante = item.parentElement
        let texto = item.querySelector('p').textContent

        quadrante.removeChild(item)

        lista.forEach(atividade => {
            if (atividade.nome == texto){
                let itemRemove = lista.indexOf(atividade)
                lista.splice(itemRemove, 1)

                localStorage.clear()
                localStorage.setItem("listaChave", JSON.stringify(lista));
            }
        })
    }
});

quadrante3.addEventListener('click', (event) => {
    if (event.target.classList.contains("removeItem")){
        let item = event.target.parentElement
        let quadrante = item.parentElement
        let texto = item.querySelector('p').textContent

        quadrante.removeChild(item)

        lista.forEach(atividade => {
            if (atividade.nome == texto){
                let itemRemove = lista.indexOf(atividade)
                lista.splice(itemRemove, 1)

                localStorage.clear()
                localStorage.setItem("listaChave", JSON.stringify(lista));
            }
        })
    }
});

quadrante4.addEventListener('click', (event) => {
    if (event.target.classList.contains("removeItem")){
        let item = event.target.parentElement
        let quadrante = item.parentElement
        let texto = item.querySelector('p').textContent

        quadrante.removeChild(item)

        lista.forEach(atividade => {
            if (atividade.nome == texto){
                let itemRemove = lista.indexOf(atividade)
                lista.splice(itemRemove, 1)

                localStorage.clear()
                localStorage.setItem("listaChave", JSON.stringify(lista));
            }
        })
    }
});