import '../style.css'
import { getBmi, getBmiCategory } from './utils.js'

let weight = 80
let height
let bmi

document.getElementById('peso').addEventListener('input', updateWeight)
document.getElementById('estatura').addEventListener('input', updateHeight)

function updateWeight() {
  weight = parseInt(document.getElementById('peso').value)
  document.getElementById('value').innerHTML = weight + " kg"
  bmi = getBmi(weight, height).toFixed(1)
  document.getElementById('imc').innerHTML = bmi && getBmiCategory(bmi) ||'Estatura no válida';
}
function updateHeight() {
  height = parseInt(document.getElementById('estatura').value)
  bmi = getBmi(weight, height).toFixed(1)
  document.getElementById('imc').innerHTML = getBmiCategory(bmi) ||'Estatura no válida';
}
