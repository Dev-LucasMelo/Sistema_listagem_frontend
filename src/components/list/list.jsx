/* eslint-disable eqeqeq */
import React from 'react';
import { FcBusinesswoman } from 'react-icons/fc'
import { FcManager } from 'react-icons/fc'
import { AiOutlineLoading } from 'react-icons/ai'
import './list.css'

const List = ({ Api }) => {

    function age_users(date) {
        //datas 

        //atual
       const data_atual = new Date()

       var mes_atual = data_atual.getMonth() + 1
       var ano_atual = data_atual.getFullYear()    

       //usuario
       const data_nasc_user = new Date(date)

       var mes_nasc_user = data_nasc_user.getMonth() + 1
       var ano_nasc_user = data_nasc_user.getFullYear()

       //validacao

       var age =  ano_atual - ano_nasc_user

       console.log(mes_atual,mes_nasc_user)
        
        if (mes_atual >= mes_nasc_user) {
            return age
        } else {
            return age - 1
        }
        
       
    }

  




    function validacao_bancodedados() {
        if (Api == '') {
            return (
                <>
                    <div className='load' > <h1>Aguardando dados do banco de dados<AiOutlineLoading className='icon-load' /> </h1> <p>Recarregue a página ou volte mais tarde</p> </div>
                </>
            )

        } else {
            return Api.map((Dados, key) => (
                <div className='profile-container' key={key} >

                    <div className='profile'>

                        <div className='gender-container'>
                            {Dados.sex == "M" ? <FcManager className='gender-icon' /> : <FcBusinesswoman className='gender-icon' />}
                        </div>

                        <div className='dados'>
                            <span>{Dados.name}</span>
                            <span>{`${age_users(Dados.age)} Anos`}</span>
                        </div>

                    </div>

                    <div className='about'>
                        <div className='about-text' >{Dados.about}</div>
                    </div>

                </div>
            ))
        }
    }

    return (
        <div>

            <div className='list-component'>
                {
                    validacao_bancodedados()

                }

            </div>

            <div className='list-button-container'>
                <a className='list-voltar' href="/">Voltar</a>
            </div>

        </div>

    );
}

export default List;