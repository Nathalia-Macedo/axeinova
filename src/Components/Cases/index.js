import './Cases.css'
import { Link } from 'react-router-dom'
import {} from 'react-icons'
function Case(props){
 

    return(
        <>
        <div className='container_case'>
        <div style={{backgroundImage: `url(${props.img})`}} 
        className='case'>
        </div>
        <div className='info'>
            <span>{props.name}</span>
            <Link to={props.link}>Ver mais</Link>
        </div>
        </div>
         </>
    )
}

export default Case