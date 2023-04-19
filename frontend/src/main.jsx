import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
// import store from './config/redux/store';

import { createStore } from 'redux';

const initialState = {
  count : 0,
  age: 17,
  isLogin : false,
}
const rootReducer = (state =initialState,action) =>{
  switch(action.type){
    case "ADD":
      return {
        ...state,
        count : state.count + 1
      }
    case "CHANGE_VALUE":
      return {
        ...state,
        count : state.age + action.newValue
      }
      case "ISLOGIN" :
        return {
          ...state,
          isLogin : true
        }
  }
}
const reduxStore = createStore(rootReducer);

reduxStore.subscribe(()=>{
  console.log("Store Updated",reduxStore.getState())
})

reduxStore.dispatch({type:'ADD'})
reduxStore.dispatch({type:'CHANGE_VALUE',newValue: 12})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
)
