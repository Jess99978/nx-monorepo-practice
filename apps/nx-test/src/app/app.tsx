import '../styles.css';
import NxWelcome from './nx-welcome';
import MyComponent from '../components/my-component';
export function App() {
  return (
    <div>
      <NxWelcome title="nx-test" />
      <MyComponent />
    </div>
  );
}

export default App;
