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
                    <p className="grid__card__name">Size: {p.item_size}</p>
                    <p className="grid__card__name">Sku: {p.item_sku}</p>
                </div>
            )}
        </div>
        </>

        )
    }
}
 
export default Data;