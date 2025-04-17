interface DivideProps {
    title: string;
}

export default function Divide({ title }: DivideProps) {
    return (
        <div className="divide  p-2 mx-44">
            <div>
                <p className="text-gray-600  font-semibold text-lg">
                    {title}
                </p>
            </div>
        </div>
    );
}
