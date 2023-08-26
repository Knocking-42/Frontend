'use client';

import { FloatingActionButton } from '@/_shared/components/FloatingActionButton';
import { Badge } from '@/_shared/components/Badge/Badge';
import { ToastList, useToast } from '@/_shared/components/Toast';

export default function Home() {
  return (
    <div className=''>
      <FloatingActionButton
        onClick={() => {}}
        size='sm'
      >
        +
      </FloatingActionButton>
      <Badge
        text='1'
        type='common'
      >
        hello
      </Badge>
      <Badge
        text='1'
        type='green'
      >
        hello
      </Badge>
      <Badge
        text='1'
        type='red'
      >
        hello
      </Badge>
    </div>
  );
}
