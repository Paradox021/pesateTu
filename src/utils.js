export function getBmi(weight, height){
    return (weight/(height**2)*10000)
}

export function getBmiCategory(bmi){
    if(isNaN(bmi)) return NaN
    if(bmi<18.5) return bmi + ' (Peso bajo)'
    if(bmi<25) return bmi + ' (Normal)'
    if(bmi<30) return bmi + ' (Sobrepeso)'
    return bmi + ' (Obesidad)'
}