import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io"

function App() {

  return (
    <>
      <main className="bg-[#E5E5E5] text-gray-600">

        <header className="bg-gray-100 flex flex-col">
          <div className="flex justify-between items-center px-4 mx-20 my-3 ">

            <div className="flex gap-1 items-center ">
              <div className="w-10 h-10  flex justify-center items-center">
                <img src="./Group.svg" alt="" className="object-contain h-8" />
              </div>
              <p className="   text-2xl font-bold">António Jacinto</p>
            </div>

            <nav>
              <ul className="flex gap-x-14">
                <li><a href="" className="">Home</a></li>
                <li><a href="">sobre</a></li>
                <li><a href="">portifólio</a></li>
                <li><a href="">serviços</a></li>
                <li><a href="">resumo</a></li>
                <li><a href="">contato</a></li>
              </ul>
            </nav>
          </div>

          <div className="header-content flex  justify-between mx-20 p-4">
            <div className="about-me-header flex flex-col justify-between">
              <div className="text-gray-600">
                <p className="font-semibold">Olá pessoal,</p>
                <h2 className="uppercase font-bold text-3xl">Eu sou um <br /> programador</h2>
                <p className="font-semibold">Seja bem vindo ao meu portifólio website</p>
              </div>
              <div className="">
                <button type="button" className="py-2 px-4 text-white text-xs cursor-pointer hover:bg-gray-600 font-semibold bg-gray-900 rounded-2xl">Saiba mais sobre min</button>
              </div>
              <div className="social-icons flex gap-4">
                <FaGithub  size={22}/>
                <FaLinkedinIn  size={22}/>
                <IoLogoInstagram size={22}/>
              </div>
            </div>
            <div className="image-header w-[705] h-[697] flex justify-center items-center ">
              <img src="./Home_art1.svg" alt="background " className="object-contain h-[500px] w-[700]" />
            </div>
          </div>
        </header>

        <section className="about-me">
          <h2>Sobre mim</h2>
          <p>Eu sou um programador com mais de 3 anos de experiência em desenvolvimento web, especializado em React e Node.js. Tenho paixão por criar aplicações web modernas e eficientes.</p>
          <p>Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor. Estou animado para compartilhar meu portfólio com você!</p>
        </section>
      </main>
    </>
  )
}

export default App
