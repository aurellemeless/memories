import { useSelector } from "react-redux";
import { Card } from "..";
import { selectLatestPositions, selectMatches, selectMatchesStack } from "../../../store/reducers";

export function CardTable({data}){
    const latestClickedCards = useSelector(selectLatestPositions) || [];
    const countMatches = useSelector(selectMatches);
    const macthesStack = useSelector(selectMatchesStack);
    return (
    <div>
        <div style={{padding:10}}> Memories Game |  Score :  {countMatches} paires trouvée(s) </div>
        <div className='card-wrapper'>
            {data.map((card)=><Card key={card.position} 
            model={card} 
            active={latestClickedCards.includes(card.position)}
            matched={macthesStack.includes(card.position)}
            >

            </Card>)}
        </div>
    </div>
    );
}