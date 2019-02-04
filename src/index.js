import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './scss/Papriika.scss';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAngleRight, faExternalLinkAlt, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faAngleUp, faAngleRight, faExternalLinkAlt, faLongArrowAltUp)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
