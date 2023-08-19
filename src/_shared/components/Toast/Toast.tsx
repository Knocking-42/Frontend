interface Props {
  text: string;
}

export const Toast = ({ text }: Props) => {
  return (
    <li className='px-5 py-2 bg-slate-300'>
      {/* TODO: design wip */}
      <span>{text}</span>
    </li>
  );
};
