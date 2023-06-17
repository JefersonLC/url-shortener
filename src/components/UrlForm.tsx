import { ErrorMessage, Field, Form, Formik } from 'formik';
import SUI from 'short-unique-id';
import { object, string } from 'yup';
import { UrlData } from '../context/UrlContext.d';
import { useUrl } from '../hooks/useUrl';

interface FormValues {
  url: string;
}

export default function UrlForm() {
  const { newUrl, handleLoad, handleUrl, getUrl } = useUrl();

  const sui = new SUI({ length: 6 });

  const domain: string = import.meta.env.VITE_DOMAIN;

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

    const id: string = sui();

    const { status } = await newUrl({ id, ...values });

    if (status === 201 /*created*/) {
      const { data } = await getUrl<UrlData>(id);
      handleUrl(domain + data.id);
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
