import { FaBars, FaLaravel, FaLinkedinIn, FaReact, FaSass, FaTimes } from "react-icons/fa"
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
import { RiDoubleQuotesR } from "react-icons/ri"
import ThemeToggle from "./components/works/ThemeToggle"


const componentProject = [
  <Allapps />,
  <WebApps />,
  <MobileApps />,
  <OthersApps />,
]
function App() {
  const [projectsValue, setProjectsValue] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      <main className="overflow-hidden dark:bg-gray-800 bg-gray-300 text-gray-600  dark:text-gray-400 px-4 sm:px-6 lg:px-20 xl:px-40 max-w-screen-xl mx-auto">
        <header className="bg-gray-100 dark:bg-gray-900 flex flex-col  shadow-md">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-4 lg:px-20 py-4">
            {/* Logo */}
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 flex justify-center items-center">
                <img src="./Group.svg" alt="Logo" className="object-contain h-8" />
              </div>
              <p className="text-xl lg:text-xl font-bold">António Jacinto</p>

            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex gap-5 lg:gap-8 text-sm lg:text-base">
                <li><a href="#home" className="hover:text-gray-600">Home</a></li>
                <li><a href="#about" className="hover:text-gray-600">Sobre</a></li>
                <li><a href="#portifolio" className="hover:text-gray-600">Portfólio</a></li>
                <li><a href="#service" className="hover:text-gray-600">Serviços</a></li>
                <li><a href="#resume" className="hover:text-gray-600">Resumo</a></li>
                <li><a href="#social-icons" className="hover:text-gray-600">Contato</a></li>
              </ul>
            </nav>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            {/* Theme Toggle - Fixed Position */}
            <div className="fixed bottom-4 right-5">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden px-4 pb-4">
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="hover:text-gray-600">Home</a></li>
                <li><a href="#" className="hover:text-gray-600">Sobre</a></li>
                <li><a href="#" className="hover:text-gray-600">Portfólio</a></li>
                <li><a href="#" className="hover:text-gray-600">Serviços</a></li>
                <li><a href="#" className="hover:text-gray-600">Resumo</a></li>
                <li><a href="#" className="hover:text-gray-600">Contato</a></li>
              </ul>
            </div>
          )}

          {/* Header Content */}
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-4 lg:px-20 py-10 gap-10">
            {/* Text Section */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <div className="text-gray-600 dark:text-gray-400">
                <p className="font-semibold">Olá pessoal,</p>
                <h2 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl">Eu sou um<br />programador</h2>
                <p className="font-semibold">Seja bem-vindo ao meu portfólio website</p>
              </div>
              <button className="py-2 px-4 bg-gray-900 dark:bg-gray-800 hover:bg-gray-600 text-white text-sm font-semibold rounded-2xl" onClick={() => window.open("https://www.canva.com/design/DAFkA7X8MrQ/VPVWBlE6Y54VkuyAvkLsww/edit?utm_content=DAFkA7X8MrQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank")}>
                Saiba mais sobre mim
              </button>
              <div className="flex justify-center lg:justify-start gap-4" id="social-icons">
                <a href="http://github.com/AntonioJacinto11672" target="_blank" rel="noopener noreferrer"><FaGithub size={22} /></a>
                <a href="http://www.linkedin.com/in/ant%C3%B3nio-jacinto-14119022a/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={22} /></a>
                <a href="http://https://www.instagram.com/antonio_jacinto11672/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram size={22} /></a>

              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img src="./Home_art1.svg" alt="Ilustração" className="object-contain h-64 md:h-96" />
            </div>
          </div>
        </header>
        <Divide title="Sobre min" />

        <section className="bg-gray-100 dark:bg-gray-900" id="about">
          <div className="px-4 sm:px-6 lg:px-20 xl:px-40 py-4">
            {/* Title Description */}
            <div className="flex flex-col gap-y-4 items-center my-5 text-gray-600 dark:text-gray-400 text-center">
              <div className="h-36 w-36 rounded-3xl border-4 border-gray-500 overflow-hidden">
                <img src="IMG_0007.JPEG" alt="Foto de perfil" className="object-cover h-full w-full" />
              </div>
              <Title firstTitle="António" secondTitle="Jacinto" />
              <p className="font-semibold max-w-3xl">
                Meu nome é António José Jacinto, de Luanda - Angola, Viana/Luanda.
                Sou estudante de Engenharia Informática na Universidade Lusiádas de Angola.
                Sou apaixonado por tecnologia e programação.
              </p>
            </div>

            {/* Hard Skills */}
            <div className="py-14">
              <div className="flex flex-col gap-y-8 items-center text-gray-600 dark:text-gray-400">
                <Title firstTitle="Hard" secondTitle="Skills" />

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                  <Skills title="HTML" positiveStarNumber={5} negativeStarNumber={0} />
                  <Skills title="CSS" positiveStarNumber={4} negativeStarNumber={1} />
                  <Skills title="JavaScript" positiveStarNumber={4} negativeStarNumber={1} />
                  <Skills title="Php" positiveStarNumber={3} negativeStarNumber={2} />

                  <Skills title="Node" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="React" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="React Native" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="Laravel" positiveStarNumber={2} negativeStarNumber={3} />

                  <Skills title="Mysql" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="PostgreSQL" positiveStarNumber={2} negativeStarNumber={3} />
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
        <section className="bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-20" id="portifolio">
          <div className="p-4">
            {/* Título e descrição */}
            <div className="my-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <Title firstTitle="Meu" secondTitle="Portifólio" brState={true} />
              <p className="font-bold text-md text-gray-700">
                Estes são alguns dos trabalhos e <br className="hidden lg:block" /> projetos que já realizei
              </p>
            </div>

            {/* Botões responsivos */}
            <div className="flex flex-wrap gap-4 my-5">
              <Button text="Todos" color={projectsValue === 0 ? "primary" : "secondary"} onClick={() => setProjectsValue(0)} />
              <Button text="Web App" color={projectsValue === 1 ? "primary" : "secondary"} onClick={() => setProjectsValue(1)} />
              <Button text="Mobile App" color={projectsValue === 2 ? "primary" : "secondary"} onClick={() => setProjectsValue(2)} />
              <Button text="Outros" color={projectsValue === 3 ? "primary" : "secondary"} onClick={() => setProjectsValue(3)} />
            </div>

            {/* Projetos */}
            <div className="flex flex-col items-center my-5 text-gray-600 dark:text-gray-400 w-full">
              {componentProject[projectsValue]}
            </div>
          </div>
        </section>


        <Divide title="Minhas techs" />
        <section className="bg-gray-100 dark:bg-gray-900" id="service">
          <div className="px-4 sm:px-6 lg:px-20 py-20 flex flex-col gap-y-16 items-center text-gray-600 dark:text-gray-400">

            <div className="mx-auto">
              <Title firstTitle="Minhas" secondTitle="Techs" />
            </div>

            {/* Utilizadas */}
            <div className="text-center">
              <p className="text-md">Tecnologias</p>
              <h2 className="capitalize font-bold text-3xl">
                Já <span className="text-gray-800">Utilizadas</span>
              </h2>
            </div>

            {/* Icons - já utilizadas */}
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <FaNodeJs size={75} />
              <SiPhp size={75} className="text-gray-900 dark:text-gray-100" />
              <FaLaravel size={75} />
              <FaSass size={75} />
            </div>

            {/* Desenvolvendo */}
            <div className="text-center mt-20">
              <p className="text-md">Tecnologias</p>
              <h2 className="capitalize font-bold text-3xl">
                Atualmente <span className="text-gray-800 ">Desenvolvendo</span>
              </h2>
            </div>

            {/* Icons - atualmente desenvolvendo */}
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <IoLogoHtml5 size={75} />
              <IoLogoCss3 size={75} />
              <IoLogoJavascript size={75} />
              <SiTypescript size={75} />
              <SiTailwindcss size={75} className="text-gray-900 dark:text-white" />
              <FaReact size={75} />
            </div>
          </div>
        </section>


        <Divide title="Minhas techs" />

        <section className="bg-gray-100 dark:bg-gray-900">
          <div className="px-4 sm:px-6 lg:px-20 py-10">

            {/* Título e descrição */}
            <div className="my-10 flex flex-col-reverse md:flex-row-reverse items-start md:items-end justify-between gap-4">
              <Title firstTitle="Experiência" secondTitle="Profissional" brState={true} />
              <p className="font-bold text-md text-right md:text-right md:pr-20 text-gray-700">
                Minha jornada está apenas <br /> começando, sempre aprendendo
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col items-center justify-center space-y-10 md:space-y-0 md:flex-row md:space-x-6 p-4 md:p-10">

              {/* Card 1 */}
              <div className="bg-gray-800 text-white p-6 rounded-lg w-full sm:w-80 text-center shadow-md mt-4 md:mt-16">
                <h3 className="text-lg font-bold text-gray-300 mb-2">Web desgner - Itel Center Code</h3>
                <p className="text-sm">
                  trabalhei como web desgner, desenvolvendo sites responsivos e otimizados para SEO.
                  <br /> Utilizando HTML, CSS e JavaScript.
                 
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-600 text-white p-6 rounded-lg w-full sm:w-80 text-center shadow-md mt-0 md:mt-2">
                <h3 className="text-lg font-bold text-gray-300 mb-2">Front End - Tribunal de Comarca de Luanda</h3>
                <p className="text-sm">
                 Trabelhei como Front End, desenvolvendo aplicações web utilizando Wordpress, e php
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-800 text-white p-6 rounded-lg w-full sm:w-80 text-center shadow-md border-2 mt-4 md:mt-16">
                <h3 className="text-lg font-bold text-gray-300 mb-2">Help Desk - Suporte Técnico </h3>
                <p className="text-sm">
                  Atualmente presto serviços de suporte técnico, ajudando os usuários a resolver problemas relacionados a hardware e software.
                </p>
              </div>
            </div>

            {/* Citação */}
            <div className="text-center max-w-xl mx-auto mt-14 px-4">
              <div className="text-3xl text-gray-600 dark:text-gray-400 mb-4 flex justify-center">
                <RiDoubleQuotesR size={35} />
              </div>
              <p className="text-gray-600 dark:text-gray-500 text-lg">
                <span className="font-bold text-gray-900 dark:text-gray-100">“Aprender”</span> é a única coisa que a <span className="font-bold">mente não se cansa</span>,
                nunca tem medo e nunca se arrepende
              </p>
              <p className="mt-2 font-bold text-gray-900 text-xl">~Leonardo da Vinci</p>
            </div>
          </div>
        </section>


      </main>
    </>
  )
}

export default App