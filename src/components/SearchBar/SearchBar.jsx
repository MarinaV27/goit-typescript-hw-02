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
                            name="query"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onClick={handleLoadMore}
                        />
                        <button type="submit">Search</button>
                    </form>
                </header>
            </Form>
        </Formik>
    )
}
