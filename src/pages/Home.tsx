import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import SUI from 'short-unique-id';

export default function Home() {
  const sui = new SUI({ length: 6 });

  interface Form {
    url: string;
  }

  const initialValues: Form = {
    url: '',
  };

  const createUrl = object({
    url: string()
      .url('Formato inválido')
      .required('Campo requerido')
      .typeError('Debe ser texto'),
  });

  const handleSubmit = (values: Form) => {
    console.log({ id: sui(), ...values });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={createUrl}
    >
      <Form>
        <Field name='url' placeholder='URL - Ex: http://your.site.com' />
        <ErrorMessage name='url' />

        <button type='submit'>OK</button>
      </Form>
    </Formik>
  );
}
