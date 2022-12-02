import './home.css'
import { Social } from '../../components/Social'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Home(){
    return(
        <div className="home-container">
            <h1>Lucas Barsaglini</h1>
            <span>Veja meus links</span>

        <main className="links">
            <section className="link-area">
                <a href="#">
                    <p className="link-text">Canal no Youtube</p>
                </a>
            </section>

        <footer>
            <Social url="http://facebook.com/lucasbarsaglini">
                <FaFacebook size={35} color="#FFF"/>
            </Social>  
            <Social url="http://instagram.com/lucasbarsaglini">
                <FaInstagram size={35} color="#FFF"/>
            </Social>   
            <Social url="https://linkedin.com/lucasbarsaglini">
                <FaLinkedin size={35} color="#FFF"/>
            </Social> 
        </footer>    

        </main>

        </div>
    )
}