//transformando o grau
function transformDegree(degree) {
    //verificando se existe C e F de cada grau
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro (caso não houver nenhum dos dois (F ou C))
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F -> C  ((lembrar que fahrenheit é apenas uma var da form)
    let updateDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo C -> F ((lembrar que celsius é apenas um var da form)
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }
    return formula(updateDegree) + degreeSign    
}
try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')    
}catch(error){
    console.log(error.message)
} 
