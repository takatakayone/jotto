import { actionTypes } from "../actions";
import succssReducer from './successReducer';

test('returns default initial state of false when no action is passed', () => {
    const newState = succssReducer(undefined, {});
    expect(newState).toBe(false);
});

test('returns state of true upon receiving an action of type CORRECT_GUESS', () => {
    const newState = succssReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true)
});
