import {ADD_NUMBER, SUB_NUMBER, MULT_NUMBER, DIV_NUMBER, CLEAR_ALL,CALCULATE,KEYPRESS} from '../Actions';

function reducer(state = {expression:'0'}, action)
{
    switch(action.type)
    {
        case KEYPRESS:
            var expression = ' ';
            expression = (state.expression === '0')? expression +  action.value : state.expression + action.value;
            return {expression};
        case ADD_NUMBER:
            expression = checkOperator(state.expression) + '+';
            return {expression};
        case SUB_NUMBER:
            expression = checkOperator(state.expression) + '-';
            return {expression};
        case MULT_NUMBER:
            expression = checkOperator(state.expression) + '*';
            return {expression};
        case DIV_NUMBER:
            expression = checkOperator(state.expression) + '/';
            return {expression};
        case CALCULATE:
            expression = calculateResult(state.expression);
            return {expression};
        case CLEAR_ALL:
            return {expression:'0'}
        default:
            return state;
    }
}

const checkOperator = (operator)=> {
    if(operator.slice(-1) === '+' || operator.slice(-1) === '-' || operator.slice(-1) === '*' || operator.slice(-1) === '/'){
        operator = operator.slice(0,-1); // remove last element 
    }
    return operator;
}

const calculateResult = (expression) => {

    let Digit = [];
    let number='';

    for(let i=0 ;i< expression.length; i++)
    {
        var x = expression[i];
        if(x === '+' || x === '-' || x === '*' || x === '/')
        {
            Digit.push(number*1);
            Digit.push(x);
            number='';
            continue;
        }
        number+=x;
    }
    Digit.push(number*1);
    
    let answer = Digit[0];
    for(let i=1; i<Digit.length; i+=2) {
        if(Digit[i]==='+') answer+=Digit[i+1];
        if(Digit[i]==='-') answer-=Digit[i+1];
        if(Digit[i]==='*') answer*=Digit[i+1];
        if(Digit[i]==='/') answer/=Digit[i+1];
    }
    let result = answer;
    result = Math.round(parseFloat((result * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
    return result.toString();
}

export default reducer;