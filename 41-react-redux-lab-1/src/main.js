import React from 'react';
import ReactDOM from 'react-dom';
// npm install --save-dev react-redux
import { Provider } from 'react-redux';
import Header from './header';
import Banner from './banner';
import Messages from './messages';
import store from './redux/store';
import './main.css';
import NewMessage from './addMessage';

const App = (props) => (
  <Provider store={store}>
   <div>
     <Header />
     <Banner />
     <NewMessage />
     <Messages />
   </div>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
