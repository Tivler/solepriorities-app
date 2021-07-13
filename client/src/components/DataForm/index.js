import { Formik, Form, Field, ErrorMessage } from "formik";
import './_dataform.scss';

const DataForm = () => (
  <>
    <Formik
      initialValues={{ purchase_price: '', item_name: '', item_size: '', item_condtion:'', item_sku:''}}
      validate={(values) => {
        const errors = {};
        if (!values.purchase_price) {
          errors.purchase_price = "Required";
        }

        if (!values.item_name) {
            errors.item_name = "Required";
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
      onSubmit={(values, { setSubmitting }) => {
        // post data to server
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, handleReset }) => (
        <Form className="formik">
            <div>
                <Field hidden type="text" name="purchase_date" value={new Date().toLocaleDateString()} />
            </div>

            <div>
                <Field type="number" name="purchase_price" placeholder="Purchase Price" />
                <ErrorMessage name="purchase_price" component="span" />
            </div>

            <div>
                <Field type="text" name="item_name" placeholder="Item Name" />
                <ErrorMessage name="item_name" component="span" />
            </div>

            <div>
                <Field type="text" name="item_size" placeholder="Item Size" />
                <ErrorMessage name="item_size" component="span" />
            </div>

            <div>
                <Field type="text" name="item_condition" placeholder="Item Condition">

                </Field>

                
                <ErrorMessage name="item_condition" component="span" />
            </div>

            <div>
                <Field type="text" name="item_sku" placeholder="Item Sku" />
                <ErrorMessage name="item_sku" component="span" />
            </div>

            <div>
                <Field hidden type="number" name="item_selling_price" value={0} />
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
);

export default DataForm;