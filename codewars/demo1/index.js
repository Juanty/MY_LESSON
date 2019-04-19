function generateHashtag(str){
    // if(str.length > 140){
    //     return false;
    // }
    // if(str == ''){
    //     return false;
    // }
    // str = '#' + str;
    // return str;
    return (str.length > 140 || str === '') 
    ? false : '#' + str.split(' ').map(capitalize).join(' ');
}
function capitalize(w){
    // console.log(w);
    return w.charAt(0).toUpperCase() + w.slice(1);
}
console.log(generateHashtag('How are you'));
console.log(generateHashtag(' '));
console.log(generateHashtag('How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you How are you '));



function generateHashtag(str){
    if(str===""||str===null){
        return false;
    }
    var str1 = str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()).replace(/ /g,'');
    return str1.length>139 || str1 === "" ? false : "#" +  str1;
}
console.log(generateHashtag("a".repeat(140)));