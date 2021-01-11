/*  EXAMPLE I
    Instruction:
        Stwórz 2 obiekty produktów prod1 i prod2,
    gdzie każdy z nich będzie miał właściwości: name, price, weight.

    Solution:
        Produkt numer jeden to: ...
        Produkt numer dwa to: ...
        Produkty kosztują razem: ...
        Produkty ważą razem: ...
*/

const prod1 = {
    name: "Cola",
    price: 12,
    weight: 2
}
const prod2 = {
    name: "Pepsi",
    price: 9.4,
    weight: 1.6
}

// Solution:
console.log(`Produkt numer jeden to: ${prod1.name}`);
console.log(`Produkt numer dwa to: ${prod2.name}`);
console.log(`Produkty kosztują razem: ${prod1.price + prod2.price}`);
console.log(`Produkty ważą razem: ${prod1.weight + prod2.weight}`);

/*  EXAMPLE I
    Instruction:
        Stwórz obiekt currentUser. Obiekt niech ma właściwości: name, surname,
        email, www, userType,
        oraz metodę show(), która wypisze wszystkie te właściwości w 
        konsoli.

    Solution:
        console.log("Imię: ", ....);
        console.log("Nazwisko: ", ....);
*/

const currentUser = {
    name: "Użytkownik123",
    surname: "123Użytkownika",
    email: "uzytkownik@cos.com",
    www: "https://uzytkowik123.com",
    userType: "Pro",
    show () {
        console.log(`Imie: ${this.name} \nNazwisko: ${this.surname}`)
    }
}

currentUser.show();