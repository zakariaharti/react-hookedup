![react hookedup](/screenshot.PNG)

[![npm](https://img.shields.io/npm/v/react-hookedup.svg?style=for-the-badge)](https://www.npmjs.com/package/react-hookedup)
 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/zakariaharti/react-hookedup/blob/master/LICENSE.md)
[![Storybook](https://img.shields.io/badge/docs-storybook-pink.svg?style=for-the-badge)](https://zakariaharti.github.io/react-hookedup/)

>Hooks are a new feature proposal that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha and being discussed in an open RFC.

## Installation

**using npm**

```
npm install react-hookedup react@next react-dom@next --save
```

**using yarn**

```
yarn add react-hookedup react@next react-dom@next
```

# Demo
Visit [here](https://zakariaharti.github.io/react-hookedup)

# hooks

### `common hooks`

| Name                                    | Description            | Arguments        | Returns     |
| ---------------------------------------- | --------------------- | ----------------- | ----------- |
| [useArray](#useArray) | useful hook for manipulating arrays  | initial value | {value, setValue, removeById, removeIndex, clear} |
| [useBoolean](#useBoolean) | useful hook for manipulating booleans  | initial value | {value, setValue, toggle, setTrue, setFalse} |
| [useCounter](#useCounter) | counter hook  | value,{upperLimit,lowerLimit,step,loop} | {value, setValue, increase,decrease} |
| [useFocus](#useFocus) | focus hook | null | {focused, bind} |
| [useHover](#useHover) | hover hook | null | {hovered, bind} |
| [useInput](#useInput) | input handling hook | initial value | {value, setValue, onChange, bindToInput, bind, hasValue, clear} |

### `lifecycles hooks`

| Name                                    | Description            | Arguments        | Returns     |
| ---------------------------------------- | --------------------- | ----------------- | ----------- |
| [useLifecycleHooks](#useLifecycleHooks) | use lifecycle methods  | {onMount, onUnmount} | void |
| [useOnMount](#useOnMount) | componentDidMount like lifecycle  | Function | void |
| [useOnUnmount](#useOnUnmount) | componentWillUnmount like lifecycle  | Function | void |
| [useMergeState](#useMergeState) | merge the previous state with new one | initial value of the state | {setState: Function, state} |
| [usePrevious](#usePrevious) | get the previous value of the state | initial value of the state | the previous value |

### `timers hooks`

| Name                                    | Description            | Arguments        | Returns     |
| ---------------------------------------- | --------------------- | ----------------- | ----------- |
| [useInterval](#useInterval) | use setInterval via hooks  | {function, delay} | void |
| [useTimeout](#useTimeout) | use setTimeout via hooks | {function, delay} | void |

### `network hooks`

| Name                                    | Description            | Arguments        | Returns     |
| ---------------------------------------- | --------------------- | ----------------- | ----------- |
| [useOnLineStatus](#useOnLineStatus) | check if the browser is connected to the internet  | null| {onLine} |

# Usage

### `useArray`

```js
import { useArray } from 'react-hookedup';

const ExampleUseArray = () => {
  const {
    add,
    clear,
    removeIndex,
    value: currentArray
  } = useArray(['cat','dog','bird']);

  const {
    bindToInput,
    value
  } = useInput('');

  const {
    bindToInput: bindToInput2,
    value: value2
  } = useInput('');

  return(
    <div>
      <p>
        current array is : {JSON.stringify(currentArray)}
      </p>
      <div>
        add element :
        <input {...bindToInput}  />
        <button onClick={() => add(value)}>add</button>
      </div>
      <div>
        remove element by index :
        <input {...bindToInput2}  />
        <button onClick={() => removeIndex(value2)}>delete</button>
      </div>
      <div>
        delete all items :
        <button onClick={() => clear()}>clear</button>
      </div>
    </div>
  )
};
```

### `useBoolean`

```js
import { useBoolean } from 'react-hookedup';

const ExampleUseBoolean = () => {
  const {toggle, value} = useBoolean(false);

  return(
    <div>
      <p>{JSON.stringify(value)}</p>
      <button onClick={() => toggle()}>toggle</button>
    </div>
  );
};
```

Methods:

- `toggle`
- `setTrue`
- `setFalse`


### `useOnMount`

```jsx
import { useOnMount } from 'react-hookedup';

const App = () => {
  useOnMount(() => console.log("hello world"));
  return <div> hello world </div>;
};
```

### `useOnUnmount`

```jsx
const App = () => {
  useOnUnmount(() => console.log("goodbye world"));
  return <div> goodbye world </div>;
};
```

### `useLifecycleHooks`

```jsx
const App = () => {
  useLifecycleHooks({
    onMount: () => console.log("mounted!"),
    onUnmount: () => console.log("unmounting!")
  });

  return <div> hello world </div>;
};
```

### `useCounter`

```jsx
const counter = useCounter(0);
const limitedNumber = useCounter(3, { upperLimit: 5, lowerLimit: 3 });
const rotatingNumber = useCounter(0, {
  upperLimit: 5,
  lowerLimit: 0,
  loop: true
});
```

Methods:

Both `increase` and `decrease` take an optional `amount` argument which is 1 by default, and will override the `step` property if it's used in the options.

- `increase(amount = 1)`
- `decrease(amount = 1 )`

Options:

- `lowerLimit`
- `upperLimit`
- `loop`
- `step` - sets the increase/decrease amount of the number upfront, but it can still be overriden by `number.increase(3)` or `number.decrease(5)`

### `useInput`

```jsx
const newTodo = useInput("");
```

```jsx
<input value={newTodo.value} onChange={newTodo.onChange} />
```

```jsx
<input {...newTodo.bindToInput} />
<Slider {...newTodo.bind} />
```

Methods:

- `clear`
- `onChange`
- `bindToInput` - binds the `value` and `onChange` props to an input that has `e.target.value`
- `bind` - binds the `value` and `onChange` props to an input that's using only `e` in `onChange` (like most external components)

Properties:

- `hasValue`

### `useFocus`

```jsx
const ExampleUseFocus = () => {
  const {focused, bind} = useFocus();

  return(
    <div>
      <p>this is input is : {focused ? 'focused' : 'not focused'}</p>
      <input {...bind}  />
    </div>
  );
};
```

### `useHover`

```jsx
const ExampleUseHover = () => {
  const {hovered, bind} = useHover();

  return(
    <div>
      <p>this is input is : {hovered ? 'hovered' : 'not hovered'}</p>
      <input {...bind}  />
    </div>
  );
};
```

### `useArray`

```jsx
const todos = useArray([]);
```

Methods:

- `add`
- `clear`
- `removeIndex`
- `removeById`

### useMergeState

```jsx
const { state, setState } = useMergeState({ loading: false });
setState({ loading: true, data: [1, 2, 3] });
```

Methods:

- `setState(value)` - will merge the `value` with the current `state` (like this.setState works in React)

Properties:

- `state` - the current state

### `usePrevious`

Use it to get the previous value of a prop or a state value.  
It's from the official [React Docs](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state).  
It might come out of the box in the future.

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <h1>
      Now: {count}, before: {prevCount}
    </h1>
  );
};
```

### `useInterval`

```jsx
const useIntervalExample = () => {
  useInterval(() => alert('hello world'), 1500);

  return (
    <h1>
      I will alert in 1.5 s
    </h1>
  );
};
```

### `useTimeout`

```jsx
const useTimeoutExample = () => {
  useTimeout(() => alert('hello world'), 1500);

  return (
    <h1>
      I will alert in 1.5 s
    </h1>
  );
};
```

### `useOnLineStatus`

```jsx
const useOnLineStatusExample = () => {
  const {online} = useOnLineStatus();

  return (
    <h1>
      you are : {online ? 'online' : 'offline'}
    </h1>
  );
};
```
