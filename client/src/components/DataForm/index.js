import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import './_dataform.scss';

class DataForm extends React.Component {

  getStockX = async (sku) => {
    try {
      const res = await fetch(`https://stockx.com/api/browse?&_search=${sku}` , {
        method: 'get',
        headers: {
            "Content-Type": "application/json", 
        }
      })
      const content = await res.json();
      return content.Products[0];
    }
    catch(err) {
      console.log(err)
    }
  }

  newInventory = async (data) => {
    try {
      const res = await fetch('/api/inventoryUpdate' , {
              method: 'post',
              headers: {
                  "Content-Type": "application/json", 
              },
              body: JSON.stringify(data, null , 2)
          })
          const content = await res.json();
          console.log(content)
      }
      catch(err) {
          console.log(err)
      }
  }

  render () {
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={{purchase_date: new Date().toLocaleDateString() ,purchase_price: '', item_name: '', item_size: '', item_condition:'', item_sku:'', item_selling_price:'0'}}
          validate={(values) => {
            const errors = {};
            if (!values.purchase_price) {
              errors.purchase_price = "Required";
            }
    
            if (!values.item_size) {
                errors.item_size = "Required";  
            }
    
            if (!values.item_condition) {
                errors.item_condition = "Required";
            }
    
            if (!values.item_sku) {
                errors.item_sku = "Required";
            }
    
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            // post data to server
            const data = await this.getStockX(values.item_sku);
            console.log(data);

            let lowestAsk = data.market.lowestAsk;
            let percent = (5 / 100) * lowestAsk;
            let item_name = data.title;
            let item_sku = values.item_sku.toUpperCase();
            values.item_name = item_name;
            values.item_selling_price = Math.floor(percent + lowestAsk);
            values.item_sku = item_sku;

            await this.newInventory(values);
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, dirty, handleReset }) => (
            <Form className="formik">
                <div>
                    <Field hidden type="text" name="purchase_date" />
                </div>
    
                <div>
                    <Field type="number" name="purchase_price" placeholder="Purchase Price" />
                    <ErrorMessage name="purchase_price" component="span" />
                </div>
    
                <div>
                    <Field hidden type="text" name="item_name" placeholder="Item Name" />
                </div>
    
                <div>
                    <Field type="text" name="item_size" placeholder="Item Size" />
                    <ErrorMessage name="item_size" component="span" />
                </div>
    
                <div>
                    <Field type="text" name="item_condition" placeholder="Item Condition"/>
                    <ErrorMessage name="item_condition" component="span" />
                </div>
    
                <div>
                    <Field type="text" name="item_sku" placeholder="Item Sku" />
                    <ErrorMessage name="item_sku" component="span" />
                </div>
    
                <div>
                    <Field hidden type="number" name="item_selling_price"/>
                </div>
    
                <button type="button" onClick={handleReset} disabled={!dirty || isSubmitting}>
                    Reset
                </button>
    
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
          )}
        </Formik>
      </>
    )
  }
}

export default DataForm;