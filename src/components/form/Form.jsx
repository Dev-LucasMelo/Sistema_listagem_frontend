import React from 'react';
import './Form.css'
import { FaWpforms } from 'react-icons/fa'
import { IoMdFemale } from 'react-icons/io'
import { IoMdMale } from 'react-icons/io'
const Form = () => {
    return (
        <div className='Form-component'>
            <div className='icon-container' >
                <FaWpforms className='icon-form' />
            </div>
            <div>
                <form className='form-container' action='http://localhost:4000/finalizado' method='post' >
                    <p><input required type="text" name='name' className='name' placeholder='Informe seu nome' /></p>


                    <div className='sex-options' >
                        <div><input type="radio" name="sex" id="masc" value='M' checked /> <label htmlFor="masc"> Masc <IoMdMale className='sex-icon' /></label>  </div>
                        <div><input type="radio" name="sex" id="fem" value='F' /> <label htmlFor="fem"> Fem <IoMdFemale className='sex-icon' /> </label>  </div>
                    </div>

                    <p></p> <textarea required name='about' className='textarea' cols="30" rows="5" placeholder='Faça um pequeno resumo sobre você'></textarea>
                    <p>Data de nasc <input required type="date" name="age" id=""/></p>

                    <div className='buttons-container'>
                        <a href="/" className='voltar'>Voltar</a>
                        <input type="submit" className='enviar' value={'Enviar'} />
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Form;