'use client';

import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';
import type ReactQuill from 'react-quill';

const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
) as typeof ReactQuill;

const modules = {
  toolbar: [[]],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

function Editor() {
  return (
    <>
      <div>
        <h1>Editor</h1>
        <QuillWrapper
          modules={modules}
          theme='snow'
        />
      </div>
    </>
  );
}

export default Editor;
