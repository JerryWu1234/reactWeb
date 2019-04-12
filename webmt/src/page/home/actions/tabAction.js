import {CHANGE_TAB} from "./actionTypes";

export const changetab = (obj) => {
    return {
        type: CHANGE_TAB,
        obj: obj
    }
}
