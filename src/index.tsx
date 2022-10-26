import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/rootStore';
import './initFirebase';
import App from './components/App/App';
import {Toaster} from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render
(<React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <Toaster/>
            <App/>
        </Provider>
    </BrowserRouter>
</React.StrictMode>);
