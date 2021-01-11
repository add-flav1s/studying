//---- OBJETOS ----//

let dadosColega = {
  nome: 'João Cristiano',
  idade: 27,
  cidade: 'São Paulo',
};

console.log(dadosColega);
console.log(dadosColega.nome);


//---- OBJETOS COM ARRAYS ----//

let filmePreferido = {
  nome: 'Your Name',
  ano: 2017,
  diretor: 'Makoto Shinkai',
  elenco: ['Ryûnosuke Kamiki', 'Mone Kamishiraishi', 'Masami Nagasawa'],
};
//exibindo o objeto//
console.log(filmePreferido);
//exibindo o indice do array//
console.log(filmePreferido.elenco[2]);
//adicionando uma string no array//
console.log(filmePreferido.elenco.push('Hitoha Miyamizu'));
//exibindo apenas o array//
console.log(filmePreferido.elenco);
