import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {}

  componentDidMount() {
    axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL?period=quarter`)
    .then(res =>{
      this.setState({
        apple: res.data.financials
      }, ()=>{
        console.log(res.data)
      })
    })
  }
  

  render() {
    const tickers = ['AAPL', 'MSFT', 'AMZN', 'FB', 'GOOGL', 'UBER', 'INTC', 'CMCSA', 'CSCO', 'WORK']

    

  return (
    <div className="App">
      
      
    </div>
  );
  }
}

export default App;
