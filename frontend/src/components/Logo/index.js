import './logo.css'
import { Link } from 'react-router-dom'

export default function Logo(){
    return(
        <Link>
            <h1 className="logo">Dev<span className="logo-text">Link</span></h1>
        </Link>
    )
}