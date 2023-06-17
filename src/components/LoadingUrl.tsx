import { DotWave } from '@uiball/loaders';

export default function LoadingUrl({ children }: { children: string }) {
  return (
    <>
      <p className='text-center text-slate-400 text-lg 2xl:text-2xl mb-4'>
        {children}
      </p>
      <span className='flex justify-center'>
        <DotWave size={70} color='#94a3b8' />
      </span>
    </>
  );
}
