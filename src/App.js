import './App.css';
import Header from './Components/Header/Header'
import {AppProvider} from './AppContext'
import Box from './Components/Box/Box'
import ContentRenderer from './Components/ContentRenderer';
import FingerPrintButton from './FingerPrintButton'



function App() {
  return (
  <AppProvider>
    <div className="App">
    <Box>
      <Header />
      <ContentRenderer />
    </Box>
    <FingerPrintButton />
    </div>
  </AppProvider>
  );
}

export default App;
