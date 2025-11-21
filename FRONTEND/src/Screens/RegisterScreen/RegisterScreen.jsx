import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { register } from '../../services/authService'
import useFetch from '../../hooks/useFetch'
import './RegisterScreen.css'
import { useNavigate } from 'react-router'



const RegisterScreen = () => {
    const navigate = useNavigate()
    const REGISTER_FORM_FIELDS = {
        USERNAME: 'username',
        EMAIL: 'email',
        PASSWORD: 'password'
    }
    const initial_form_state = {
        [REGISTER_FORM_FIELDS.USERNAME]: '',
        [REGISTER_FORM_FIELDS.EMAIL]: '',
        [REGISTER_FORM_FIELDS.PASSWORD]: ''
    }
    const {response, error, loading, sendRequest} = useFetch()
    function onRegister (form_state_sent) {

        sendRequest(
            () => {
                return register(
                    form_state_sent[REGISTER_FORM_FIELDS.USERNAME], 
                    form_state_sent[REGISTER_FORM_FIELDS.EMAIL], 
                    form_state_sent[REGISTER_FORM_FIELDS.PASSWORD]
                )
            }
        )
    }

    const {
        form_state, 
        onInputChange, 
        handleSubmit, 
        resetForm
    } = useForm(
        initial_form_state, 
        onRegister
    )
    const goToLogin = () => {
        navigate('/login')
    }
    
    
  return (
    <div className='register-form-container'>
        <div className='register-form-content-container'>
            <img className='register-whatsapp-logo' src="/images/whatsapp-logo.png" alt="whatsapp-logo"></img>
            <h1 className='register-form-title'>Registrate</h1>
            <form onSubmit={handleSubmit} className='register-form'>
                <div className='form-field'>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input 
                        type="text" 
                        placeholder='pepe' 
                        value={form_state[REGISTER_FORM_FIELDS.USERNAME]}
                        name={REGISTER_FORM_FIELDS.USERNAME}
                        id='username'
                        onChange={onInputChange}
                        className='register-form-input'
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text" 
                        placeholder='pepe@mail.com' 
                        value={form_state[REGISTER_FORM_FIELDS.EMAIL]}
                        name={REGISTER_FORM_FIELDS.EMAIL}
                        onChange={onInputChange}
                        id={'email'}
                        className='register-form-input'
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="text" 
                        placeholder='pepe-123' 
                        value={form_state[REGISTER_FORM_FIELDS.PASSWORD]}
                        name={REGISTER_FORM_FIELDS.PASSWORD}
                        onChange={onInputChange}
                        id={'password'}
                        className='register-form-input'
                    />
                </div>
                {error && <span style={{color: 'red'}}> {error} </span>}
                {response && <span style={{color: 'green'}}> Usuario registrado con exito! </span>}
                {
                    loading 
                    ? <button disabled className='register-button'>Registrando</button>
                    : <button className='register-button'>Registrarse</button>
                }
                <a className='register-change-page' onClick={goToLogin}>¿Ya tienes una cuenta? Inicia Sesion</a>
                
            </form>
        </div>
    </div>
  )
}

export default RegisterScreen