import { ProjectCard } from './cards.js'
import projectsJSON from '../public/projects.json'
import Section from './section.js'


let projects = JSON.parse(JSON.stringify(projectsJSON))

export default function Projects () {
  return (
    <Section name=''>
      <div><h3 className='text-xl text-stone-300 pb-5 italic'>Some projects I've worked on</h3>
      <div className='grid grid-cols-2 lg:grid-cols-4 md:gap-4 sm:gap-2 flex-wrap items-center justify-center'>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            img={project.images[0]}
            alt={project.alts[0]}
            title={project.title}
            className=''
            subtitle={project.subtitle}
            language={project.skills.join(' | ')}
          />
        ))}
      </div>
      </div>
    </Section>
  )
}