"use client"

import { Memo } from "./components/Memo"
import Note from "./components/Note"
import { Linkedin, Github, Mail } from "lucide-react"
import { RoughNotation } from "react-rough-notation"
import { useState } from "react"

export default function Home() {
  const [activePage, setActivePage] = useState<"intro" | "about" | "projects">("intro")

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="relative flex items-center justify-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-[80vw] sm:max-w-[530px] md:max-w-[450px] lg:max-w-[450px] min-h-[500px] sm:min-h-[600px] md:min-h-[650px]">
          {/* Intro Paper */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              zIndex: activePage === "intro" ? 3 : 1,
              transform: activePage === "intro" ? "scale(1)" : "scale(0.95)",
            }}
          >
            <Note
              rotation={-1}
              bookmarkText="intro"
              bookmarkColor="pink"
              onClick={() => setActivePage("intro")}
              isActive={activePage === "intro"}
            >
              <p className="text-sm sm:text-base">
                Name :<span className="font-bold ms-2 text-base sm:text-xl md:text-2xl">MANFRED THAM</span>
              </p>
              <p className="text-sm sm:text-base">
                Role :
                <span className="font-bold">
                  <RoughNotation type="underline" color="blue" show>
                    Fullstack Developer
                  </RoughNotation>
                </span>
              </p>
              <p className="text-sm sm:text-base">
                Location :<span className="font-bold ms-2">Malaysia, Sabah</span>
              </p>
              <br />
              <RoughNotation type="bracket" show animate={false} brackets={["left", "right"]}>
                <p className="text-sm sm:text-base">Tech Skills : </p>
                <ul style={{ paddingLeft: "30px", fontSize: "clamp(10px, 2vw, 12px)" }}>
                  <li>
                    Frontend:{" "}
                    <RoughNotation type="highlight" color="yellow" show>
                      Vue / React{" "}
                    </RoughNotation>
                  </li>
                  <li>
                    Backend :{" "}
                    <RoughNotation type="highlight" color="yellow" show>
                      Node.js / Java
                    </RoughNotation>
                  </li>
                </ul>
                <p className="text-sm sm:text-base">Other Skills :</p>
                <ul style={{ listStyle: "disc", paddingLeft: "30px", fontSize: "clamp(10px, 2vw, 12px)" }}>
                  <li>Chinese, English, Melayu</li>
                  <li>Adaptable and quick learner</li>
                  <li>Adventurous in exploring new tools</li>
                </ul>
              </RoughNotation>
              <br />
              <Memo title="Contact Me" rotation={-10} position={{ x: 50, y: 0 }} size={{ width: 250, height: 180 }}>
                <ul className="text-xs sm:text-sm">
                  <li className="break-all">
                    <Mail className="inline" size={14} /> : <a href="mailto:manfad99@gmail.com">manfad99@gmail.com</a>
                  </li>
                  <li className="break-all">
                    <Github className="inline" size={14} /> : <a href="https://github.com/manfad">@manfad</a>
                  </li>
                  <li className="break-all">
                    <Linkedin className="inline mb-1" size={14} /> :{" "}
                    <a href="https://www.linkedin.com/in/manfredtham/" target="_blank" rel="noopener noreferrer">
                      manfredtham
                    </a>
                  </li>
                </ul>
              </Memo>
            </Note>
          </div>

          {/* About Paper */}
          <div
            className="absolute inset-0 left-2 sm:left-8 transition-all duration-500"
            style={{
              top: activePage === "about" ? "35px" : "13px",
              zIndex: activePage === "about" ? 3 : 2,
              transform: activePage === "about" ? "scale(1) translate(0, 0)" : "scale(0.95) ",
            }}
          >
            <Note
              rotation={4}
              bookmarkColor="lightgreen"
              bookmarkText="about"
              onClick={() => setActivePage("about")}
              isActive={activePage === "about"}
            >
              <h2 className="font-bold text-lg sm:text-xl">About Me</h2>
              <RoughNotation type="highlight" color="yellow" multiline show>
                <span className="text-sm sm:text-base">
                  I am a passionate fullstack developer with experience in building modern web applications. I love
                  creating elegant solutions to complex problems and continuously learning new technologies.
                </span>
              </RoughNotation>
              <div className="mt-6 sm:mt-8">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Interests:</h3>
                <ul style={{ listStyle: "disc", paddingLeft: "30px", fontSize: "clamp(12px, 2vw, 14px)" }}>
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
            className="absolute inset-0 left-4 sm:left-10 transition-all duration-500"
            style={{
              top: activePage === "projects" ? "60px" : "45px",
              zIndex: activePage === "projects" ? 3 : 1,
              transform: activePage === "projects" ? "scale(1) translate(0, 0)" : "scale(0.95)",
            }}
          >
            <Note
              rotation={7}
              bookmarkColor="skyblue"
              bookmarkText="projects"
              onClick={() => setActivePage("projects")}
              isActive={activePage === "projects"}
            >
              <h2 className="font-bold text-lg sm:text-xl mb-4">Projects</h2>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Project 1</h3>
                  <p className="text-xs sm:text-sm">A fullstack web application using React and Node.js</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Project 2</h3>
                  <p className="text-xs sm:text-sm">E-commerce platform with Vue.js frontend</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Project 3</h3>
                  <p className="text-xs sm:text-sm">Mobile-responsive dashboard with real-time data</p>
                </div>
              </div>
            </Note>
          </div>
        </div>
      </div>
    </div>
  )
}
