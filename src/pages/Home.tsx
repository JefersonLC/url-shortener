import { ErrorMessage, Field, Form, Formik } from 'formik';
import SUI from 'short-unique-id';
import { object, string } from 'yup';

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
    <main className='min-h-screen bg-slate-800 flex flex-col px-4'>
      <section className='flex-grow basis-0 flex flex-col justify-end'>
        <p className='text-lg text-slate-50'>Enter your URL:</p>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={createUrl}
        >
          <Form>
            <div className='mb-3 mt-2'>
              <Field
                name='url'
                placeholder='Ex: http://your.site.com'
                autoComplete='off'
                className='w-full p-3 rounded-md'
              />
              <ErrorMessage
                name='url'
                component='span'
                className='block mt-1 text-sm text-rose-600'
              />
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-emerald-400 px-3 py-1 mx-auto rounded-lg'
              >
                Generate link
              </button>
            </div>
          </Form>
        </Formik>
      </section>
      <section className='flex-grow basis-0'>
        <p>Aquì va el nuevo link</p>
      </section>
    </main>
  );
}
