//classList
/* Retorna uma lista com as classs do elemento. Permite adicionar, remover e verififcar se contém */
const menu = document.querySelector(".menu");
menu.className; //string

menu.classList; //lista de classes

menu.classList.add("ativo"); //adicionou uma classe "ativo"

menu.classList.add("ativo", "mobile"); //adicionou duas classes

menu.classList.remove("ativo"); //removeu a class "ativo"

menu.classList.toggle("ativo"); //adiciona/ remove classe

menu.classList.replace("ativo", "inativo"); //substitui a classe

//Atributtes - retorna uma array-like com os atributos do elemento

const animais = document.querySelector(".animais");
animais.attributes; //retorna todos os atributos
console.log(animais);

animais.attributes[0]; //retorna o primeiro atributo
console.log(animais);

//getAttribute e setAttribute - métodos que retornam ou definem de acordo com a atributo selecionado

const img = document.querySelector("img");
img.getAttribute("src"); //retorna o valor do src
console.log(img);

const img1 = document.querySelector("img");
img1.setAttribute("alt", "Raposa em pé"); //muda o texto do alt
console.log(img1);

const alt = img.hasAttribute("alt"); //retorna true or false
console.log(alt);

//Read Only vc Writable
/* Existem propriedades que não permitem a mudança de seus valores, essas são consideradas Read Onlu, ou seja, somente leitura */

const animal = document.querySelector(".animais");
animal.className;
console.log(animal);

//adicionar a classe ativa a todos os itens do menu
const cores = document.querySelectorAll(".menu a");
cores.forEach((item) => {
  item.classList.add("ativo");
});

console.log(cores);

//remover a classe ativo de todos os itens do menu, manter apenas do primeiro
const remove = document.querySelectorAll("menu a");
remove.forEach((item) => {
  item.classList.remove("ativo");
});
console.log(remove)


//Verificar se as imagens possuem o atributo alt
const imagem2 = document.querySelectorAll("img")

imagem2.forEach((img) => {
  const alt = img.hasAttribute("alt")
  console.log(img. alt)
  console.log(alt)
})




