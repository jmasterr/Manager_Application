import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../pages/home.css';

function Managers_list(){
    return (
        <ListGroup>
            <ListGroup.Item className='manager-list'>Elio</ListGroup.Item>
            <ListGroup.Item className='manager-list'>Isac</ListGroup.Item>
            <ListGroup.Item className='manager-list'>josue</ListGroup.Item>
            <ListGroup.Item className='manager-list'>Jaim</ListGroup.Item>
            <ListGroup.Item className='manager-list'>Ismael</ListGroup.Item>
        </ListGroup>

    //     <ListGroup as="ul">
    //   <ListGroup.Item as="li" active>
    //     Cras justo odio
    //   </ListGroup.Item>
    //   <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
    //   <ListGroup.Item as="li" disabled>
    //     Morbi leo risus
    //   </ListGroup.Item>
    //   <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    // </ListGroup>
    )
}

export default Managers_list;