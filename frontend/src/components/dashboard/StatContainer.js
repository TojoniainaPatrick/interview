import AverageStat from "./stat/AverageStat";
import TargetStat from "./stat/TargetStat";

export default function StatContainer(){
    return(
        <div className = "stat-container">
            <AverageStat />
            <TargetStat />
        </div>
    )
}