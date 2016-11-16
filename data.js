var icons = ["accesory-1.png","accesory-4.png","airplane.png","apple.png","armchair.png","backpack.png","basketball.png","boards.png","boat.png","books.png","box.png","bus.png","calculator-1.png","car.png","cat.png","chemistry.png","clock.png","computer.png","cow.png","cup.png","cycling.png","dog.png","earth-globe-1.png","eyeglasses.png","footwear.png","frog.png","koala.png","ladybug.png","lion.png","magician.png","microscope.png","pen.png","pencil.png","pig.png","raccoon.png","science.png","scissors.png","search.png","smartphone.png","spanish-guitar.png","target.png","telescope.png","train-2.png","ufo.png","wasp.png"]
var languages = [
{code:"en", name:"English"},
{code:"de", name:"Deutsch"},
{code:"fr", name:"Français"},

]
var translate = function(code, lang) {

	var texts = {
		highscore 	: {de: "Bestenliste", en: "Hall of Fame", fr: "Classement"},
		play		: {de: "Spielen", en: "Play!", fr: "Jouer"},
		pairs		: {de: "Paare", en: "pairs", fr: "paires"},
		cards_turned: {de: "Du hast alle Karte in {0} Zügen aufgedeckt!\nWie heißt Du?", en: "You matched all cards in {0} turns.\nWhat's your name?", fr: "Tu as trouvé tout les pairs en {0} tours.\nComment tu t'appelles?"},
		back		: {de: "Zurück", en: "Back", fr: "Retour"},

	}
	var valForLang = texts[code][lang.code];
	if (valForLang) {
		return valForLang;
	}
	return texts[code]['en']; 
}