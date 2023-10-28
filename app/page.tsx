
import Education from './sections/education'
import Projects from './sections/project'
import Skills from './sections/skills'
import Experience from './sections/experience'
import About from './sections/about'

export default function Home() {
  return (
    <div className='w-full'>
      {/* <About /> */}
      <div className='flex w-[80%] mx-auto gap-8  p-6 rounded-[10px]'>
        <div className='flex flex-col w-1/2  gap-8'>
          <div className='w-full flex flex-col gap-8'>
            <About />
            <Projects />
          </div>
          <div>
            <Education />
          </div>
        </div>
        <div className='flex flex-col w-1/2 gap-8'>
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
