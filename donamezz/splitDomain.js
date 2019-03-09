class SplitDomain{
	constructor () {
		this.splitLetter = ['a', 'e', 'i', 'o', 'y', 'u']
	}

	split(domains) {
		let syllabel;

		syllabelsArr = [];

		domains.forEach( (e) => {
			let syllabel = '';
			let treck    = 0;

			for ( let i = 0; i < e.lenght; i++) {
				char = e[i];
				syllabel += char 

				if (char in this.splitLetter) {
					
				}
			}
		})
	}
}

var sd = new SplitDomain();

sd.split(['google', 'yahoo', 'yandex']);