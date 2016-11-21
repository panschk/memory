testHighscore = function() {
	var SIZE = 2;
	g = GlobalScope;
	m = new Memory(this);
	m.init(SIZE);
	g.highscoreList[SIZE] = [{name:"Test1", turns:15}];
	if (!isEligble(SIZE, 10)) {
		return "error with isElible method"
	}
	g.highscoreList[SIZE] = [{name:"Test1", turns:15}, {name:"Test2", turns:16}, {name:"Test3", turns:17}];
	if (isEligble(SIZE, 18)) {
		return "error with isElible method"
	}
	g.highscoreList[SIZE] = [{name:"Test1", turns:15}, {name:"Test2", turns:16}, {name:"Test3", turns:17}];
	if (!isEligble(SIZE, 16)) {
		return "error with isElible method"
	}
	var entry = new HighScoreEntry("NewName", 10);
	g.highscoreList[SIZE] = [{name:"Test1", turns:15}, {name:"Test2", turns:16}, {name:"Test3", turns:17}];
	addToList(SIZE, entry);
	if ( g.highscoreList[SIZE].length != 3 ) {
		return "wrong size " + g.highscoreList[SIZE].length;
	}
	
	if (JSON.stringify([entry, {name:"Test1", turns:15}, {name:"Test2", turns:16}]) != JSON.stringify(g.highscoreList[SIZE])) {
		return "got " + JSON.stringify(g.highscoreList[SIZE]) + "\n expected: " + JSON.stringify([entry, {name:"Test1", turns:15}, {name:"Test2", turns:16}]);
	}
	
	return 0;
}

testPics = function() {
	var length = icons.length;
	for (var i = 0; i < length; i++) {
		var path = "img/" + icons[i].path;
		var image = new Image();
		image.src = path;
	}
	return 0;
}

save = function() {
// do nothing
}