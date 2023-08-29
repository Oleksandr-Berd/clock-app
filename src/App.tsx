import './App.css';
import Quotes from './components/Quotes/Quotes';
import TimeSet from './components/TimeSet/TimeSet';
import SharedLayout from './layouts/SharedLayout/SharedLayout';

function App() {
  return (
    <div>
<SharedLayout>
  <Quotes/>
  <TimeSet/>
</SharedLayout>
    </div>
  );
}

export default App;
