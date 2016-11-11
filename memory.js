var app = angular.module('memory', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.isactive = 'menu';
	this.startMemory = function() {
		this.isactive = 'memory'
		$scope.game = new Memory()
		$scope.game.init()
	}
	this.mainMenu = function() {
		this.isactive = 'menu'
	}
	$scope.data=data
}]);

var Memory = function() {
	this.init = function(count) {
		this.turnedCards = []
		this.count = count
		this.cards = new Array(this.count * 2)
		var indexSel = getRandomIndex(data[lvlName]['mg'].length, this.count)
		for (var i=0; i < indexSel.length; i++) {
			this.cards[i*2] = {index:indexSel[i], value:data[lvlName]['mg'][indexSel[i]], lang:'mg',class:'hidden'}
			this.cards[i*2 + 1] = {index:indexSel[i], value:data[lvlName]['de'][indexSel[i]],lang:'de',class:'hidden'}
		}
		shuffle(this.cards)
	}
	this.turn = function(index) {
		if (this.turnedCards.length > 1) {
			this.cards.forEach(function(card) {
				if (card.class=='shown') {
					card.class='hidden'
				}
			})
			this.turnedCards = [];
		}
		this.turnedCards.push(index);
		this.cards[index].class="shown";
		if (this.turnedCards.length == 2) {
			var c1 = this.cards[this.turnedCards[0]]
			var c2 = this.cards[this.turnedCards[1]]
			
			if (c1.index===c2.index) {
				c1.class='done';
				c2.class='done';
			}
		}
	}
}


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
