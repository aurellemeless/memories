export class CardModel {
	flipped = true;
	removed = true;
	position = null;
	imageIndex;

	constructor({ position, imageIndex = null }) {
		this.position = position;
		this.imageIndex = imageIndex;
	}
}
