interface titleProps {
    firstTitle: string
    secondTitle: string
    brState?: boolean 
}


function Title({ firstTitle, secondTitle, brState }: titleProps) {
    return (
        <h2 className="uppercase font-bold text-3xl">{firstTitle} { brState ? <br/> : ''} <span className="text-gray-800 dark:text-gray-700"> {secondTitle}</span></h2>
    );
}

export default Title;
