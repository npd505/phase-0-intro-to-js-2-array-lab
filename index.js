const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push('Ralph')
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats
}

function removeLastCat() {
    const newCats = cats.slice(0, cats.length -1);
    return newCats
}

function removeFirstCat() {
    return cats.slice(1)
}