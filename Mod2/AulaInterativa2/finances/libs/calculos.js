function somatorio(array){
    const sum = array.reduce((accumulator, currentValue)=> {
        return accumulator + currentValue;
    }, 0);
}

function media(array){

    const media = somatorio(array) / array.len;
    return media;
}

export default {media, somatorio}