export default function getReadMinutes(content: string) {
	return new Promise<void>(() => {
		const body = content.replace(/(<([^>]+)>)/gi, '')
		const arrayBody = body.split(' ')
		return Math.ceil(arrayBody.length / 100)
	})
}
