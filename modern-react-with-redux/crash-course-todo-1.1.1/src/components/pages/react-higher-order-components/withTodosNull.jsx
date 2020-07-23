function withTodosNull(Component) {
  return function (props) {
    return !props.todos ? null : <Component {...props} />;
  };
}

// JavaScript ES6 arrow function
const withTodosNull = (Component) => (props) => !props.todos ? null : <Component {...}/>


function TodoList({ todos }) {
    ...
  }
   
  const TodoListWithNull = withTodosNull(TodoList);
   
  function App(props) {
    return (
      <TodoListWithNull todos={props.todos} />
    );
  }

const withTodosEmpty = (Component) => (props) =>
  !props.todos.length
    ? <div><p>You have no Todos.</p></div>
    : <Component { ...props } />

const withLoadingIndicator = (Component) => (props) =>
    props.isLoadingTodos
      ? <div><p>Loading todos ...</p></div>
      : <Component { ...props } />

// JavaScript ES6 rest destructuring
const withLoadingIndicator = (Component) => ({ isLoadingTodos, ...others }) =>
      isLoadingTodos
        ? <div><p>Loading todos ...</p></div>
        : <Component { ...others } />