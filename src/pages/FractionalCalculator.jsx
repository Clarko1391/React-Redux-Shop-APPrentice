import React, { useState } from 'react'
import { fraction, number, floor, round } from 'mathjs'
import styled from 'styled-components'
import img from '../assets/img/right.png'
import CalculatorInput from './pageComponents/CalculatorInput'
import CalculatorSelect from './pageComponents/CalculatorSelect'
import CalculatorOutput from './pageComponents/CalculatorOutput'
import CalculatorButton from './pageComponents/CalculatorButton'


// CSS
const CalculatorContainer = styled.div`
    min-height: 85vh;
    width: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const InputContainer = styled.div`
    min-height: 42.5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const OutputContainer = styled.div`
    min-height: 42.5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

function FractionalCalculator() {

    // State
    const [calcInput1, setCalcInput1] = useState(false);
    const [calcInput2, setCalcInput2] = useState(false);
    const [calcUnitSelect, setCalcUnitSelect] = useState('+');
    const [decResult, setDecResult] = useState('dec');
    const [fracResult, setFracResult] = useState('frac');

    // Functions
    const calculate = () => {
        let input1, input2, result;

        // Define Validation function
        const calcValidation = () => {
            let calc1Validate = calcInput1.split("");
            let calc2Validate = calcInput2.split("");
            // Convert calculator input 1 to useable value
            if (calc1Validate.includes('/')) {
                input1 = fraction(calcInput1);
                input1 = number(input1)
            } else {
                input1 = number(calcInput1);
            }
    
            // convert calculator input 2 to useable value
            if (calc2Validate.includes('/')) {
                input2 = fraction(calcInput2);
                input2 = number(input2)
            } else {
                input2 = number(calcInput2);
            }
        }

        // Define fractional display function
        const calcFracConvert = calcResult => {
            let calcDecimal = calcResult - floor(calcResult);
            let calcWhole = floor(calcResult);
            let calcNumerator = round(calcDecimal * 16);
            let calcFractionWrite = '';
                // Check for LCD and convert to mixed number in template literal
            if (calcNumerator === 16) {
                calcFractionWrite = '';
            } else if (calcNumerator > 0 && calcNumerator % 8 === 0) {
                calcFractionWrite = '1/2';
            } else if (calcNumerator > 0 && calcNumerator % 4 === 0) {
                calcFractionWrite = `${calcNumerator / 4}/4`;
            } else if (calcNumerator > 0 && calcNumerator % 2 === 0) {
                calcFractionWrite = `${calcNumerator / 2}/8`;
            } else if (calcNumerator > 0) {
                calcFractionWrite = `${calcNumerator}/16`;
            } else calcFractionWrite = '';
                // Write as mixed number if calcResult > 1 or fraction if calcResult < 1
            if (calcWhole > 0) {
                setFracResult(`${calcWhole} ${calcFractionWrite}`);
            } else {
                setFracResult(`${calcFractionWrite}`);
            }
        }

        // Actual calculation function starts here
        if (calcInput1 && calcInput2) {
            calcValidation();
            switch (calcUnitSelect) {
                case "+":
                    result = number(input1 + input2);
                    setDecResult(result);
                    calcFracConvert(result);
                    break;
                case "-":
                    result = number(input1 - input2);
                    setDecResult(result);
                    calcFracConvert(result);
                    break;
                case "x":
                    result = number(input1 * input2);
                    setDecResult(result);
                    calcFracConvert(result);
                    break;
                case "%":
                    result = number(input1 / input2);
                    setDecResult(result);
                    calcFracConvert(result);
                    break;
                default:
                    break;
            }
        } else {
            alert('Please enter a valid number in each input');
        }     
    } 

    return (
        <CalculatorContainer>
            <InputContainer>
                <CalculatorInput 
                    updateValue={(e) => {setCalcInput1(e)}}
                />
                <CalculatorSelect 
                    updateUnit={(e) => setCalcUnitSelect(e)}
                />
                <CalculatorInput 
                    updateValue={(e) => {setCalcInput2(e)}}
                />
                <CalculatorButton 
                    calculate={calculate}
                />
            </InputContainer>
            <OutputContainer>
                <CalculatorOutput 
                    decResult={decResult}
                    fracResult={fracResult}
                />
            </OutputContainer>
        </CalculatorContainer>
    )
}

export default FractionalCalculator
