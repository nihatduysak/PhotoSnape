import { Link } from "react-router-dom";

export default function Header() {

    function handleClick() {
        document.querySelector('.hamburger-menu input[name="hamburger-menu"]').checked = false;
        window.scrollTo(0, 0);
    }
      
    return (
        <div className="header">
            <a href="/"><img src="/images/header-icon.svg" alt="Heade Icon" /></a>
            <div className="headerNav">
                <ul onClick={handleClick}>
                    <li><Link to={'/hikayeler'}>HİKAYELER</Link></li>
                    <li><Link to={'/ozellikler'}>ÖZELLİKLER</Link></li>
                    <li><Link to={'/fiyatlandirma'}>FİYATLANDIRMA</Link></li>
                </ul>
            </div>
            <button>DAVETİYE ALIN</button>
            <label className="hamburger-menu" >
                <input type="checkbox" name="hamburger-menu" />
                <span className="line"></span>
                <span className="line"></span>
            </label>
            <div className='mobile-menu'>
                <Link to={'/'}><img src="/images/header-icon.svg" alt="Heade Icon" /></Link>
                <ul onClick={handleClick}>
                    <li><Link to={'/hikayeler/'}>Hikayeler</Link></li>
                    <li><Link to={'/ozellikler'}>Özellikler</Link></li>
                    <li><Link to={'/fiyatlandirma'}>Fiyatlandırma</Link></li>
                    <div className="mobileLoginBtn">
                        <li><Link to={'#'}>Davetiye Alın</Link></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}