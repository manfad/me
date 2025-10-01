import Paper from "./components/Paper";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="pageWrapper" >
      <Paper>
        <p>Name :
          <span className="font-bold ms-2">

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
        <p>Tech Skills : </p>
        <ul style={{ paddingLeft: '30px' }}>
          <li>Frontend:           <RoughNotation type="highlight" color="yellow" show >
            Vue, Nuxt, React, Next </RoughNotation></li>
          <li>Backend :          <RoughNotation type="highlight" color="yellow" show >
            Node.js / Java</RoughNotation></li>
        </ul>
        <p>Other Skills :</p>
        <ul style={{ paddingLeft: '30px' }}>
          <li>Trilingual :
            Chinese, English, Melayu</li>
          <li>Adaptable and quick learner</li>
          <li>Adventurous in exploring new tools</li>
        </ul>
        <br />
        <RoughNotation type="bracket" show animate={false} brackets={['left', 'right']}>
          <p>Contact : </p>

          <ul>
            <li>
              <Mail className="inline" size={14} /> : <a href="mailto:">manfad99@gmail.com</a>
            </li>
            <li>
              <RoughNotation type="crossed-off" color="red" show animate={false}>
                <Twitter className="inline" size={14} />
              </RoughNotation>
              <span className="ms-2">
                X : <a href="">@manfad</a>
              </span>
            </li>
            <li>
              <Github className="inline" size={14} /> : <a href="">@manfad</a>

            </li>
            <li>
              <Linkedin className="inline mb-1" size={14} /> : <a href="https://www.linkedin.com/in/manfredtham/" target="_blank" rel="noopener noreferrer">manfredtham</a>
            </li>
          </ul>
        </RoughNotation>

      </Paper>
    </div>
  );
}
