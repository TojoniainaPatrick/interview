import CriteriaCard from "./card/CriteriaCard";
import PeriodCard from "./card/PeriodCard";
import QuestionCard from "./card/QuestionCard";
import TargetCard from "./card/TargetCard";

export default function CardContainer (){
    return(
        <div className="card-container">
            <CriteriaCard />
            <TargetCard />
            <QuestionCard />
            <PeriodCard />
        </div>
    )
}