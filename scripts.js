const btnGenerator = document.getElementById("btn")
const numberGenerator = document.getElementById("numbers")

function generateNumber() {
	const randomNumbers = []
	for (let i = 0; i < 4; i++) {
		const randomNumber = Math.floor(Math.random() * 10)
		randomNumbers.push(randomNumber)
	}
	numberGenerator.textContent = randomNumbers.join(" ")
}
