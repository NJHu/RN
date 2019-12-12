import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import {Provider} from 'react-redux'

const App = (
    <Provider>
        <TodoList/>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));