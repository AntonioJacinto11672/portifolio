export default function Allapps() {
    return (
        <div className="flex flex-wrap gap-x-6 flex-row items-stretch">
            <div className="bg-gray-900 w-[300px] h-[190px] flex-grow  self-start rounded-2xl overflow-auto cursor-pointer" title="Sistema de gestão de mecanica">
                <div className="text-center top-0 left-0 w-full h-full bg-gray-900 opacity-50 rounded-2xl flex flex-col justify-center items-center text-white">
                    <h4 className="text-white text-2xl">Sistema de gestão de mecânica</h4>
                    <p className="text-white">Sistema que permite controlar, os funcoionários, trabalhos feitos, entra e saída de uma mecânica... </p>
                </div>
            </div>
            <div className="bg-gray-600 w-[300px] h-[250px] flex-grow self-end rounded-2xl">2</div>
            <div className="bg-gray-300 w-[300px] h-[190px] flex-grow self-start rounded-2xl">3</div>
            <div className="bg-gray-300 w-[300px] h-[250px] flex-grow rounded-2xl">4</div>
            <div className="bg-gray-900 w-[300px] h-[190px] flex-grow self-end rounded-2xl">5</div>
            <div className="bg-gray-600 w-[300px] h-[250px] flex-grow  self-start rounded-2xl">6</div>
        </div>
    );
}
