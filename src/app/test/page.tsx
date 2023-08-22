'use client';

import { useState } from 'react';

import { Drawer } from '@/_shared/components/Drawer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='flex flex-col w-screen h-full relative'>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
      >
        open
      </button>
      <Drawer
        placement='left'
        size='md'
        isOpen={isOpen}
      />
    </main>
  );
}
