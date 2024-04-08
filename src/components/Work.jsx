import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Project from './Project'
import data from '../data'

const Work = () => {
    const renderedProjects = data.projects.map((project)=>(
        <Project title={project.title} description={project.description} key={project.id} url={project.url}/>
    ))
  return (
    <>
        <div className='px-2 md:px-28 lg:px-32'>
            <Header/>
            <div>
                <h2 className='mt-32 text-4xl text-center'>My Work</h2>
                <p className='mt-8 md:text-xl text-lglg:text-2xl text-gray-600 text-center mb-4'>Selected works I've taken on in the past.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-4">

                {renderedProjects}
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Work