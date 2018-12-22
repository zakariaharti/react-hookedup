import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  useFocus,
  useArray,
  useInput
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
}

const stories = storiesOf('hooks', module);

stories.add('useFocus',() => <ExampleUseFocus /> );
stories.add('useArray',() => <ExampleUseArray /> );
