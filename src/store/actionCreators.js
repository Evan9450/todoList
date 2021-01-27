import { ADD_ITME, CHANGE_INPUT_VALUE, DELETE_ITEM } from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
});

export const addItemAction = () => ({
    type: ADD_ITME,
});

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index,
});
