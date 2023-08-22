'use client';

import { useState } from 'react';

import {
  Drawer,
  DrawerCloseButton,
  DrawerHeader,
  DrawerSection,
} from '@/_shared/components/Drawer';

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
        placement='right'
        size='md'
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DrawerCloseButton />
        <DrawerHeader>안녕하세요</DrawerHeader>
        <DrawerSection>
          <input
            type='text'
            placeholder='값 입력'
          />
          <button type='button'>버튼</button>
        </DrawerSection>
      </Drawer>
    </main>
  );
}
