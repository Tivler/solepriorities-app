import React from 'react';

import Nav from '../components/Nav';
import DataForm from '../components/DataForm';

class Index extends React.Component {

    render () {
        return (
            <>
                <Nav logo="Sole Priorities" link_one="Home" link_two="Inventory" />
                <DataForm />
            </>
        )
    }
}

export default Index;