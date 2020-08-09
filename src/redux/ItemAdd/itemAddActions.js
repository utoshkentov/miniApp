export const ADD_ITEM = 'ADD_ITEM';

export const AddItem = (item) => {
    return{
        type: ADD_ITEM,
        payload: item
    }
};
