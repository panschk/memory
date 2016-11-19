
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

function noise() {
    var f1 = getRandomInt(200,800)
	var f2 = getRandomInt(200,800)
	
	var sine1 = T("sin", {freq:f1, mul:0.5});
	var sine2 = T("sin", {freq:f2, mul:0.5});
    T("perc", {r:300}, sine1, sine2).on("ended", function() {
	this.pause();
	}).bang().play();
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

// Implement useful String format method
// http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
