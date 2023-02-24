import { useSelector } from "react-redux";
import { Card } from "..";
import { selectPosition, selectLatestPositions, selectMatches } from "../../../store/reducers";

export function CardTable({data}){
    const activePosition = useSelector(selectPosition);
    const latestClickedCards = useSelector(selectLatestPositions) || [];
    const countMatches = useSelector(selectMatches);
    return (
    <div>
        <div style={{padding:10}}> Memories Game position selectionné { activePosition }  |  Score :  {countMatches} paires trouvée(s) </div>
        <div className='card-wrapper'>
            {data.map((card)=><Card key={card.position} 
            model={card} 
            active={latestClickedCards.includes(card.position)}>

            </Card>)}
        </div>
    </div>
    );
}