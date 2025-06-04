import '../App.css';
import git from '../assets/githubIcon.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';

function SocialLink({ href, icon, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt} className="w-20 h-20 mx-2" />
    </a>
    );
}



export const About = () => {
  return (
    <>
    <div  className="absolute left-170 top-60 text-center">
    <div>
    <p className="work-sans-bold  text-5xl text-yellow-950 border-amber-950 ">Hi, I am SHARAN SIDH</p>
    <p className='mt-3 work-sans-bold text-6xl text-indigo-700 '>Software Developer</p>
    <p className='comfortaa-weight mt-5 text-2xl '>Passionate software developer skilled in building <br /> efficient, scalable applications. Always eager to learn, solve<br /> real-world problems, and create meaningful user experiences.</p>
    </div>
    
    <div className="flex justify-center mt-5 border-t-2 w-1/2 mx-auto pt-5">
      <SocialLink href="https://github.com/sharansidh-0301" icon={git} alt="GitHub" />
      <SocialLink href="https://www.linkedin.com/in/sharansidh0301/" icon={linkedin} alt="LinkedIn" />
        <SocialLink href="mailto:sharansidh0301@gmail.com" icon={gmail} alt="Gmail" />
    </div>
    </div>

   

    </>
  )
}
