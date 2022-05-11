import React,{useState} from 'react';
import './App.css'; 

const apiKey ='38ad5429-250d-44cf-bedd-b6999c3bc982'
const url ='https://api.thecatapi.com/v1/images/search'

function App() {

  const [catUrl, setcatUrl] = useState('https://cdn2.thecatapi.com/images/d9f.jpg');

  const getCat= ()=> {
    console.log('Wow');

    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
        console.log('Cats :', cats);
        const catUrl =cats[0].url;
        setcatUrl(catUrl)
      })
      .catch((error)=>{
        console.log('Erro :', error);
      });
  }

  console.log('Cat Url: ',catUrl);


  return(
    <div className='app'>
      <h1> App Dep Trai </h1>
      <img src={catUrl} alt= ""/>
      <button onClick={getCat}> Get New </button>
    </div>
  );

}


export default App;