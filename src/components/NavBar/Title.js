import './NavBar.css'
import logo from '../../Assets/logo_alta.png'
import cart from '../CartWidget/cart.png'
//import CartWidget from './CartWidget'

const Title = () => {


    return(
        <div className='center'>
            <div className='title-container'>
                <img src={logo} className = 'logo'/>
                <h1>Ludicus - Juegos de Mesa</h1>
                <img src={cart} className = 'logo'/>
            </div>
        </div>
    )

}

export default Title;
