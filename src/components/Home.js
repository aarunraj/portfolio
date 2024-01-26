import { HashLink as Link } from "react-router-hash-link";
function Home() {
  
  const openPage = () =>{
    window.location = 'https://www.linkedin.com/in/antonyarunraj/'
  }

  return (
        <div className='profile' id='#about'>
          <h1 className='profile-heading1'>Full Stack Developer</h1>
          <h1 className='profile-heading2'>Hello, my name is Arunraj A</h1>
          <p className='profile-para'>
            Welcome to my website. To read more about my projects 
            and my contact details hear. Feel free to contact.
          </p>
          <div>
          <Link to='#addProjects' className='link' smooth><button className='button1'>Projects</button></Link>
          <button onClick={openPage} type="button" className='button2'>LinkedIn</button>
          </div>
        </div>
  );
}

export default Home;
