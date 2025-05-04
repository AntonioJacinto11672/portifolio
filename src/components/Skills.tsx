import NegativeStar from "./NegativeStar";
import PositiveStar from "./PositiveStar";

interface skillsProps {
    title: string
    positiveStarNumber: number
    negativeStarNumber: number
}


function Skills({ title, positiveStarNumber, negativeStarNumber }: skillsProps) {
    const starComponents = []
    for (let index = 0; index < 5; index++) {
        if (index < positiveStarNumber) {
            starComponents.push(<PositiveStar key={index} />)
        } else if (index < positiveStarNumber + negativeStarNumber) {
            starComponents.push(<NegativeStar key={index} />)
        } else {
            starComponents.push(<PositiveStar key={index} />)
        }


    }

    return (
        <div className="flex flex-col gap-y-2 items-center my-5 text-gray-600">
            <h2 className=" font-bold text-2xl text-gray-600"> {title} </h2>
            <div className="flex  gap-y-2  gap-x-1 items-center  text-gray-600 justify-between">

                { 
                    starComponents.map((star, index) => {
                        return (
                            <div className="" key={index}>
                                {star}
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Skills;
