import React, { useEffect, useState } from 'react'
import NsButton from '../../components/Button/NsButton'
import { ContainerLogin, ContentLogin } from '../../styles/pages/login'
import logoImg from '../../assets/Logo.svg'
import NsInput from '../../components/NsInput'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import NsButtonSignGoogle from '../../components/Button/NsButtonSignGoogle'

export default function Login() {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        if (session) {
            router.replace('/');
        }
        setLoading(false);
    }, [session])


    return (
        <>
            <ContainerLogin>
                <ContentLogin>
                    <div className='logo'>
                        <img src={logoImg.src} alt='' style={{ width: "10rem" }} />
                    </div>
                    <NsInput type='email' label='Email' />
                    <NsInput type='password' label='Senha' />
                    <NsButton title='Entrar' />
                    <NsButtonSignGoogle title='Entrar com Google' onClick={() => signIn()} />
                    <Link href='/login/create-user'>Criar Usuário</Link>
                </ContentLogin>
            </ContainerLogin>

        </>
    )
}

