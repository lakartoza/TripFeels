interface BakedGood {
	sugar: number; 
	name: string; 
	bake(mins: number): string; 
	icing?: boolean; // optional question mark
}

const cake: BakedGood = {
	sugar: 23, 
	name: 'Cherry Cake',
	bake(min: number) {
		return 'will be done in ${min}...'
	}

}; 
