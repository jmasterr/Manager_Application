import Managers_list from "./Managers-list";
import SideHeader from "./sideHeader";
import '../pages/home.css';

function Body() {
    return (
        <div className='body'>
            <SideHeader />
            <Managers_list />
        </div>
    )
}

export default Body;