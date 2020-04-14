
export  function convert(input, conversionFactor){
    if (input !== ""){
        input = parseFloat(input);
        return Math.round(input*conversionFactor*100)/100;
    }
    return 0;
}