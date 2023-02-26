import { PATTERNS } from "../components/Card";
import { CARD_PATTERN_MAX_PAIRS, CARD_TOTAL } from "../constants";
import { CardModel } from "../models/CardModel";
import { PatternModel } from "../models/PatternModel";

export class GeneratorController {
    /**
     * Generate an integer in [min; max]
     * @param {*} min 
     * @param {*} max 
     * @returns 
     */
    static  genRandomInt (min=0, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }
    /**
     * Distribue cards: giving card position
     */
 
    static distribute (){
        const cards = GeneratorController.genCardTable(20);
       return cards;
    }

     /**
     * Generates cards
     */
    static genCardsImages (size = CARD_TOTAL){
        const images = [];
        if((size % 2 !== 0) && size < 2) return images;
      
        while(images.length < size){
            for(let i=0;i < PATTERNS.length;i++){

                images.push(i);
                images.push(i); 
                if(images.length === size) break;
            }
        }
        return images;
    }

    static genCardTable(size = CARD_TOTAL){
        const affectedPositions = [];
        const pairsList = [];
        const table = [];
        let cardTotal = 0;
        // generate pairs compositions
        while(cardTotal < size){
            let pairs =  GeneratorController.genRandomInt(0,CARD_PATTERN_MAX_PAIRS);
            let nextTotal = cardTotal + (2 * pairs) ;
            while((nextTotal > size)){
                pairs--
                nextTotal = cardTotal + (2 * pairs) ;
            }
            cardTotal = nextTotal; 
            pairsList.push(new PatternModel({pairs}));
        }
        //
        const validPairsList = pairsList.filter(({pairs})=> pairs>0);
        // affects images/patterns to pairs
        // number of valid pairs and avalaible patterns(logos)
        let z=0;
        for(let i=0; i < validPairsList.length; i++){
            if(i >= PATTERNS.length){
                validPairsList[i].imageIndex = z;
                z++;
            }else{
                validPairsList[i].imageIndex = i;
            }
        }
        // create cards
        validPairsList.forEach(({pairs, imageIndex})=>{
            for(let k=0; k <  (pairs*2); k++){
                table.push(new CardModel({imageIndex}))
            }
        });

        // affects positions to cards & save them to the parent <PatternModel>.positions
        table.map((card)=>{
            let position = GeneratorController.genRandomInt(0,size-1);
            while(affectedPositions.includes(position)){
                position = GeneratorController.genRandomInt(0,size-1);
            }
            card.position = position;
            affectedPositions.push(position);
            return card;
        })
        return table.sort((ca, cb)=> ca.position - cb.position);
    }

    
}