
import Education from './sections/education'
import Projects from './sections/project'
import Skills from './sections/skills'
import Experience from './sections/experience'
import About from './sections/about'
import NavigationButton from './sections/navigatiobButton'

export default function Home() {
  return (
    <div className='w-full font-inter'>
      <div className='flex flex-col md:flex-row w-full md:w-[80%] mx-auto gap-8  p-2 md:p-6 rounded-[10px]'>
        <div className='flex flex-col md:w-1/2  w-full  gap-8'>
          <div className='w-full flex flex-col gap-8'>
            <About />
            <NavigationButton />
            <Projects />
          </div>
          <div>
            <Education />
          </div>
        </div>
        <div className='flex flex-col w-full md:w-1/2 gap-8'>
          <div>
            <Skills />
          </div>
          <div>
            <Experience />
          </div>

        </div>
      </div>
    </div>
  )
}
