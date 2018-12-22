import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  useFocus,
  useArray,
  useInput,
  useBoolean,
  useCounter,
  useHover
} from '../src/';

const Welcome = () => (
  <div
    style={
      {
        padding: '120px',
        textAlign: 'center',
        fontFamily: 'arial'
      }
    }
  >
    <h2
      style={
        {
          fontSize: '3em',
          color: '#03A9F4',
          fontWeight: 'lighter'
        }
      }
    >React <span>hooked</span><span style={{fontWeight: 'bold'}}>Up</span></h2>
    <p
      style={
        {
          color: 'gray'
        }
      }
    >A collection of useful React hooks</p>
    <code
      style={{
        color: 'gray',
        background: '#ececec',
        padding: '2px'
      }}
    >yarn add react-hookedup react@next react-dom@next</code>
    <a
      target="__blanc"
      href="http://www.github.com/zakariaharti/react-hookedup"
      style={
        {
          display: 'block',
          margin: '100px auto',
          textTransform: 'capitalize',
          background: '#607D8B',
          width: '50px',
          color: '#ffffff',
          padding: '5px 20px',
          borderRadius: '1px',
          cursor: 'pointer',
          textDecoration: 'none'
        }
      }
    >github</a>
  </div>
);

storiesOf('Welcome', module).add('to React hookedUp', () => <Welcome />);

const ExampleUseFocus = () => {
  const {focused, bind} = useFocus();

  return(
    <div>
      <p>this is input is : {focused ? 'focused' : 'not focused'}</p>
      <input {...bind}  />
    </div>
  );
};

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

const ExampleUseBoolean = () => {
  const {toggle, value} = useBoolean(false);

  return(
    <div>
      <p>{JSON.stringify(value)}</p>
      <button onClick={() => toggle()}>toggle</button>
    </div>
  );
};

const ExampleUseCounter = () => {
  const {decrease,increase,value} = useCounter(1);
  const { bindToInput, value: value2 } = useInput('');
  const { bindToInput: bindToInput2, value: value3 } = useInput('');

  return(
    <div>
      <p>{JSON.stringify(value)}</p>
      <div>
        increase by :
        <input {...bindToInput}  />
        <button onClick={() => increase(value2)}>increase</button>
      </div>
      <div>
        dicrease by :
        <input {...bindToInput2}  />
        <button onClick={() => decrease(value3)}>decrease</button>
      </div>
    </div>
  );
};

const ExampleUseHover = () => {
  const {hovered, bind} = useHover();

  return(
    <div>
      <p>this is input is : {hovered ? 'hovered' : 'not hovered'}</p>
      <input {...bind}  />
    </div>
  );
};

const ExampleUseInput = () => {
  const {
    bindToInput,
    clear,
    value
  } = useInput('');

  return(
    <div>
      <p>you entered : {value}</p>
      <input {...bindToInput}  />
      <button onClick={() => clear()}>clear</button>
    </div>
  );
};

const stories = storiesOf('hooks', module);

stories.add('useFocus',() => <ExampleUseFocus /> );
stories.add('useArray',() => <ExampleUseArray /> );
stories.add('useBoolean',() => <ExampleUseBoolean /> );
stories.add('useCounter',() => <ExampleUseCounter /> );
stories.add('useHover',() => <ExampleUseHover /> );
stories.add('useInput',() => <ExampleUseInput /> );
