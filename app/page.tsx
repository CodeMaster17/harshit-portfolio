
import Education from './sections/education'
import Projects from './sections/project'
import Skills from './sections/skills'
import Experience from './sections/experience'
import About from './sections/about'
import NavigationButton from './sections/navigatiobButton'

export default function Home() {
  return (
    <div className='w-full font-poppins'>
      <div className='mx-auto flex w-full flex-col gap-8 rounded-[10px] p-2  md:w-[80%] md:flex-row md:p-6'>
        <div className='flex w-full flex-col  gap-8  md:w-1/2'>
          <div className='flex w-full flex-col gap-8'>
            <About />
            <NavigationButton />
            <Projects />
          </div>
          <div>
            <Education />
          </div>
        </div>
        <div className='flex w-full flex-col gap-8 md:w-1/2'>
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
