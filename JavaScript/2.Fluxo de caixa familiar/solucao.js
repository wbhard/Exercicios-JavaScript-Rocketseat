let familiar = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00]
}
function sum(array){
 let res = 0
    for(let receita of array){
        res = res + receita 
   }
    return res;
}

function rendaFam(){
    const calculoReceitas = sum(familiar.receitas)
    const calculoDespesas = sum(familiar.despesas)
    const total = calculoReceitas – calculoDespesas

    const itsOk = total >=0
    let text = "negativo"

       if(itsOk){
          text = "Positivo"
   }
console.log(`Seu saldo é ${text}: ${total.toFixed(2)}`)
}
rendaFam()
