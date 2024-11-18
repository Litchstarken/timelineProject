import './App.css'
import Timelines from './components/Timelines/Timelines';
import EventProvider from './providers/EventProvider';

const App = () => {
  return (
    <>
      <h1>Prediktive Event Timeline</h1>
      <EventProvider>
        <Timelines/>
      </EventProvider>
    </>
  )
}

export default App;


