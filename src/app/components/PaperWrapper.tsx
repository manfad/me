import Paper from "./Paper";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Memo } from "./Memo";

interface PaperWrapperProps {
  rotation?: number;
  className?: string;
}

export default function PaperWrapper({  rotation, className }: PaperWrapperProps) {
  return (
    <div className="pageWrapper"
     style={{
      transform: `rotate(${rotation}deg)`,
    }}
    >
      <Paper >
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
            <li>Frontend:           <RoughNotation type="highlight" color="yellow" show >
              Vue / React </RoughNotation></li>
            <li>Backend :          <RoughNotation type="highlight" color="yellow" show >
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
        {/* <Memo
          title="Contact Me"
          rotation={-10}
          position={{ x: 100, y: 380 }}
          size={{ width: 250, height: 200 }}
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
        </Memo> */}


      </Paper>
    </div>
  );
}
