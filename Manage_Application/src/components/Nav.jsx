import {Link} from 'react-router-dom';

function Nav(){
    return (
        <div className='container-nav'>
            <Link className='home-link' to='/' >Home</Link>
            <Link className='managers-link' to='/managers' >Managers</Link>
        </div>
    )
}

export default Nav;