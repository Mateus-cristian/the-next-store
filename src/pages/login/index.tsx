import React from 'react'
import NsButton from '../../components/NsButton'
import { ContainerLogin, ContentLogin } from '../../styles/pages/login'
import logoImg from '../../assets/Logo.svg'
import NsInput from '../../components/NsInput'

export default function Login() {
    return (
        <ContainerLogin>
            <ContentLogin>
                <div className='logo'>
                    <img src={logoImg.src} alt='' style={{ width: "10rem" }} />
                </div>
                <NsInput type='email' label='Email' />
                <NsInput type='password' label='Senha' />
                <NsButton title='Entrar' />
            </ContentLogin>
        </ContainerLogin>
    )
}

