function criarListaProdutos (itens){
    let id = 1
    let secaoVitrine = document.createElement('section')
    secaoVitrine.className = 'vitrine'
    for(let i = 0 ; i < itens.length; i ++){
        let divCard = document.createElement('div')
        divCard.className = 'card'
        let divImgProdutos = document.createElement('div')
        divImgProdutos.className = 'imgProdutos'
        let adicionarImg = document.createElement('img')
        adicionarImg.src = data[i].img
        adicionarImg.alt = data[i].nameItem
        let pCategoria = document.createElement('p')
        pCategoria.className = 'categoria'
        pCategoria.innerText = data[i].tag
        let pTitulo = document.createElement('p')
        pTitulo.className = 'titulo'
        pTitulo.innerText = data[i].nameItem
        let pDescricao = document.createElement('p')
        pDescricao.className = 'descricao'
        pDescricao.innerText = data[i].description
        let pValor = document.createElement('p')
        pValor.className = 'valor'
        pValor.innerText = `R$ ${data[i].value},00`
        let buttonAddCarrinho = document.createElement('button')
        buttonAddCarrinho.className = 'buttonAddCarrinho'
        buttonAddCarrinho.innerText = data[i].addCart
        buttonAddCarrinho.id = id
        id ++
    
        let capturarMain = document.querySelector('main')
        capturarMain.appendChild(secaoVitrine)
        secaoVitrine.appendChild(divCard)
        divCard.appendChild(divImgProdutos)
        divImgProdutos.appendChild(adicionarImg)
        divCard.appendChild(pCategoria)
        divCard.appendChild(pTitulo)
        divCard.appendChild(pDescricao)
        divCard.appendChild(pValor)
        divCard.appendChild(buttonAddCarrinho)
    }
}
criarListaProdutos(data)

function criarAside(){
    let inputPesquisa = document.createElement('input')
    inputPesquisa.type = 'text'
    inputPesquisa.className = 'pesquisa'
    inputPesquisa.placeholder = 'Digite aqui sua pesquisa'
    inputPesquisa.innerText = ''
    let criarButtonPesquisar = document.createElement('button')
    criarButtonPesquisar.className = 'butaoPesquisar'
    criarButtonPesquisar.innerText = 'Pesquisar'
    let divCarrinho = document.createElement('div')
    divCarrinho.className = 'carrinhoDeCompras'
    let pCarrinho = document.createElement('p')
    pCarrinho.className = 'pCarrinho'
    pCarrinho.innerText = 'Carrinho De Compras'
    let ulList = document.createElement('ul')
    ulList.className = 'itensCarrinho'

    let selecionarAside = document.querySelector('aside')
    selecionarAside.appendChild(inputPesquisa)
    selecionarAside.appendChild(criarButtonPesquisar)
    selecionarAside.appendChild(divCarrinho)
    divCarrinho.appendChild(pCarrinho)
    divCarrinho.appendChild(ulList)
    

}
criarAside()


let quantidadeItens = 0
let soma = 0
let buttonAddCar = document.querySelectorAll('.buttonAddCarrinho')

for (let i = 0; i < buttonAddCar.length; i ++){
    buttonAddCar[i].addEventListener('click', function(e){
        let recuperarID = parseInt(e.target.id) 
        let item = procurarItem(recuperarID)
        let criarLi =  document.createElement('li')
        criarLi.className = 'ProdutoNoCarrinho'
        let crirDivLi = document.createElement('div')
        crirDivLi.className = 'imagemNoCarrinho'
        let criarImgDiv = document.createElement('img')
        criarImgDiv.src = item.img
        criarImgDiv.alt = item.nameItem
        let div2 = document.createElement('div')
        let pNomeCarrinho = document.createElement('p')
        pNomeCarrinho.className = 'nomeitenCarrinho'
        pNomeCarrinho.innerText = item.nameItem
        let pPrecoCarrinho = document.createElement('p')
        pPrecoCarrinho.className = 'precoItenCarrinho'
        pPrecoCarrinho.innerText = `R$ ${item.value},00`
        let buttonRemove = document.createElement('button')
        buttonRemove.className = 'removerIten'
        buttonRemove.innerText = 'Remover Item'
        buttonRemove.addEventListener('click', function(e){
            let li = criarLi
            li.remove()
            pQuantidadeNumero.innerText = quantidadeItens -= 1
            pTotalValor.innerText = soma -= data[i].value
        })
        
        
        

        let selectUl = document.querySelector('.itensCarrinho')
        selectUl.appendChild(criarLi)
        criarLi.appendChild(crirDivLi)
        crirDivLi.appendChild(criarImgDiv)
        criarLi.appendChild(div2)
        div2.appendChild(pNomeCarrinho)
        div2.appendChild(pPrecoCarrinho)
        div2.appendChild(buttonRemove)

        quantidadeItens ++
    })
    
}

function procurarItem (id){
    for (let i = 0 ; i < data.length; i ++){
        if (data[i].id == id){
            return data[i]
        }
    }
}
procurarItem()


function criarFinalizacao(){
    let sectionFinalizacao = document.createElement('section')
    sectionFinalizacao.className = 'finalizarCompra'
    let divQuantidade = document.createElement('div')
    divQuantidade.className = 'quantidade'
    let pQuantidade = document.createElement('p')
    pQuantidade.innerText = 'Quantidade'
    
    pQuantidadeNumero.innerText = quantidadeItens
    let divTotal = document.createElement('div')
    divTotal.className = 'totalValor'
    let pTotal = document.createElement('p')
    pTotal.innerText = 'TOTAL'

    
    for (let i = 0; i < data.length; i ++){
        
            buttonAddCar[i].addEventListener('click', function(e){
            quantidadeItens ++
            quantidadeItens --
            soma += data[i].value
            pTotalValor.innerText = `R$ ${soma},00`
            pQuantidadeNumero.innerText = quantidadeItens
        })
        
    }
    let selecionarAside = document.querySelector('aside')
    let buttonFinalizar = document.createElement('button')
    buttonFinalizar.className = 'buttonFinalizarCompra'
    buttonFinalizar.innerText = 'Comprar'
    buttonFinalizar.addEventListener('click', function(e){
        let selectContainer = document.querySelector('.containerMax')
        selectContainer.remove()

        let form = document.createElement('form')
        form.className = 'formulario'
        let h2 = document.createElement('h2')
        h2.className = 'fCompra'
        h2.innerText = 'Finalizar Compra'
        let label1 = document.createElement('label')
        label1.innerText = 'Digite seu Nome Completo'
        let input1 = document.createElement('input')
        input1.className = 'inputForm'
        input1.type =  'text'
        input1.placeholder = 'Seu nome aqui'
        input1.required = 'true'
        let label2 = document.createElement('label')
        label2.innerText = 'Email'
        let input2 = document.createElement('input')
        input2.className = 'inputForm'
        input2.type =  'email'
        input2.placeholder = 'Digite seu Email'
        input2.required = 'true'
        let label3 = document.createElement('label')
        label3.innerText = 'Digite seu CPF'
        let input3 = document.createElement('input')
        input3.className = 'inputForm'
        input3.type =  'number'
        input3.placeholder = 'CPF'
        input3.required = 'true'
        let label4 = document.createElement('label')
        label4.innerText = 'Insira seu endereço'
        let input4 = document.createElement('input')
        input4.className = 'inputForm'
        input4.type =  'text'
        input4.placeholder = 'Endereço'
        input4.required = 'true'
        let label5 = document.createElement('label')
        label5.innerText = 'Escolha a forma de Pagamento'
        let selectList = document.createElement('select')
        let option1 = document.createElement('option')
        option1.innerText = '...'
        let option2 = document.createElement('option')
        option2.value = 'pix'
        option2.innerText = 'Pix'
        let option3 = document.createElement('option')
        option3.value = 'boleto'
        option3.innerText = 'Boleto'
        let option4 = document.createElement('option')
        option4.value = 'cartao'
        option4.innerText = 'Cartão de Crédito'
        let buttonFinal = document.createElement('button')
        buttonFinal.type = 'submit'
        buttonFinal.className = 'buttonFinal'
        buttonFinal.innerText = 'Finalizar Compra'
        buttonFinal.addEventListener('click', function(e){
            buttonFinal.innerText = 'Compra Realizada'
           
        })

        let selectBody = document.querySelector('body')
        selectBody.appendChild(form)
        form.appendChild(h2)
        form.appendChild(label1)
        form.appendChild(input1)
        form.appendChild(label2)
        form.appendChild(input2)
        form.appendChild(label3)
        form.appendChild(input3)
        form.appendChild(label4)
        form.appendChild(input4)
        form.appendChild(label5)
        form.appendChild(selectList)
        selectList.appendChild(option1)
        selectList.appendChild(option2)
        selectList.appendChild(option3)
        selectList.appendChild(option4)
        form.appendChild(buttonFinal)
    
        
    })
    let asideSelect = document.querySelector('aside')
    asideSelect.appendChild(sectionFinalizacao)
    sectionFinalizacao.appendChild(divQuantidade)
    divQuantidade.appendChild(pQuantidade)
    divQuantidade.appendChild(pQuantidadeNumero)
    sectionFinalizacao.appendChild(divTotal)
    divTotal.appendChild(pTotal)
    divTotal.appendChild(pTotalValor)
    selecionarAside.appendChild(buttonFinalizar)
    
}
let pTotalValor =  document.createElement('p')
let pQuantidadeNumero = document.createElement('p')
criarFinalizacao()

