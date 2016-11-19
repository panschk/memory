HIGHSCORE_SIZE=3;
var app = angular.module('memory', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.isactive = 'menu';
	this.count=g.lastCount;
	this.startMemory = function() {
		this.isactive = 'memory';
		$scope.game = new Memory(this);
		$scope.game.init(this.count);
	}
	this.mainMenu = function() {
		this.isactive = 'menu';
	}
	this.getCardsize = function() {
		var height = window.innerHeight;
		var width = window.innerWidth;
		var value = Math.min(height, width) / (Math.log(this.count) * 3.0);
		return "height:"+value+"px;width: "+value + "px;";
	}
	
	$scope.g=g;
	$scope.translate = translate;
	$scope.languages = languages;
	$scope.text = text;
}]);

var Memory = function(m) {
	this.m = m;
	this.init = function(count) {
		g.turns = 0;
		g.lastCount = count;
		save();
		this.turnedCards = [];
		this.count = count;
		this.cards = new Array(this.count * 2);
		var indexSel = getRandomIndex(icons.length, this.count);
		for (var i=0; i < indexSel.length; i++) {
			this.cards[i*2] = {index:indexSel[i], value:icons[indexSel[i]],class:'hidden'};
			this.cards[i*2+1] = {index:indexSel[i], value:icons[indexSel[i]],class:'hidden'};
		}
		shuffle(this.cards);
	}
	this.turn = function(index) {
		g.turns++;
		if (this.turnedCards.length > 1) {
			this.cards.forEach(function(card) {
				if (card.class=='shown') {
					card.class='hidden';
				}
			})
			this.turnedCards = [];
		}
		this.turnedCards.push(index);
		this.cards[index].class="shown";
		if (this.turnedCards.length == 2) {
			var c1 = this.cards[this.turnedCards[0]];
			var c2 = this.cards[this.turnedCards[1]];
			
			if (c1.index===c2.index) {
				c1.class='done';
				c2.class='done';
				noise();
				this.checkAllTurned();
			}
		}
	}
	this.checkAllTurned = function(){
		for (var i = 0; i < this.cards.length; i++) {
			var card = this.cards[i];
			if (card.class != 'done') {
				return;
			}
		}
		// all cards were found!

		if (isEligble(this.count, g.turns)) {
			var username = prompt(text('cards_turned').format(g.turns), g.lastName);
			if (username)  {
				g.lastName=username;
				var entry = new HighScoreEntry(username, g.turns);
				addToList(this.count, entry);
			}
		}
		m.mainMenu();
	}
}

var load = function() {
	var gs = Lockr.get("elefantbrain-globalscope");
	if (!gs) {
		gs = GlobalScope;
	}
	return gs;
}

var save = function() {
	Lockr.set("elefantbrain-globalscope", g);
}

var text = function(t) {
	return translate(t, g.language);
}
var GlobalScope = {
	lastName : "",
	turns : 0,
	highscoreList : {},
	lastCount : 4,
	language : languages[0]
}

var isEligble = function (size, turns) {
	if (!g.highscoreList[size]) {
		return true;
	}
	if (g.highscoreList[size].length < HIGHSCORE_SIZE) {
		return true;
	}
	if (g.highscoreList[size][HIGHSCORE_SIZE-1].turns > turns) {
		return true;
	}
	return false;
}
var addToList = function(size, entry) {
	if (!g.highscoreList[size]) {
		g.highscoreList[size] = [entry];
	} else {
		
		for (var i = 0; i < g.highscoreList[size].length; i++) {
			if (g.highscoreList[size][i].turns > entry.turns) {
				g.highscoreList[size].splice(i, 0, entry);
				var wasAdded = true;
				break;
			}
		}
		if (!wasAdded) {
			g.highscoreList[size].push(entry);
		}
		if (g.highscoreList[size].length > HIGHSCORE_SIZE) {
			g.highscoreList[size].splice(0, HIGHSCORE_SIZE -1);
		}
	}
	save();
	
}

var HighScoreEntry = function(name, turns) {
	this.name=name;
	this.turns=turns;
}


g = load();

