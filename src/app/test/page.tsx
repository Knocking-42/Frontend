'use client';

import { Badge } from '@/_shared/components/Badge/Badge';
import { ToastList, useToast } from '@/_shared/components/Toast';

export default function Home() {
  const { toasts, handleClickButton } = useToast();

  return (
    <div>
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
