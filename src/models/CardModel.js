
export class CardModel{
    matched;
    position;
    imageIndex;

    constructor({position=null, imageIndex=null, matched=false}){
        this.position = position;
        this.imageIndex = imageIndex;
        this.matched = matched;
    }

}