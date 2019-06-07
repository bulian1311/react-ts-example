import React, { Fragment, useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>;

interface iTodo {
  text: string
  complete: boolean
}

const ToDo: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<iTodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = (text: string): void => {
    const newTodos: iTodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  }

  const completeTodo = (index: number): void => {
    const newTodos: iTodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  const removeTodo = (text: string): void => {
    const newTodos: iTodo[] = todos.filter((todo) => { return todo.text !== text });
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      <section>
        {
          todos.map((todo: iTodo, index: number) => {
            return (
              <Fragment key={index}>
                <div >{todo.text}</div>
                <button type="button" onClick={() => completeTodo(index)}>
                  {todo.complete ? 'uncomplete' : 'complete'}
                </button>
                <button type="button" onClick={() => removeTodo(todo.text)}>&times;</button>
              </Fragment>
            );
          })
        }
      </section>
    </Fragment>
  )
}

export default ToDo;
