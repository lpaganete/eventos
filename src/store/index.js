import { createStore } from 'redux';
import ussuarioReducer from './ussuarioReducer';


const store = createStore(ussuarioReducer);

export default store;