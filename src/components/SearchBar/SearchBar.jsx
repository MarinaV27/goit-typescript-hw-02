import { Field, Formik, Form } from 'formik';
//import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
   // const [query, setQuery] = useState ("")

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
                            name="query"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                    
                        />
                        <button type="submit">Search</button>
                    </form>
                </header>
            </Form>
        </Formik>
    )
}
