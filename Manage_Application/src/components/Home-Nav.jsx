import {Link} from 'react-router-dom';
import '../pages/home.css';

function Home_Nav(){
    return (
        <div className='container-nav'>
            <Link className='home-link' to='/' >Home</Link>
            <Link className='managers-link' to='/managers' >Managers</Link>
        </div>
    )
}

export default Home_Nav;