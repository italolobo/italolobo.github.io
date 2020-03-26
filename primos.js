const inputMax = document.querySelector("#quant");
const btnOk = document.getElementById("ok");
const list = document.querySelector("#prime-list");

function isPrime(max) {
	
	let t1 = performance.now();
	let arrPrimes = "";
	let count = 0;
	list.innerHTML = "";
	for (let i = 2; i < max; i++) {
			

		let isOne = 0;
		for (let j = 2; j < max; j++) {
			if (i % j === 0) {
				isOne++;
			}
		}
		if (isOne === 1) {
			count++;
			arrPrimes += templateList(count, i);
		}

	}
	let t2 = performance.now();

	list.innerHTML = arrPrimes;
	alert("Tempo de excução: " + (t2 - t1).toFixed(3) + " milliseconds.");
}

function templateList(count, num, time) {
	let templateList = `
		<tr>
			<th scope="row">${count}</th>
			<td>${num}</td>
		</tr>
	
    `;
	return templateList;
}

btnOk.addEventListener("click", () => {
	isPrime(inputMax.value);
});