import { Memo } from "./components/Memo";
import PaperWrapper from "./components/PaperWrapper";
import { Linkedin, Github, Mail } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-[500px] min-h-[650px]">
        {/* Third paper - bottom layer */}
        <div className="absolute inset-0" style={{ 
          zIndex: 3
        }}>
          <PaperWrapper rotation={-1} bookmarkText="intro" bookmarkColor="pink">
            <p>Name :
          <span className="font-bold ms-2 font-q-2xl">
            <RoughNotation type="highlight" color="lime" show >
              MANFRED THAM
            </RoughNotation>
          </span>
        </p>
        <p>Role :
          <span className="font-bold ms-2">
            <RoughNotation type="underline" color="blue" show >
              Fullstack Developer
            </RoughNotation>
          </span>
        </p>
        <p>Location :
          <span className="font-bold ms-2">
            Malaysia , Sabah
          </span>
        </p>
        <br />
        <RoughNotation type="bracket" show animate={false} brackets={['left', 'right']}>
          <p>Tech Skills : </p>
          <ul style={{ paddingLeft: '30px', fontSize: '12px' }}>
            <li>Frontend: <RoughNotation type="highlight" color="yellow" show >
              Vue / React </RoughNotation></li>
            <li>Backend : <RoughNotation type="highlight" color="yellow" show >
              Node.js / Java</RoughNotation></li>
          </ul>
          <p>Other Skills :</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '30px', fontSize: '12px' }}>
            <li>Chinese, English, Melayu</li>
            <li>Adaptable and quick learner</li>
            <li>Adventurous in exploring new tools</li>
          </ul>
        </RoughNotation>
        <br />
           <Memo
          title="Contact Me"
          rotation={-10}
          position={{ x: 100, y: 380 }}
          size={{ width: 250, height: 180 }}
        >

          <ul>
            <li>
              <Mail className="inline" size={14} /> : <a href="mailto:manfad99@gmail.com">manfad99@gmail.com</a>
            </li>
            <li>
              <Github className="inline" size={14} /> : <a href="">@manfad</a>
            </li>
            <li>
              <Linkedin className="inline mb-1" size={14} /> : <a href="https://www.linkedin.com/in/manfredtham/" target="_blank" rel="noopener noreferrer">manfredtham</a>
            </li>
          </ul>
        </Memo> 
          </PaperWrapper>

        </div>

        {/* Second paper - middle layer */}
        <div className="absolute inset-0 top-5 left-5" style={{
          zIndex: 2 
        }}>
          <PaperWrapper rotation={5} bookmarkColor="lightgreen" bookmarkText="about"  />
        </div>

        {/* First paper - top layer (visible) */}
        <div className="absolute inset-0 top-9 left-9" style={{ 
          zIndex: 1 
        }}>
          <PaperWrapper rotation={10} bookmarkColor="skyblue" bookmarkText="projects"/>
        </div>
      </div>
    </div>
  );
}