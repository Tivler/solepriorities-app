import React from 'react';

import Nav from '../components/Nav';
import Data from '../components/Data';

class Inventory extends React.Component {

    render () {
        return (
            <>
                <Nav logo="Sole Priorities" link_one="Home" link_two="Inventory" />
                <Data />
                <div>Inventory</div>
            </>
        )
    }
}

export default Inventory;