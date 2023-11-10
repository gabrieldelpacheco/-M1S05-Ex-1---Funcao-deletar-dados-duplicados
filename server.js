
const names = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'José', 'Danilo'];

const namesLista = Array.from(new Set(nomes)); 
const nameDouble = names.filter((name, index) => names.indexOf(name) !== index); 

console.log('Nomes duplicados:', nameDouble);
console.log('Nomes lista:', namesLista);