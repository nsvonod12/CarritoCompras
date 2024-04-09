import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div className='flex justify-around p-8 border-t-2 border-gray-300' >
      <div>  
        <h3 className='text-lg font-bold'>© Donovan Romero Escogido</h3>
      </div>
      <div className='flex gap-8 text-2xl'>
        <a href="https://www.linkedin.com/in/donovan-romero"><FontAwesomeIcon className='hover:-translate-y-1 hover:text-blue-700 ease-in duration-150 transition-all' icon={faLinkedin}/></a>
        <a href=""><FontAwesomeIcon className='hover:-translate-y-1 hover:text-purple-700 ease-in duration-150 transition-all' icon={faGithub}/></a>
        <a href="mailto:donovanre1200@gmail.com"><FontAwesomeIcon className='hover:-translate-y-1 hover:text-red-700 ease-in duration-150 transition-all' icon={faEnvelope}/></a>
      </div>
    </div>
  )
}

export default Footer