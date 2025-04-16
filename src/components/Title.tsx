interface titleProps {
    firstTitle: string
    secondTitle: string
}


function Title({ firstTitle, secondTitle }: titleProps) {
    return (
        <h2 className="uppercase font-bold text-3xl">{firstTitle} <span className="text-gray-800"> {secondTitle}</span></h2>
    );
}

export default Title;
