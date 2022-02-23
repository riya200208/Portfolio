import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Projects } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
    combineReducers({
        projects:Projects,  
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders,
        ...createForms({
            feedback: InitialFeedback
        })
    }),
    applyMiddleware(thunk, logger)
    );

    return store;
}