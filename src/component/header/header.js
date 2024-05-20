import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className='header nav py-2 justify-content-between'>
                
                <ul className="header-home col-2 m-0">
                    <div className='nav justify-content-around align-items-center h-100'>
                        <li className="nav-item">
                            <Link className="nav-link " to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/contact">Contact</Link>
                        </li>
                        
                    </div>
                </ul>
                <li className="header-login nav align-items-center">
                    <Link className="nav-link" to="contact">LOGIN HERE</Link>
                </li>
            </div>
        </>
    )
}