import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js'
import Header from './components/Header.js'
import Projects from './components/Projects.js'
import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import './style.css'

const projectDetail = [
  {
      title:"Jobby App",
      description:'Brought to life an all-encompassing job search platform, Jobby App. Technologies used : React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication',
      link:"https://jobbysearchapp.ccbp.tech/",
      image:project1
  },
  {
      title:"Ipl Dashboard",
      description:'Built an interactive hub for IPL teams and matches information.Technologies used : React JS, Routing, REST API Calls, CSS, Bootstrap.',
      link:"https://iplteamboard.ccbp.tech/",
      image:project2
  },
  {
      title:"CryptoCurrency",
      description:'Developed a comprehensive cryptocurrency tracking solution.Technologies used : React JS, REST API Calls, CSS, Bootstrap.',
      link:"https://cryptositetrack.ccbp.tech/",
      image:project3
  }
]

function App() {
  return (
    <BrowserRouter>
    <div className='bg-container'>
      <div className='bg-card'>
        <Header/>
        <Home/>
      </div>
      <Projects projectDetail={projectDetail}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
