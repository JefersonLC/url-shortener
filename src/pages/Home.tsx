import UrlForm from '../components/UrlForm';
import SadFace from '../icons/SadFace';

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-slate-800 flex flex-col px-4 sm:px-24
      md:px-48 lg:px-60 xl:px-80 2xl:px-[30rem]`}
    >
      <section className='flex-grow basis-0 flex flex-col justify-end'>
        <p className='text-lg 2xl:text-2xl text-slate-50'>Enter your URL:</p>
        <UrlForm />
      </section>
      <section className='flex-grow basis-6'>
        <div className='p-4 mt-10 border-dashed rounded-xl border-4 border-slate-400'>
          <p className='text-center text-slate-400 text-lg 2xl:text-2xl mb-4'>
            If you try to generate a url?
          </p>
          <span className='[&>svg]:fill-slate-400 flex justify-center'>
            <SadFace />
          </span>
        </div>
      </section>
    </main>
  );
}
