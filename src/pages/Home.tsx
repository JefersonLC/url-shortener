import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import SUI from 'short-unique-id';

interface FormValues {
  url: string;
}

export default function Home() {
  const sui = new SUI({ length: 6 });

  const initialValues: FormValues = {
    url: '',
  };

  const createUrl = object({
    url: string()
      .url('Formato inválido')
      .required('Campo requerido')
      .typeError('Debe ser texto'),
  });

  const handleSubmit = (values: FormValues) => {
    console.log({ id: sui(), ...values });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={createUrl}
    >
      <Form>
        <Field
          name='url'
          placeholder='URL - Ex: http://your.site.com'
          autoComplete='off'
        />
        <ErrorMessage name='url' />

        <button type='submit'>OK</button>
      </Form>
    </Formik>
  );
}
