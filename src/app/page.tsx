"use client";
import { Memo } from "./components/Memo";
import Note from "./components/Note";
import { Linkedin, Github, Mail } from "lucide-react";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

export default function Home() {
 const [activePage, setActivePage] = useState<'intro' | 'about' | 'projects'>('intro');

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-[500px] min-h-[650px]">
        {/* Intro Paper */}
        <div 
          className="absolute inset-0 transition-all duration-500" 
          style={{ 
            zIndex: activePage === 'intro' ? 3 : 1,
            transform: activePage === 'intro' ? 'scale(1)' : 'scale(0.95)',
          }}
        >
          <Note 
            rotation={-1} 
            bookmarkText="intro" 
            bookmarkColor="pink"
            onClick={() => setActivePage('intro')}
            isActive={activePage === 'intro'}
          >
            <p>Name :
              <span className="font-bold ms-2 font-q-2xl">
                <RoughNotation type="highlight" color="lime" show>
                  MANFRED THAM
                </RoughNotation>
              </span>
            </p>
            <p>Role :
              <span className="font-bold ms-2">
                <RoughNotation type="underline" color="blue" show>
                  Fullstack Developer
                </RoughNotation>
              </span>
            </p>
            <p>Location :
              <span className="font-bold ms-2">
                Malaysia, Sabah
              </span>
            </p>
            <br />
            <RoughNotation type="bracket" show animate={false} brackets={['left', 'right']}>
              <p>Tech Skills : </p>
              <ul style={{ paddingLeft: '30px', fontSize: '12px' }}>
                <li>Frontend: <RoughNotation type="highlight" color="yellow" show>
                  Vue / React </RoughNotation></li>
                <li>Backend : <RoughNotation type="highlight" color="yellow" show>
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
                  <Github className="inline" size={14} /> : <a href="https://github.com/manfad">@manfad</a>
                </li>
                <li>
                  <Linkedin className="inline mb-1" size={14} /> : <a href="https://www.linkedin.com/in/manfredtham/" target="_blank" rel="noopener noreferrer">manfredtham</a>
                </li>
              </ul>
            </Memo>
          </Note>
        </div>

        {/* About Paper */}
        <div 
          className="absolute inset-0 left-6 transition-all duration-500" 
          style={{
            top: activePage === 'about' ? '40px' : '20px',
            zIndex: activePage === 'about' ? 3 : 2,
            transform: activePage === 'about' ? 'scale(1) translate(0, 0)' : 'scale(0.95) ',
          }}
        >
          <Note 
            rotation={3} 
            bookmarkColor="lightgreen" 
            bookmarkText="about"
            onClick={() => setActivePage('about')}
            isActive={activePage === 'about'}
          >
            <h2 className="font-bold text-xl mb-4">About Me</h2>
            <p className="mb-4">
              I'm a passionate fullstack developer with experience in building modern web applications.
            </p>
            <p className="mb-4">
              I love creating elegant solutions to complex problems and continuously learning new technologies.
            </p>
            <div className="mt-8">
              <h3 className="font-semibold mb-2">Interests:</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '30px', fontSize: '14px' }}>
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Open Source</li>
                <li>Learning New Technologies</li>
              </ul>
            </div>
          </Note>
        </div>

        {/* Projects Paper */}
        <div 
          className="absolute inset-0 left-10 transition-all duration-500" 
          style={{ 
            top: activePage === 'projects' ? '60px' : '50px',
            zIndex: activePage === 'projects' ? 3 : 1,
            transform: activePage === 'projects' ? 'scale(1) translate(0, 0)' : 'scale(0.95)',
          }}
        >
          <Note 
            rotation={7} 
            bookmarkColor="skyblue" 
            bookmarkText="projects"
            onClick={() => setActivePage('projects')}
            isActive={activePage === 'projects'}
          >
            <h2 className="font-bold text-xl mb-4">Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-base">Project 1</h3>
                <p className="text-sm">A fullstack web application using React and Node.js</p>
              </div>
              <div>
                <h3 className="font-semibold text-base">Project 2</h3>
                <p className="text-sm">E-commerce platform with Vue.js frontend</p>
              </div>
              <div>
                <h3 className="font-semibold text-base">Project 3</h3>
                <p className="text-sm">Mobile-responsive dashboard with real-time data</p>
              </div>
            </div>
          </Note>
        </div>
      </div>
    </div>
  );
}