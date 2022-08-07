function update_days() {
	const dias = document.getElementById("date");

	let inicial = new Date("08/08/2022");
	var hoje = new Date(Date.now());

	var diferenca_em_tempo = hoje.getTime() - inicial.getTime();
	var diferenca_em_dias = Math.round(diferenca_em_tempo / (1000 * 3600 * 24));

	dias.innerHTML = diferenca_em_dias;
}