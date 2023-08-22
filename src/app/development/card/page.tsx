'use client';
import Card from '@/_shared/components/Card/Card';
import Flex from '@/_shared/components/Flex';

export default function CardTestPage() {
  return (
    <div className='flex bg-white gap-4 w-screen h-screen items-center justify-center'>
      <Card>
        <Flex
          gap='lg'
          direction='column'
        >
          <span className='text-black'>Card</span>
          <span className='text-black'>Card-2</span>
          <span className='text-black'>Card-3</span>
        </Flex>
      </Card>
      <Card onClick={() => console.log('card2')}>
        <span className='text-black'>Card2</span>
      </Card>
      <Card>
        <Flex
          gap='md'
          direction='column'
        >
          <section className='w-40 h-48 rounded-md shadow-md bg-red-300' />
          <span className='text-black'>Card-2</span>
          <span className='text-black'>Card-3</span>
        </Flex>
      </Card>
      <Card size='lg'>
        <span className='text-black'>Card4</span>
      </Card>
    </div>
  );
}
