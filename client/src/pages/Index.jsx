import React from 'react';

import Nav from '../components/Nav';
import Forms from '../components/Form';
import DataForm from '../components/DataForm';

class Index extends React.Component {

    render () {
        return (
            <>
                <Nav logo="Sole Priorities" link_one="Home" link_two="Inventory" />
                <Forms />
                <DataForm />
            </>
        )
    }
}

export default Index;