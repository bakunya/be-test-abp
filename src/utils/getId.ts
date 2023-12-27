export default function getId() {
	const x = `${Date.now()}`.slice(7) 
	const y = new Date().getUTCMilliseconds();

	return Number(`${x}${y}`)
}