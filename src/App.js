import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import Styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      {/*<LifecycleA />*/}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1> */}
      {/* <Inline></Inline> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/*<FunctionClick />
      <ClassClick />
       <Counter />
      <Message />
      <Greet name="Ali" role="React Native">
        <p>This is Childern props</p>
        </Greet>
      <Greet name="Hassam" role="Python">
        <button>Active</button>
      </Greet>
      <Greet name="Hamza" role="ASP.net"/>
      <Welcome name="Ali" role="React Native">
        <button>Ali</button>
      </Welcome>
      <Welcome name="Hassam" role="Python">
      <button>Hassam</button>
      </Welcome>
      <Welcome name="Hamza" role="ASP.net">
      <button>Hamza</button>
      </Welcome> */}
    </div>
  );
}

export default App;
