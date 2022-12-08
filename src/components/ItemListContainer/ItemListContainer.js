import './ItemListContainer.css'
import '../NavBar/Boton'


const ItemListContainer = (props) => {


    return(
    <div>
        <div className="card">
            <img src={props.src} alt="Avatar"></img>
                <div className="container">
                    <h4><b className="boton">{props.title}</b></h4>
                    <p>{props.text}</p>
                </div>
        </div>
    </div>

    )

}

export default ItemListContainer;