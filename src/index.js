import React from "react";
import ReactDOM  from "react-dom";
import CounterApp from "./componentes/CounterApp"

import './scss/app.scss'

const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value = {10} />, divRoot)