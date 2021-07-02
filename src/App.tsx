import {useState} from 'react';
import {Navbar, Form} from 'react-bootstrap';
import './App.css';
import QuoteInfo from './components/QuoteInfo';
import Rating from './components/Rating';

const App = ():JSX.Element => {

  // TODO:
  // - Consistent Code Style / clean typescript
  // - Documentation for running the project
  // - Move to Github
  // - Move to firebase

  const [showQuote, setShowQuote] = useState<boolean>(false);
  const [quoteObj, setQuoteObj] = useState<object | null>(null);

  const reset = ():void => {
    setShowQuote(false);
    setQuoteObj(null);
  }
  
  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand><h2>RocketShip Insurance</h2></Navbar.Brand>
        <Form inline className="ml-auto">
          <i className='fas fa-rocket nav-icon' onClick={() => reset()}></i>
        </Form>
      </Navbar>
      {!showQuote ? 
        <Rating quoteObj={quoteObj} setQuoteObj={setQuoteObj} setShowQuote={setShowQuote}/> 
        : <QuoteInfo quoteObj={quoteObj} setQuoteObj={setQuoteObj} setShowQuote={setShowQuote}/>}
    </div>
  );
}

export default App;