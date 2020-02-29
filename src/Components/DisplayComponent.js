import React from 'react';
import { connect } from 'react-redux';
import './CalculatorComponent-style.css';

const Displaycomponent = props => {
    return (
            <tr>
                <td colSpan="4">
                    <input type="text" name="display" id="display" value={props.expression} disabled />
                </td>
            </tr>
    );
}

function mapStateToProps(state) {
    return {
        expression: state.expression
    }
}

export default connect(mapStateToProps)(Displaycomponent);