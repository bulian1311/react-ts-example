import React, { Fragment, useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>;

const ToDo: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setValue('');
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
    </Fragment>
  )
}

export default ToDo;
