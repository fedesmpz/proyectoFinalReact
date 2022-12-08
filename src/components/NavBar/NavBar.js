import './NavBar.css'
import Boton from './Boton'
import Title from './Title'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


    return (

        <div className = 'app-container'>
            <Title/>
            <CartWidget/> 
            <br></br>
            <nav>
                <div>
                    <Boton text="Home" link=""/>
                    <Boton text="Reseñas" link=""/>
                    <Boton text="Cómo Jugar" link=""/>
                    <Boton text="Partidas" link=""/>
                    <Boton text="Tienda" link=""/>
                    <Boton text="Nosotros" link=""/>

                </div>
            </nav>
            
        </div>
    )
}

export default NavBar;