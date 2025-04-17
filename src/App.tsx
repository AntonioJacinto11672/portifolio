import { FaLaravel, FaLinkedinIn, FaReact, FaSass } from "react-icons/fa"
import { FaGithub, FaNodeJs } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io"
import Title from "./components/Title"
import Skills from "./components/Skills"
import Divide from "./components/Divide"
import Button from "./components/Button"
import Allapps from "./components/works/Allapps"
import { useState } from "react"
import WebApps from "./components/works/WebApps"
import MobileApps from "./components/works/MobileApps"
import OthersApps from "./components/works/OthersApps"
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5"
import { SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si"
import { TfiQuoteRight } from "react-icons/tfi"
import { RiDoubleQuotesR } from "react-icons/ri"


const componentProject = [
  <Allapps />,
  <WebApps />,
  <MobileApps />,
  <OthersApps />,
]
function App() {
  const [projectsValue, setProjectsValue] = useState(0)


  return (
    <>
      <main className=" bg-gray-300 text-gray-600 mx-40">

        <header className="bg-gray-100 flex flex-col">
          <div className="flex justify-between items-center px-2 mx-20 my-3 ">

            <div className="flex gap-1 items-center ">
              <div className="w-10 h-10  flex justify-center items-center">
                <img src="./Group.svg" alt="" className="object-contain h-8" />
              </div>
              <p className="   text-2xl font-bold">António Jacinto</p>
            </div>

            <nav>
              <ul className="flex gap-x-14">
                <li><a href="" className="hover:text-gray-900">Home</a></li>
                <li><a href="" className="hover:text-gray-900">sobre</a></li>
                <li><a href="" className="hover:text-gray-900">portifólio</a></li>
                <li><a href="" className="hover:text-gray-900">serviços</a></li>
                <li><a href="" className="hover:text-gray-900">resumo</a></li>
                <li><a href="" className="hover:text-gray-900">contato</a></li>
              </ul>
            </nav>
          </div>

          <div className="header-content flex  justify-between mx-20 p-4 mt-10 mb-10">
            <div className="about-me-header flex flex-col justify-between items-start">
              <div className="text-gray-600">
                <p className="font-semibold">Olá pessoal,</p>
                <h2 className="uppercase font-bold text-3xl">Eu sou um <br /> programador</h2>
                <p className="font-semibold">Seja bem vindo ao meu portifólio website</p>
              </div>
              <div className="">
                <button type="button" className="py-2 px-4 text-white text-xs cursor-pointer hover:bg-gray-600 font-semibold bg-gray-900 rounded-2xl">Saiba mais sobre min</button>
              </div>
              <div className="social-icons flex gap-x-4">
                <FaGithub size={22} />
                <FaLinkedinIn size={22} />
                <IoLogoInstagram size={22} />
              </div>
            </div>
            <div className="image-header w-[705] h-[697] flex justify-center items-center ">
              <img src="./Home_art1.svg" alt="background " className="object-contain h-[500px] w-[700]" />
            </div>
          </div>
        </header>

        <Divide title="Sobre min" />

        <section className=" bg-gray-100">
          <div className="mx-20 p-4">
            {/* init title description */}
            <div className="flex flex-col gap-y-2 items-center my-5 text-gray-600">
              <div className="h-[150px] w-[155px] rounded-4xl border-4 border-gray-500 overflow-hidden ">
                <img src="IMG_0007.JPEG" alt="" className="object-cover h-full w-full" />
              </div>
              <div>
                <Title firstTitle="António" secondTitle="Jacinto" />
              </div>
              <div>
                <p className="font-semibold text-center">
                  My name is António José Jacinto of Luanda - Angola, I'm from Angola, Viana/Luanda.  I am a student of Systems Analysis and Development at the University of Luanda. I am passionate about technology and programming.
                </p>
              </div>
            </div>
            {/* ebd title description */}

            {/* init hard Skill */}

            <div className="py-14">
              <div className="flex flex-col gap-y-2 items-center my-5 text-gray-600">
                <Title firstTitle="Hard" secondTitle="Skills" />
                <div className="flex gap-x-14 justify-between text-gray-600">
                  <Skills title="HTML" positiveStarNumber={5} negativeStarNumber={0} />
                  <Skills title="CSS" positiveStarNumber={4} negativeStarNumber={1} />
                  <Skills title="JavaScript" positiveStarNumber={4} negativeStarNumber={1} />
                  <Skills title="Php" positiveStarNumber={3} negativeStarNumber={2} />
                </div>
                <div className="flex gap-x-14 justify-between text-gray-600">
                  <Skills title="Node" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="React" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="React Native" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="Laravel" positiveStarNumber={2} negativeStarNumber={3} />
                </div>
                <div className="flex gap-x-14 justify-between text-gray-600">
                  <Skills title="Mysql" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="postgress" positiveStarNumber={2} negativeStarNumber={3} />
                  <Skills title="MongoDB" positiveStarNumber={1} negativeStarNumber={4} />
                  <Skills title="SCSS" positiveStarNumber={2} negativeStarNumber={3} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Skills  */}
        <Divide title="Meus Projectos" />
        {/* init Meu portifolio */}
        <section className=" bg-gray-100">
          <div className="mx-20 p-4">

            <div className="my-10 flex items-end">
              <Title firstTitle="Meu" secondTitle="Portifólio" brState={true} />
              <p className="font-bold  text-md pl-20 ">Estes são alguns dos trabalhos e  <br /> projetos que já realizei</p>
            </div>

            <div>
              {/* buttons */}

              <div className="flex gap-x-4  my-5">
                <Button text="Todos" color={projectsValue === 0 ? "primary" : "secondary"} onClick={() => setProjectsValue(0)} type="button" />
                <Button text="Web App" color={projectsValue === 1 ? "primary" : "secondary"} onClick={() => setProjectsValue(1)} type="button" />
                <Button text="Mobile App" color={projectsValue === 2 ? "primary" : "secondary"} onClick={() => setProjectsValue(2)} type="button" />
                <Button text="Outros" color={projectsValue === 3 ? "primary" : "secondary"} onClick={() => setProjectsValue(3)} type="button" />
              </div>
            </div>
            {/* end buttons */}
            {/* init projects */}
            <div className="flex flex-col  items-center my-5 text-gray-600 ">
              {componentProject[projectsValue]}
            </div>
          </div>
        </section>

        <Divide title="Minhas techs" />

        <section className=" bg-gray-100">

          <div className="mx-20 p-4 flex flex-col gap-y-2 items-center my-5 text-gray-600 py-20">
            <div className="mx-auto">
              <Title firstTitle="Minhas" secondTitle="Techs" />
            </div>

            <div className="text-center mt-20">
              <p className="text-md">Tecnologias</p>
              <h2 className="capitalize font-bold text-3xl">Já  <span className="text-gray-800">Utilizadas</span></h2>
            </div>
            {/* icons */}
            <div className="flex gap-x-14 justify-between text-gray-600 mt-10">
              <FaNodeJs size={75} />
              <SiPhp size={75} className="text-gray-900" />
              <FaLaravel size={75} />
              <FaSass size={75} />
            </div>


            <div className="text-center mt-20">
              <p className="text-md">Tecnologias</p>
              <h2 className="capitalize font-bold text-3xl">Atualmente   <span className="text-gray-800">Desenvolvendo</span></h2>
            </div>
            {/* icons */}
            <div className="flex gap-x-14 justify-between text-gray-600 mt-10 flex-wrap">
              <IoLogoHtml5 size={75} className="" />
              <IoLogoCss3 size={75} className="" />
              <IoLogoJavascript size={75} className="" />
              <SiTypescript size={75} />
              <SiTailwindcss size={75} className="text-gray-900" />
              <FaReact size={75} />
            </div>
          </div>
        </section>

        <Divide title="Minhas techs" />

        <section className=" bg-gray-100">
          <div className="mx-20 p-4">

            <div className="my-10 flex flex-row-reverse items-end">
              <Title firstTitle="Experiência" secondTitle="Profissional" brState={true} />
              <p className="font-bold  text-md pr-20 text-right">Minha jornada esta apenas <br /> começando, sempre aprendendo</p>
            </div>


            {/* end buttons */}
            {/* init projects */}
            {/*  <div className="flex flex-col  items-center my-5 text-gray-600 ">
              <div className="flex flex-wrap gap-x-6 flex-row items-stretch">
                <div className="bg-gray-900 w-[300px] h-[190px] flex-grow  self-stretch rounded-2xl overflow-auto cursor-pointer" title="Sistema de gestão de mecanica">
                  <div className="text-center top-0 left-0 w-full h-full bg-gray-900 opacity-50 rounded-2xl flex flex-col justify-center items-center text-white">
                    <h4 className="text-white text-2xl">Sistema de gestão de mecânica</h4>
                    <p className="text-white">Sistema que permite controlar, os funcoionários, trabalhos feitos, entra e saída de uma mecânica... </p>
                  </div>
                </div>
                <div className="bg-gray-600 w-[300px] h-[150px] flex-grow self-stretch rounded-2xl">2</div>
                <div className="bg-gray-300 w-[300px] h-[190px] flex-grow self-stretch rounded-2xl">3</div>
                
              </div>
            </div> */}

            <div className="flex flex-col items-center justify-center space-y-10 p-10">
              {/* Cards */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Card 1 (mais baixo) */}
                <div className="bg-gray-800 text-white p-6 rounded-lg w-72 text-center shadow-md mt-4 md:mt-16">
                  <h3 className="text-lg font-bold text-gray-300 mb-2">Cargo</h3>
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>

                {/* Card 2 (mais elevado) */}
                <div className="bg-gray-600 text-white p-6 rounded-lg w-72 text-center shadow-md mt-0 md:mt-2">
                  <h3 className="text-lg font-bold text-gray-300 mb-2">Cargo</h3>
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>

                {/* Card 3 (mais baixo e com borda azul) */}
                <div className="bg-gray-800 text-white p-6 rounded-lg w-72 text-center shadow-md border-2 mt-4 md:mt-16">
                  <h3 className="text-lg font-bold text-gray-300 mb-2">Cargo</h3>
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>

              {/* Citação */}
              <div className="text-center max-w-xl mx-auto flex flex-col items-center">
                <div className="text-3xl text-gray-600 mb-4"> <RiDoubleQuotesR  size={35} /> </div>
                <p className="text-gray-600 text-lg">
                  <span className="font-bold text-gray-900 ">“Aprender”</span> é a única coisa que a <span className="font-bold">mente não se cansa</span>,
                  nunca tem medo e nunca se arrepende
                </p>
                <p className="mt-2 font-bold text-gray-900 text-xl">~Leonardo da Vinci</p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default App