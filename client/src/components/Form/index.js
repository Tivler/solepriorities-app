import React from 'react';
import './_Form.scss';

import { Link } from 'react-router-dom';

class Forms extends React.Component {

    newInventory = async (item_selling_price , purchase_date, purchase_price, item_name, item_size, item_sku) => {
        try {
         const res = await fetch('/api/inventoryUpdate' , {
                method: 'post',
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify({
                    item_selling_price,
                    purchase_date,
                    purchase_price,
                    item_name,
                    item_size,
                    item_sku
                })
            })
            const content = await res.json();
            console.log(content)
        }
        catch(err) {
            console.log(err)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let item_selling_price = null;
        let purchase_date = new Date().toLocaleDateString();
        let purchase_price = document.getElementsByName('purchase_price')[0].value;
        let item_name = document.getElementsByName('item_name')[0].value;
        let item_size = document.getElementsByName('item_size')[0].value;
        let item_condition = document.getElementsByName('item_condition')[0].value;
        let item_sku = document.getElementsByName('item_sku')[0].value;

        this.newInventory(item_selling_price , purchase_date, purchase_price, item_name, item_size, item_condition, item_sku);
        
        window.scrollTo(0,0)
    }
   
    render () {
        return (
            <>
            <Link to="/inventory" className="inventory">Inventory</Link>  

            <div className="form">
                <form className="form__wrapper" onSubmit={this.handleSubmit} method="POST" action="/submit">
                    <input type="number" name="purchase_price"  placeholder="Purchase Price" />
                    <input name="item_name" placeholder="Item Name"/>
                    <input name="item_size" placeholder="Size" />
                    <input name="item_condition" placeholder="Condition" />
                    <input name="item_sku" placeholder="Sku" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            </>
        )
    }
}

export default Forms;