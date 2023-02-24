import francetv from "../../images/francetv.svg";
import france2 from "../../images/france-2-invert.svg";
import france3 from "../../images/france-3-invert.svg";
import france4 from "../../images/france-4-invert.svg";
import france5 from "../../images/france-5-invert.svg";
import franceinfo from "../../images/franceinfo-color.svg";
import la1ere from "../../images/la1ere-outre-mer.svg";

import { useDispatch } from "react-redux";
import { cardSelected, enqueueCard } from "../../store/reducers";

export const LOGOS = [france2, france3, france4, france5, franceinfo, la1ere];

export function Card({ model: { imageIndex, position }, active, matched }) {
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
        if(matched) return;
    dispatch(cardSelected({ position }));
    dispatch(enqueueCard({ position, imageIndex }));
  };

  return (
    <div
      className={
        (matched && "card-item-match") ||
        (active && "card-item-active") ||
        "card-item"
      }
      onClick={handleOnClick}
    >
      {matched ||
        (active ? (
          <img src={LOGOS[imageIndex]} alt="recto" />
        ) : (
          <img src={francetv} alt="verso" />
        ))}
    </div>
  );
}
