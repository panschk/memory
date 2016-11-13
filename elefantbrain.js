HIGHSCORE_SIZE=3;
var app = angular.module('memory', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.isactive = 'menu';
	this.count=4;
	this.startMemory = function() {
		this.isactive = 'memory';
		$scope.game = new Memory(this);
		$scope.game.init(this.count);
	}
	this.mainMenu = function() {
		this.isactive = 'menu';
	}
	this.getCardsize = function() {
		return "height:"+(25/Math.log(this.count))+"vw;width: "+(25/Math.log(this.count))+"vw;";
	}
	
	$scope.data=data
	$scope.globalScope=globalScope;
}]);

var Memory = function(m) {
	this.m = m;
	this.init = function(count) {
		globalScope.turns = 0;
		this.turnedCards = [];
		this.count = count;
		this.cards = new Array(this.count * 2);
		var indexSel = getRandomIndex(data.length, this.count);
		for (var i=0; i < indexSel.length; i++) {
			this.cards[i*2] = {index:indexSel[i], value:data[indexSel[i]],class:'hidden'};
			this.cards[i*2+1] = {index:indexSel[i], value:data[indexSel[i]],class:'hidden'};
		}
		shuffle(this.cards);
	}
	this.turn = function(index) {
		globalScope.turns++;
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
			}
			this.checkAllTurned();
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

		if (globalScope.isEligble(this.count, globalScope.turns)) {
			var username = prompt("Du hast alle Karte in " + globalScope.turns 
				+ " Zügen aufgedeckt!\nWie heißt Du?", globalScope.lastName);
			if (username)  {
				globalScope.lastName=username;
				var entry = new HighScoreEntry(username, globalScope.turns);
				globalScope.addToList(this.count, entry);
			}
		}
		m.mainMenu();
	}
}

var GlobalScope = function() {
	this.lastName = Lockr.get("lastname"); ;
	this.turns = 0;
	this.highscoreList = Lockr.get("highscoreList");
	if (!this.highscoreList) {
		this.highscoreList = {};
	}

	this.isEligble = function (size, turns) {
		if (!this.highscoreList[size]) {
			return true;
		}
		if (this.highscoreList[size].length < HIGHSCORE_SIZE) {
			return true;
		}
		if (this.highscoreList[size][HIGHSCORE_SIZE-1].turns > turns) {
			return true;
		}
		return false;
	}
	this.addToList = function(size, entry) {
		if (!this.highscoreList[size]) {
			this.highscoreList[size] = [entry];
		} else {
			
			for (var i = 0; i < this.highscoreList.size; i++) {
				if (this.highscoreList[size][i].turns < entry.turns) {
					this.highscoreList[size].splice(i, 0, entry);
					var wasAdded = true;
				}
			}
			if (!wasAdded) {
				this.highscoreList[size].push(entry);
			}
			if (this.highscoreList[size].length > HIGHSCORE_SIZE) {
				this.highscoreList[size].splice(0, HIGHSCORE_SIZE -1);
			}
		}

		Lockr.set("lastname", entry.name);
		Lockr.set("highscoreList",this.highscoreList);
	}
}

var HighScoreEntry = function(name, turns) {
	this.name=name;
	this.turns=turns;
}


globalScope = new GlobalScope();

function getRandomIndex(len, n) {
    var result = new Array(n),
        choices = new Array(len);
		for (var i=0; i < len; i++) {
			choices[i] = i
		}
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * choices.length);
        result[n] = choices[x];
        choices.splice(x, 1);
    }
    return result;
}

/**
http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
