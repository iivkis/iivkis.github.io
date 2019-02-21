class UltraBg {
	
	constructor(props) {
		this.imageUrl = props.url;
		this.getUrl   = this.getUrl.bind(this);
	}

	getUrl() {
		return this.imageUrl;
	}
}