 function imgBgchange (src, width) {
		let dpr = document.getElementsByTagName('html')[0].getAttribute('data-dpr')
		if (dpr * 1 === 1) {
			return `${src}?x-oss-process=image/resize,w_${width / 3}`
		} else if (dpr * 1 === 2) {
			return `${src}?x-oss-process=image/resize,w_${width * 2 / 3}`
		} else {
			return `${src}`
		}
}