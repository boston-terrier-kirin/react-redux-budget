import { combineReducers } from 'redux';
import { budgetReducer } from './budget/budget.reducer';

export const rootReducer = combineReducers({
  budget: budgetReducer,
});
