import React from 'react';
import './CalculatorComponent-style.css';
import ButtonComponent from '../Components/ButtonComponent';
import DisplayComponent from '../Components/DisplayComponent';

const CountComponent = () => {
    return (
        <form name="calculator">
            <table>
                <tbody>
                    <DisplayComponent/>
                    <ButtonComponent/>
                </tbody>
            </table>
        </form>
    );
}

export default CountComponent;