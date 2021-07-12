import React from 'react';
import './_Data.scss';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: [],
        };
    }

    _displayInventory = () => {
        fetch('/api/inventory')
        .then(res => res.json())
        .then(data => this.setState({ inventory: data }))
    }

    componentDidMount() {
        this._displayInventory();
    }

    render () {

        console.log("data", this.state.inventory);
        
        return (

        <>
        <div className="grid">
            {this.state.inventory.map(p => 
                <div className="grid__card" key={p._id}>
                    <h3 className="grid__card__name">{p.item_name}</h3>
                </div>
            )}
        </div>
        </>

        )
    }
}
 
export default Data;