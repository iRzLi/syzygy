import * as React from 'react'
import * as ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import * as SessionUtil from './util/session_api_util';

declare global {
    interface Window {
        SessionUtil: any,
        currentUser: any,
        store: any,
    }
}

window.SessionUtil = SessionUtil;

document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('syzygy_root');
    let store = null;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;

    ReactDOM.render(<Root store={store} />, root);
});