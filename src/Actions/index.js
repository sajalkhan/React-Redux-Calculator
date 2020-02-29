export const ADD_NUMBER  = "ADD_NUMBER";
export const SUB_NUMBER  = "SUB_NUMBER";
export const MULT_NUMBER = "MUL_NUMBER";
export const DIV_NUMBER  = "DIV_NUMBER";
export const CLEAR_ALL = "CLEAR_ALL";
export const CALCULATE = "CALCULATE";
export const KEYPRESS = "KEYPRESS";

export const AddNumber = () => {
    const action = {
        type: ADD_NUMBER
    }
    return action;
}

export const SubNumber = () => {
    const action = {
        type: SUB_NUMBER
    }
    return action;
}

export const MultNumber = () => {
    const action = {
        type: MULT_NUMBER
    }
    return action;
}
export const DivNumber = () => {
    const action = {
        type: DIV_NUMBER
    }
    return action;
}

export const ClearNumber = () => {
    const action = {
        type: CLEAR_ALL
    }
    return action;
}

export const Calculate = () => {
    const action = {
        type: CALCULATE
    }
    return action;
}
export const Keypress = (value)=>{
    const action = {
        type: KEYPRESS,
        value
    }
    return action;
}