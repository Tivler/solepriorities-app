import React from 'react';

import Nav from '../components/Nav';
import Form from '../components/Form';

class Index extends React.Component {

    render () {
        return (
            <>
                <Nav logo="Sole Priorities" link_one="Home" link_two="Inventory" />
                <Form />
            </>
        )
    }
}

export default Index;