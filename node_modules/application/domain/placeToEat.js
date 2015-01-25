"use strict";

// @param {object} _state - live _state see README for how to use.
export default function placeToEat(_state) {
    _state.datesSelected = _state.datesSelected || [];

    let select = (date) => {
        _state.datesSelected.push(date);
    };

    return {
        select,

        get id() {
            return _state.id;
        },
        get name() {
            return _state.name;
        },
        get cuisine() {
            return _state.cuisine;
        },
        get numOfTimesSelected() {
            return _state.datesSelected.length;
        }
    };
}
