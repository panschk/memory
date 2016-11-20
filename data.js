var icons = [
{path:"accesory-1.png", en: "hat", de : "Hut", fr : "chapeau", mg : ""},
{path:"accesory-4.png", en: "diamond", de : "Diamant", fr : "diamant", mg : ""},
{path:"airplane.png", en: "airplane", de : "Flugzeug", fr : "avion", mg : ""},
{path:"apple.png", en: "apple", de : "Apfel", fr : "pomme", mg : ""},
{path:"armchair.png", en: "armchair", de : "Sessel", fr : "fauteuil", mg : ""},
{path:"backpack.png", en: "backpack", de : "Rucksack", fr : "sac à dos", mg : ""},
{path:"basketball.png", en: "basketball", de : "Basketball", fr : "ballon basket", mg : ""},
{path:"boards.png", en: "skateboard", de : "Skateboard", fr : "skateboard", mg : ""},
{path:"boat.png", en: "boat", de : "Boot", fr : "", mg : "bateau"},
{path:"books.png", en: "books", de : "Bücher", fr : "livres", mg : ""},
{path:"box.png", en: "box", de : "Box", fr : "bôite", mg : ""},
{path:"bus.png", en: "bus", de : "Bus", fr : "bus", mg : ""},
{path:"calculator-1.png", en: "calculator", de : "Taschenrechner", fr : "calculatrice", mg : ""},
{path:"car.png", en: "car", de : "Auto", fr : "voiture", mg : ""},
{path:"cat.png", en: "cat", de : "Katze", fr : "chat", mg : ""},
{path:"clock.png", en: "clock", de : "Uhr", fr : "horloge", mg : ""},
{path:"computer.png", en: "screen", de : "Bildschirm", fr : "écrain", mg : ""},
{path:"cow.png", en: "cow", de : "Kuh", fr : "vache", mg : ""},
{path:"cup.png", en: "cup", de : "Pokal", fr : "", mg : ""},
{path:"cycling.png", en: "bicycle", de : "", fr : "", mg : ""},
{path:"dog.png", en: "dog", de : "", fr : "", mg : ""},
{path:"earth-globe-1.png", en: "globe", de : "", fr : "", mg : ""},
{path:"eyeglasses.png", en: "glasses", de : "", fr : "", mg : ""},
{path:"footwear.png", en: "shoe", de : "", fr : "", mg : ""},
{path:"frog.png", en: "frog", de : "", fr : "", mg : ""},
{path:"koala.png", en: "koala", de : "", fr : "", mg : ""},
{path:"ladybug.png", en: "ladybug", de : "", fr : "", mg : ""},
{path:"lion.png", en: "lion", de : "", fr : "", mg : ""},
{path:"magician.png", en: "magician's hat", de : "", fr : "", mg : ""},
{path:"microscope.png", en: "microscope", de : "", fr : "", mg : ""},
{path:"pen.png", en: "pen", de : "", fr : "", mg : ""},
{path:"pencil.png", en: "pencil", de : "", fr : "", mg : ""},
{path:"pig.png", en: "pig", de : "", fr : "", mg : ""},
{path:"raccoon.png", en: "raccoon", de : "", fr : "", mg : ""},
{path:"scissors.png", en: "scissors", de : "", fr : "", mg : ""},
{path:"search.png", en: "magnifying glass", de : "", fr : "", mg : ""},
{path:"smartphone.png", en: "smartphone", de : "", fr : "", mg : ""},
{path:"spanish-guitar.png", en: "guitar", de : "", fr : "", mg : ""},
{path:"target.png", en: "target", de : "", fr : "", mg : ""},
{path:"telescope.png", en: "telescope", de : "", fr : "", mg : ""},
{path:"train-2.png", en: "train", de : "", fr : "", mg : ""},
{path:"ufo.png", en: "ufo", de : "", fr : "", mg : ""},
{path:"wasp.png", en: "wasp", de : "", fr : "", mg : ""},
{path:"elephant.png", en: "elephant", de : "", fr : "", mg : ""}
];
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
		showDesc	: {de: "Bildunterschrift Karten", en: "Show card caption", fr: "Légende cartes"},
		sound		: {de: "Soundeffekte", en: "sound effects", fr: "son"},
		top3		: {de: "Top 3 für alle Feldgrößen. In Klammern Anzahl der Züge:", en: "Top three for all game sizes. Number of turns in parenthesis", fr : "Les trois meilleurs pour chaque taille de terrain. Nombre de tours en parenthèse"},

	}
	var valForLang = texts[code][lang.code];
	if (valForLang) {
		return valForLang;
	}
	return texts[code]['en']; 
}
