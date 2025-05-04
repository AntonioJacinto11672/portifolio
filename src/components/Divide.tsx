interface DivideProps {
    title: string;
}

export default function Divide({ title }: DivideProps) {
    return (
        <div className="divide  p-2 mx-">
            <div>
                <p className="text-gray-100   font-semibold text-lg  bg-gray-900 rounded-md px-4 py-2 text-center">
                    {title}
                </p>
            </div>
        </div>
    );
}
