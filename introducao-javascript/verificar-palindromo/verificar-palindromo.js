let palavra = "raiar";
let verificarPalindromo = (string) => {
    if (!string) return "string enexistente";
    return string.split("").reverse().join("") === string;

}

//verificarPalindromo(palavra);

let verificarValor = (array) => {
    if (array == undefined) {
        return -1;
    } else {
        let novaArray = [];
        for (let i = 0; i < array.length; i++) {
            novaArray.push(array[i]);
            if (array[i] % 2 == 0) {
                novaArray[i] = 0;
            }
            return novaArray
        }
    }

}
console.log(verificarValor([1, 3, 4, 6, 80, 33, 23, 90]));