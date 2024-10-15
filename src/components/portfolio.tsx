"use client";
import { Mail, Moon, Sun } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Discord from "./discord"
const Github: { (props: object): JSX.Element } = () => {
  return <svg role="img" viewBox="-5 -5 36 36" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
}
const DiscordIconL: { (props: object): JSX.Element } = () => {
  return <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.3179 1.48761C18.7931 0.791793 17.1483 0.287925 15.4315 0C15.3955 0 15.3715 0.0119969 15.3474 0.0359906C15.1313 0.407893 14.9032 0.887768 14.7351 1.25967C12.8862 0.983743 11.0493 0.983743 9.24847 1.25967C9.09239 0.875771 8.85227 0.407893 8.63617 0.0359906C8.62416 0.0119969 8.58814 0 8.56413 0C6.8473 0.287925 5.20249 0.80379 3.67775 1.48761C3.66575 1.48761 3.65374 1.49961 3.64173 1.5116C0.532218 6.08241 -0.320198 10.5452 0.100007 14.9481C0.100007 14.9721 0.112013 14.9961 0.136025 15.0081C2.17702 16.4957 4.16999 17.3955 6.11494 17.9953C6.15096 18.0073 6.17497 17.9953 6.19898 17.9713C6.6552 17.3475 7.07541 16.6996 7.42358 16.0038C7.44759 15.9678 7.42358 15.9198 7.38756 15.8958C6.73924 15.6559 6.11494 15.356 5.51465 15.0201C5.46662 14.9961 5.46662 14.9241 5.50264 14.9001C5.6227 14.8041 5.75476 14.7082 5.87482 14.6122C5.89883 14.6002 5.92285 14.5882 5.94686 14.6002C9.87277 16.3637 14.1348 16.3637 18.0127 14.6002C18.0368 14.5882 18.0728 14.5882 18.0968 14.6122C18.2168 14.7082 18.3369 14.8041 18.469 14.9001C18.517 14.9361 18.505 14.9961 18.457 15.0201C17.8567 15.368 17.2324 15.6559 16.584 15.8958C16.536 15.9078 16.524 15.9558 16.548 16.0038C16.9082 16.6876 17.3164 17.3475 17.7726 17.9593C17.7966 17.9833 17.8206 17.9953 17.8567 17.9833C19.8136 17.3835 21.8066 16.4837 23.8596 15.0081C23.8716 14.9961 23.8836 14.9721 23.8956 14.9481C24.3999 9.84942 23.0552 5.43458 20.3419 1.5116C20.3419 1.5116 20.3299 1.49961 20.3179 1.48761ZM8.01186 12.2728C6.82328 12.2728 5.85081 11.2051 5.85081 9.89741C5.85081 8.58975 6.81128 7.52203 8.01186 7.52203C9.22446 7.52203 10.1849 8.60175 10.1729 9.89741C10.1729 11.2051 9.21245 12.2728 8.01186 12.2728ZM15.9958 12.2728C14.8072 12.2728 13.8347 11.2051 13.8347 9.89741C13.8347 8.58975 14.7952 7.52203 15.9958 7.52203C17.2083 7.52203 18.1688 8.60175 18.1568 9.89741C18.1568 11.2051 17.2083 12.2728 15.9958 12.2728Z" fill="white"/>
  </svg>  
}
const DiscordIconD: { (props: object): JSX.Element } = () => {
  return <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.3179 1.48761C18.7931 0.791793 17.1483 0.287925 15.4315 0C15.3955 0 15.3715 0.0119969 15.3474 0.0359906C15.1313 0.407893 14.9032 0.887768 14.7351 1.25967C12.8862 0.983743 11.0493 0.983743 9.24847 1.25967C9.09239 0.875771 8.85227 0.407893 8.63617 0.0359906C8.62416 0.0119969 8.58815 0 8.56413 0C6.8473 0.287925 5.2025 0.80379 3.67775 1.48761C3.66575 1.48761 3.65374 1.49961 3.64173 1.5116C0.532218 6.08241 -0.320198 10.5452 0.100007 14.9481C0.100007 14.9721 0.112013 14.9961 0.136025 15.0081C2.17702 16.4957 4.16999 17.3954 6.11494 17.9953C6.15096 18.0073 6.17497 17.9953 6.19898 17.9713C6.6552 17.3475 7.07541 16.6996 7.42358 16.0038C7.44759 15.9678 7.42358 15.9198 7.38756 15.8958C6.73924 15.6559 6.11494 15.356 5.51465 15.0201C5.46662 14.9961 5.46662 14.9241 5.50264 14.9001C5.6227 14.8041 5.75476 14.7082 5.87482 14.6122C5.89883 14.6002 5.92285 14.5882 5.94686 14.6002C9.87277 16.3637 14.1349 16.3637 18.0127 14.6002C18.0368 14.5882 18.0728 14.5882 18.0968 14.6122C18.2168 14.7082 18.3369 14.8041 18.469 14.9001C18.517 14.9361 18.505 14.9961 18.457 15.0201C17.8567 15.368 17.2324 15.6559 16.584 15.8958C16.536 15.9078 16.524 15.9558 16.548 16.0038C16.9082 16.6876 17.3164 17.3475 17.7726 17.9593C17.7966 17.9833 17.8206 17.9953 17.8567 17.9833C19.8136 17.3835 21.8066 16.4837 23.8596 15.0081C23.8716 14.9961 23.8836 14.9721 23.8956 14.9481C24.3999 9.84942 23.0552 5.43458 20.3419 1.5116C20.3419 1.5116 20.3299 1.49961 20.3179 1.48761ZM8.01186 12.2728C6.82328 12.2728 5.85081 11.2051 5.85081 9.89741C5.85081 8.58975 6.81128 7.52203 8.01186 7.52203C9.22446 7.52203 10.1849 8.60175 10.1729 9.89741C10.1729 11.2051 9.21245 12.2728 8.01186 12.2728ZM15.9958 12.2728C14.8072 12.2728 13.8347 11.2051 13.8347 9.89741C13.8347 8.58975 14.7952 7.52203 15.9958 7.52203C17.2083 7.52203 18.1688 8.60175 18.1568 9.89741C18.1568 11.2051 17.2083 12.2728 15.9958 12.2728Z" fill="#23272A"/>
  </svg>
  
}
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)

  const skills = [
    { name: "React", url: "https://reactjs.org/" },
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/"},
    { name: "Java", url: "https://www.java.com/en/"},
    { name: "Docker", url: "https://www.docker.com/"},
    { name: "Git", url: "https://git-scm.com/" },
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Button
          variant={darkMode ? "ghost" : "g2"}
          size="icon"
          className="fixed top-4 right-4"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>

        <header className="text-center mb-12">
          <Image
            src="https://avatars.githubusercontent.com/httphypixelnet"
            alt="Profile Picture"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 text-4xl font-bold">Yarden Shavit</h1>
          <p className={`mt-2 text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Full Stack Developer</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
            I&apos;m a (mostly) full stack web dev who specializes in TypeScript, ReactJS, and Java. I&apos;ve also used C, C++, and Rust for writing desktop applications, and CLI tools, and Python for an AI/ML classifier.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className={darkMode ? "bg-gray-800 text-white" : ""}>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription className={darkMode ? "text-gray-300" : ""}>
                  A brief description of Project 1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Technologies used: React, Node.js, MongoDB
                </p>
                <Button className="mt-4" variant={darkMode ? "secondary" : "outline"}>
                  View Project
                </Button>
              </CardContent>
            </Card>
            <Card className={darkMode ? "bg-gray-800 text-white" : ""}>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription className={darkMode ? "text-gray-300" : ""}>
                  A brief description of Project 2
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Technologies used: Python, Django, PostgreSQL
                </p>
                <Button className="mt-4" variant={darkMode ? "secondary" : "outline"}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Button
                key={skill.name}
                variant={darkMode ? "secondary" : "outline"}
                className="rounded-full text-sm"
                asChild
              >
                <a href={skill.url} target="_blank" rel="noopener noreferrer">
                  {skill.name}
                </a>
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/httphypixelnet" target="_blank">
            <Button variant={darkMode ? "secondary" : "outline"} size="icon">
              <Github />
              <span className="sr-only">GitHub</span>
            </Button>
            </Link>
            <Discord>
              <Button variant={darkMode ? "secondary" : "outline"} size="icon">
                {darkMode ? <DiscordIconD /> : <DiscordIconL />}
                <span className="sr-only">Discord</span>
              </Button>
            </Discord>
            <Link href="mailto:httphypixelnet@proton.me" target="_blank">
              <Button variant={darkMode ? "secondary" : "outline"} size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}