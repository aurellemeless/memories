import { useState } from "react";
import francetv from '../../images/francetv.svg';

import france2 from '../../images/france-2-invert.svg';
import france3 from '../../images/france-3-invert.svg';
import france4 from '../../images/france-4-invert.svg';
import france5 from '../../images/france-5-invert.svg';
import franceinfo from '../../images/franceinfo-color.svg';
import la1ere from '../../images/la1ere-outre-mer.svg';
import { useDispatch } from "react-redux";
import { showCard } from "../../store/reducers";

export const LOGOS = [france2, france3, france4, france5, franceinfo, la1ere];

export function Card({index}){
        const [showImage, setShowImage] = useState(false);
        const dispatch = useDispatch();
        const handleOnClick = (e)=>{
                setShowImage(!showImage);
                dispatch(showCard({color: 'blue'}));
        };

        return (<div className={showImage ? "card-item-active":"card-item" } onClick={handleOnClick}>
                {(showImage && <img src={LOGOS[index]} alt="recto" />) 
                || <img src={francetv} alt="verso" />}
                
        </div>);
}