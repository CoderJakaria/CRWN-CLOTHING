import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware  = [logger];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)) );

export const persistore = persistStore(store);


// export default {store, persistore};