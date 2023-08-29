import './App.css';
import Quotes from './components/Quotes/Quotes';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

function App() {
  return (
    <div>
<SharedLayout>
  <Quotes/>
</SharedLayout>
    </div>
  );
}

export default App;
