//CONFIGS

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom' // ROUTES
import { useEffect, useState } from 'react' //hooks

//DATABASE
import Dados from '../../api/api';

//COMPONENTS
import Header from './../header/index'
import App from './../App/App'
import Form from './../form/Form'
import List from './../list/list'

const Router = () => {
    const [Api, SetApi] = useState([])


    useEffect(() => {

        Dados.get('dados').then((response) => {
            SetApi(response.data)
        })

    }, [])

    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/form' element={<Form />} />
                    <Route path='/list' element={<List Api={Api} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;