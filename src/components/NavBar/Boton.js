import './NavBar.css'


const Boton = ( {text = "", link = ""}) => {


return(
    <a className = 'boton scale' href={link}>{text}</a>
)


}

export default Boton;