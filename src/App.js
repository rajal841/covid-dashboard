import React, { Component } from 'react';
// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api/index';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import logo from './logo.svg';
import './App.css';
import coronaImage from '../src/images/covid-image.png';



class App extends Component{
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
     const fetchdata=await fetchData();
     this.setState({
       data:fetchdata
     })
  }

  handleCountryChange=async(country)=>{
    const fetchdata=await fetchData(country);
 this.setState({
   data:fetchdata,
   country:country,
 })
  }
  render(){
    const {data,country}=this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"></img>
<Cards data={data}/>
<Charts data={data} country={country}/>
<CountryPicker handleCountryChange={this.handleCountryChange}/>
      </div>
    )
  }
}
{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/}

export default App;
