const botaoNavBar = document.querySelector("#botao-nav-bar");
const fechaPopUp = document.querySelector("#fecha-pop-up");
const popUp = document.querySelector("#pop-up");
const overlay = document.querySelector("#overlay");
const botaoCarrinho = document.querySelector("#botao-carrinho");
const carrinhoAberto = document.querySelector("#carrinho-aberto");
const overlayCarrinho = document.querySelector("#overlay-carrinho");
const botaoMais = document.querySelector("#botao-mais");
const botaoMenos = document.querySelector("#botao-menos");
const displayQuantidade = document.querySelector("#display-quant");
const botaoComprar = document.querySelector("#botao-comprar");
const conteudo = document.querySelector("#conteudo");
const carrinhoVazio = document.querySelector("#carrinho-vazio");
const notificaoQuantidade = document.querySelector("#notificao-quantidade");
const quantProdutosNoCarrinho = document.querySelector("#quant-produtos-no-carrinho");
const valorFinal = document.querySelector("#valor-final");
const botaoDelete = document.querySelector("#botao-delete");
const todosElementosProduto = document.querySelector("#produto-no-carrinho");
const finalizarCompra = document.querySelector("#finalizar-compra");
const imagemPrincipal = document.querySelector("#imagem-principal");
const imagensSecundarias = document.querySelectorAll(".imagensSecundarias");
const popUpCarrosselImagens = document.querySelector("#pop-up-carrossel-imagens");
const overlayImagens = document.querySelector("#overlay-imagens");
const btnClosePopUp = document.querySelector("#btn-close-pop-up");
const btnPrevious = document.querySelector("#btn-previous");
const btnNext = document.querySelector("#btn-next");
const imgPopUp = document.querySelector("#img-pop-up");
const primeiraImgPopUp = document.querySelector("#primeira-img-pop-up");
const segundaImgPopUp = document.querySelector("#segunda-img-pop-up");
const terceiraImgPopUp = document.querySelector("#terceira-img-pop-up");
const quartaImgPopUp = document.querySelector("#quarta-img-pop-up");
const previousResponsivo = document.querySelector("#previous-responsivo");
const nextResponsivo = document.querySelector("#next-responsivo");
const imgPrincipalResponsivo = document.querySelector("#img-principal-responsivo");

var quantProduto = 0
var quantProdutoCarrinho = 0

function abrirPopUp() {
    popUp.style.display = "flex";
    overlay.style.display = "block";
}

function fecharPopUp() {
    popUp.classList.remove("popUpAberto");
    popUp.classList.add("popUpFechado");
    setTimeout(function () {
        popUp.style.display = "none";
        overlay.style.display = "none";
    }, 400);
}

function abrirCarrinho() {
    carrinhoAberto.style.display = "flex";
    todosElementosProduto.style.display = "none";
}

function fecharCarrinho() {
    carrinhoAberto.style.display = "none";
}

function tirarSelecao() {
    imagensSecundarias.forEach((div) => {
        div.firstElementChild.classList.remove("imagemSelecionada");
    });
}

botaoNavBar.addEventListener("click", function () {
    abrirPopUp();
    popUp.classList.add("popUpAberto")
    popUp.classList.remove("popUpFechado")
});

fechaPopUp.addEventListener("click", fecharPopUp);

overlay.addEventListener("click", function (event) {
    if (event.target != popUp) {
        fecharPopUp();
    }
});

botaoCarrinho.addEventListener("click", function () {
    abrirCarrinho();
    overlayCarrinho.style.display = "block";
    if (quantProdutoCarrinho > 0) {
        carrinhoVazio.style.display = "none";
        todosElementosProduto.style.display = "flex";
        quantProdutosNoCarrinho.textContent = quantProdutoCarrinho
        valorFinal.textContent = " = $" + (125 * quantProdutoCarrinho).toFixed(2);
    }
});

overlayCarrinho.addEventListener("click", function (event) {
    const idCarrinho = event.target.id;
    if (idCarrinho != "overlay-carrinho") return;

    fecharCarrinho();
    overlayCarrinho.style.display = "none";
});

finalizarCompra.addEventListener("click", function (){
    window.open("https://github.com/CarlosEduardoDS", "_blank")
});

botaoMais.addEventListener("click", function () {
    quantProduto++;
    displayQuantidade.innerHTML = quantProduto;
});

botaoMenos.addEventListener("click", function () {
    if (quantProduto > 0) {
        quantProduto--;
        displayQuantidade.innerHTML = quantProduto;
    }
});

botaoComprar.addEventListener("click", function () {
    if (quantProduto > 0) {
        quantProdutoCarrinho += quantProduto;
        quantProduto = 0;
        displayQuantidade.innerHTML = quantProduto;
        notificaoQuantidade.style.display = "flex";
        notificaoQuantidade.innerHTML = quantProdutoCarrinho;
        fecharCarrinho()
    } else {
        alert("Selecione a quantidade do produto!");
    }
});

botaoDelete.addEventListener("click", function () {
    quantProdutoCarrinho = 0;
    notificaoQuantidade.innerHTML = quantProdutoCarrinho;
    notificaoQuantidade.style.display = "none";
    carrinhoVazio.style.display = "flex";
    todosElementosProduto.style.display = "none";
});

imagensSecundarias.forEach((img, index) => {
    img.firstElementChild.addEventListener("click", function (evento) {
        imagemPrincipal.src = `images/image-product-${index + 1}.jpg`;
        tirarSelecao();
        evento.target.classList.add("imagemSelecionada");
    });
});

imagemPrincipal.addEventListener("click", function () {
    popUpCarrosselImagens.style.display = "flex";
    overlayImagens.style.display = "block";
});

btnClosePopUp.addEventListener("click", function () {
    popUpCarrosselImagens.style.display = "none";
    overlayImagens.style.display = "none";
});

overlayImagens.addEventListener("click", function (event){
    const idOverlay = event.target.id;
    if (idOverlay != "overlay-imagens") return;

    popUpCarrosselImagens.style.display = "none";
    overlayImagens.style.display = "none";
});

btnNext.addEventListener("click", function () {
    switch (true) {
        case (imgPopUp.src.includes("image-product-1.jpg")):
            imgPopUp.src = "images/image-product-2.jpg"; 
            primeiraImgPopUp.classList.remove("imagemSelecionadaPopUp");
            segundaImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;

        case (imgPopUp.src.includes("image-product-2.jpg")):
            imgPopUp.src = "images/image-product-3.jpg"; 
            segundaImgPopUp.classList.remove("imagemSelecionadaPopUp");
            terceiraImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;

        case (imgPopUp.src.includes("image-product-3.jpg")):
            imgPopUp.src = "images/image-product-4.jpg"; 
            terceiraImgPopUp.classList.remove("imagemSelecionadaPopUp");
            quartaImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;

        case (imgPopUp.src.includes("image-product-4.jpg")):
            imgPopUp.src = "images/image-product-1.jpg"; 
            quartaImgPopUp.classList.remove("imagemSelecionadaPopUp");
            primeiraImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;
    }
});

btnPrevious.addEventListener("click", function () {
    switch (true) {
        case (imgPopUp.src.includes("image-product-1.jpg")):
            imgPopUp.src = "images/image-product-4.jpg"; 
            primeiraImgPopUp.classList.remove("imagemSelecionadaPopUp");
            quartaImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;

        case (imgPopUp.src.includes("image-product-2.jpg")):
            imgPopUp.src = "images/image-product-1.jpg"; 
            segundaImgPopUp.classList.remove("imagemSelecionadaPopUp");
            primeiraImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;

        case (imgPopUp.src.includes("image-product-3.jpg")):
            imgPopUp.src = "images/image-product-2.jpg"; 
            terceiraImgPopUp.classList.remove("imagemSelecionadaPopUp");
            segundaImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;

        case (imgPopUp.src.includes("image-product-4.jpg")):
            imgPopUp.src = "images/image-product-3.jpg"; 
            quartaImgPopUp.classList.remove("imagemSelecionadaPopUp");
            terceiraImgPopUp.classList.add("imagemSelecionadaPopUp");
            break;
    }
});

previousResponsivo.addEventListener("click", function (){
    switch (true){
        case(imgPrincipalResponsivo.src.includes("image-product-1.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-4.jpg";
        break;

        case(imgPrincipalResponsivo.src.includes("image-product-2.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-1.jpg";
        break;

        case(imgPrincipalResponsivo.src.includes("images/image-product-3.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-2.jpg";
        break;

        case(imgPrincipalResponsivo.src.includes("images/image-product-4.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-3.jpg";
        break;
    }
});

nextResponsivo.addEventListener("click", function (){
    switch (true){
        case(imgPrincipalResponsivo.src.includes("image-product-1.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-2.jpg";
        break;

        case(imgPrincipalResponsivo.src.includes("image-product-2.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-3.jpg";
        break;

        case(imgPrincipalResponsivo.src.includes("images/image-product-3.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-4.jpg";
        break;

        case(imgPrincipalResponsivo.src.includes("images/image-product-4.jpg")):
        imgPrincipalResponsivo.src = "images/image-product-1.jpg";
        break;
    }
});