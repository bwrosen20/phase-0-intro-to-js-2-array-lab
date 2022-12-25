let cats= ["Milo","Otis","Garfield"];

function destructivelyAppendCat(variable){
    cats.push(variable);
}

function destructivelyPrependCat(variable){
    cats.unshift(variable);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyofCats=[...cats,name];
    return copyofCats;
}
function prependCat(name){
    const newcopyofCats=[name,...cats];
    return newcopyofCats;
}
function removeLastCat(){
    const newercopyofCats=cats.slice(0,cats.length-1);
    return newercopyofCats;
}
function removeFirstCat(){
    const newestcopyofCats=cats.slice(1);
    return newestcopyofCats;
}