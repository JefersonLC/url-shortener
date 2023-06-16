import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import SUI from 'short-unique-id';
import { object, string } from 'yup';
import { UrlContext } from '../context/UrlContext';
import { UrlData } from '../context/UrlContext.d';

interface FormValues {
  url: string;
}

export default function UrlForm() {
  const { newUrl, handleLoad, getUrl } = useContext(UrlContext);

  const sui = new SUI({ length: 6 });

  const initialValues: FormValues = {
    url: '',
  };

  const createUrl = object({
    url: string()
      .url('Invalid format')
      .required('Required')
      .typeError('Must be text'),
  });

  const handleSubmit = async (values: FormValues) => {
    handleLoad(true);

    const id = sui();

    const { status } = await newUrl({ id, ...values });

    if (status === 201 /*created*/) {
      const response = await getUrl<UrlData>(id);
      console.log(response);
    }

    handleLoad(false);
  };

  return (
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
            className='w-full p-3 rounded-md 2xl:p-4'
          />
          <ErrorMessage
            name='url'
            component='span'
            className='block mt-1 text-sm 2xl:text-base text-rose-600'
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className={`bg-emerald-400 px-3 py-1 mx-auto rounded-lg 
            hover:bg-slate-900 hover:text-emerald-400 2xl:px-5
            2xl:py-3 2xl:text-lg`}
          >
            Get link
          </button>
        </div>
      </Form>
    </Formik>
  );
}
