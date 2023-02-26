
export class PatternModel {
    imageIndex;
    positions;
    pairs;
    
    constructor({imageIndex=null, pairs = 0, positions=[]}){
        this.imageIndex = imageIndex;
        this.pairs = pairs;
        this.positions = positions;
    }
}