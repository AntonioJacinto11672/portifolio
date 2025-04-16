import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io"
import Title from "./components/Title"
import Skills from "./components/Skills"

function App() {

  return (
    <>
      <main className="bg-[#E5E5E5] text-gray-600">

        <header className="bg-gray-100 flex flex-col">
          <div className="flex justify-between items-center px-4 mx-44 my-3 ">

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

          <div className="header-content flex  justify-between mx-44 p-4 mt-10 mb-10">
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
        <div className="divide  p-2 mx-44">
          <div>
            <p className="text-gray-600  font-semibold text-lg">
              About Me
            </p>
          </div>
        </div>

        <section className=" bg-gray-100">
          <div className="mx-44 p-4">
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
                <div className="flex gap-x-7 justify-between text-gray-600">
                  <Skills title="HTML" positiveStarNumber={5} negativeStarNumber={0} />
                  <Skills title="CSS" positiveStarNumber={4} negativeStarNumber={1} />
                  <Skills title="JavaScript" positiveStarNumber={4} negativeStarNumber={1} />
                  <Skills title="Php" positiveStarNumber={3} negativeStarNumber={2} />
                </div>
                <div className="flex gap-x-7 justify-between text-gray-600">
                  <Skills title="Node" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="React" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="React Native" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="Laravel" positiveStarNumber={2} negativeStarNumber={3} />
                </div>
                <div className="flex gap-x-7 justify-between text-gray-600">
                  <Skills title="Mysql" positiveStarNumber={3} negativeStarNumber={2} />
                  <Skills title="postgress" positiveStarNumber={2} negativeStarNumber={3} />
                  <Skills title="MongoDB" positiveStarNumber={1} negativeStarNumber={4} />
                  <Skills title="SCSS" positiveStarNumber={2} negativeStarNumber={3} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App