import { expect, test } from "vitest";
import { getBmi, getBmiCategory } from "../src/utils.js";

test('peso 70 y altura 170', ()=>{
    const value = getBmi(70, 170)
    expect(value).toBeCloseTo(24.22, 2)
})
test('bmi normal', ()=>{
    const value = getBmiCategory(24.5)
    expect(value).toBe('24.5 (Normal)')
})
test('bmi no numerico', ()=>{
    const value = getBmiCategory('hola')
    expect(value).toBe(NaN)
})