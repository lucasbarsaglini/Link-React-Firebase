import './login.css'
import { Logo } from '../../components/Logo'
import { useState } from 'react'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { userNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Input } from '../../components/Input'

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = userNavigate()
    
    function handleLogin(e) {
        e.preventDefault()

        if(email === '' || password === ''){
            alert("Preencha todos os campos!")
            return
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("BEM VINDO DE VOLTA!")
            navigate("/admin", { replace: true } )
        })
        .catch(() => {
            toast.error("ERRO AO FAZER LOGIN!")
        })
    }

    return(
        <div className="login-container" onSubmit={handleLogin}>
            <Logo/>

            <form className="form">
                <Input 
                    type="email" 
                    placeholder="Digite seu email..." 
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <Input 
                    type="password" 
                    placeholder="********" 
                    autoCapitalize="on"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                />

                <button type="submit">Acessar</button>
            </form>

        </div>
    )
}