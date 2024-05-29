import { Field, Formik, Form } from 'formik';
export default function SearchBar({ onSubmit }) {

    return (
        <Formik
            initialValues={{ query: "" }}
            onSubmit={(values, actions) => {
                onSubmit(values.query);
                actions.resetForm();
            }}
        >
            <Form>
                <header>
                    <form>
                        <Field
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                        />
                        <button type="submit">Search</button>
                    </form>
                </header>
            </Form>
        </Formik>
    )
}
