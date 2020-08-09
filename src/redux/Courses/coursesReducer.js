import produce from "immer";
import {ADD_COURSE_BEGIN, ADD_COURSE_SUCCESS, ADD_COURSE_ERROR} from "./coursesActions";
const initialState = {
    courses: []
};

export const coursesReducer = produce((draft, action) => {
    switch (action.type) {
        case ADD_COURSE_SUCCESS:
            draft.courses.push(action.payload);
            return;
        default:
            return
    }
}, initialState);