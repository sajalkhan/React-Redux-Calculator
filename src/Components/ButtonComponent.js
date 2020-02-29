import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './CalculatorComponent-style.css';
import { AddNumber, SubNumber, MultNumber, DivNumber, ClearNumber, Calculate, Keypress } from '../Actions';

const ButtonComponent = props => {
    return (
        <Fragment>
            <tr>
                <td><input type="button" name="one" value="1" onClick={() => props.Keypress('1')} /></td>
                <td><input type="button" name="two" value="2" onClick={() => props.Keypress('2')} /></td>
                <td><input type="button" name="three" value="3" onClick={() => props.Keypress('3')} /></td>
                <td><input type="button" className="operator" name="plus" value="+" onClick={() => props.AddNumber()} /></td>
            </tr>
            <tr>
                <td><input type="button" name="four" value="4" onClick={() => props.Keypress('4')} /></td>
                <td><input type="button" name="five" value="5" onClick={() => props.Keypress('5')} /></td>
                <td><input type="button" name="six" value="6" onClick={() => props.Keypress('6')} /></td>
                <td><input type="button" className="operator" name="minus" value="-" onClick={() => props.SubNumber()} /></td>
            </tr>
            <tr>
                <td><input type="button" name="seven" value="7" onClick={() => props.Keypress('7')} /></td>
                <td><input type="button" name="eight" value="8" onClick={() => props.Keypress('8')} /></td>
                <td><input type="button" name="nine" value="9" onClick={() => props.Keypress('9')} /></td>
                <td><input type="button" className="operator" name="times" value="x" onClick={() => props.MultNumber()} /></td>
            </tr>
            <tr>
                <td><input type="button" id="clear" name="clear" value="c" onClick={() => props.ClearNumber()} /></td>
                <td><input type="button" name="zero" value="0" onClick={() => props.Keypress('0')} /></td>
                <td><input type="button" name="doit" value="=" onClick={() => props.Calculate()} /></td>
                <td><input type="button" className="operator" name="div" value="/" onClick={() => props.DivNumber()} /></td>

            </tr>
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        expression: state.expression
    }
}

export default connect(mapStateToProps, { AddNumber, SubNumber, MultNumber, DivNumber, ClearNumber, Calculate, Keypress })(ButtonComponent);