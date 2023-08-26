import { Paper } from '@/_shared/components/Paper/Paper';

export default function PaperTestPage() {
  return (
    <div className='flex bg-white gap-4 w-screen h-screen items-center justify-center'>
      <Paper>
        <span className=''>paper</span>
      </Paper>
      <Paper shadow='lg'>
        <span className='drop-shadow-2xl'>paper2</span>
      </Paper>
      <Paper
        shadow='xl'
        variant='outlined'
      >
        <span>paper3</span>
      </Paper>
      <Paper
        variant='outlined'
        shadow='2xl'
      >
        <span>paper4</span>
      </Paper>
    </div>
  );
}
