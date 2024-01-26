import React,{useState} from 'react'
import {AiFillInstagram} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import wave from '../wave.png'
import project1 from '../project1.png'

import '../style.css'

const Projects = (props) => {
    const projectDetail = props.projectDetail
    const [project,addProject] = useState(projectDetail)
    const [title,setTitle] = useState('')
    const [link,setLink] = useState('')
    const [description,setDescription] = useState('')
    const [image] = useState(project1)

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(projectDetail)
        const newList = projectDetail.concat({title,link,description,image})
        addProject(newList);
    }

    const openPage = (link) =>{
        window.location = link
    }

    return (
    <>
    <div className='form-container' id='addProjects'>
        <h1 className='form-heading'>Add Project</h1>
        <form onSubmit={handleSubmit} className='form-card'>
            <label htmlFor='projectname' className='label'>Project Name</label>
            <input onChange={(e)=>setTitle(e.target.value)} id='projectname' type='text' name='title' className='input-text' />
            <label htmlFor='projectlink' className='label'>Project link</label>
            <input onChange={(e)=>setLink(e.target.value)} id='projectlink' type='text' name='link' className='input-text'/>
            <label htmlFor='description' className='label'>Description</label>
            <textarea onChange={(e)=>setDescription(e.target.value)} id='description' type='text' name='description' className='input-area'></textarea>
            <div className='button-card'>
            <button className='submit' type='submit'>Add</button>
            </div>
        </form>
        <img className='wave' src={wave} alt='wave'/>
    </div>
    <div className='project-container' id='projects'>
        <h1 className='project-heading'>Projects</h1>
        <ul className='project-card'>
            {project.map((each,id)=>(
            <li key={id} className='project-list'>
                <div className='project-detail'>
                    <h1 className='project-title'>{each.title}</h1>
                    <p className='project-description'>{each.description}</p>
                    <button type='button' onClick={()=>openPage(each.link)} className='project-button'>View Project</button>
                </div>
                <img src={each.image} className='project-image' alt='project title'/>
            </li>
             ))}
        </ul>
            <div className='logo-card' id='contacts'>
                <AiFillInstagram size={48}/>
                <FaLinkedin size={48} onClick={()=>openPage('https://www.linkedin.com/in/antonyarunraj/')}/>
                <IoIosMail size={48}/>
            </div>
            <p className='logo-detail'>Copyright @ 2024. All rights reserved</p>
        <img className='wave' src={wave} alt='wave' />
    </div>
    </>
  )
}

export default Projects

