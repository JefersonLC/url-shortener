import SadFace from '../icons/SadFace';

export default function WithOutUrl() {
  return (
    <>
      <p className='text-center text-slate-400 text-lg 2xl:text-2xl mb-4'>
        If you try to generate a url?
      </p>
      <span className='[&>svg]:fill-slate-400 flex justify-center'>
        <SadFace />
      </span>
    </>
  );
}
