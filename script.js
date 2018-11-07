var fantasyStats = {
  projectedPlayerStats: [],
  playerStats: [],

  addProjectedStats: function(statsText) {
    this.projectedPlayerStats.push({
      statsText: statsText
    });
  },

  addStats: function(statsText) {
    this.playerStats.push({
      statsText: statsText
    });
  }
}

var handlers = {
  addProjectedStats: function() {
    var addStatPlayerInput = document.getElementById('addStatPlayerInput');
    if (addStatPlayerInput.value !== '') {
      fantasyStats.addProjectedStats(addStatPlayerInput.value);
      addStatPlayerInput.value = '';
      view.displayProjectedStats();
      console.log(addStatPlayerInput);
    } else {
      alert("You didn't enter any player stats.");
    }
},
    addStats: function() {
      var addStatPlayerInput = document.getElementById('addStatPlayerInput');
      if (addStatPlayerInput.value !== '') {
        fantasyStats.addStats(addStatPlayerInput.value);
        addStatPlayerInput.value = '';
        view.displayStats();
        console.log(addStatPlayerInput);
      } else {
        alert("You didn't enter any player stats.");
      }
  }
}

var view = {
  displayProjectedStats: function() {
    var statsUl = document.getElementById('showProjectedWeeklyStats');
    statsUl.innerHTML = '';
    for(var i = 0; i < fantasyStats.projectedPlayerStats.length; i++) {
      var statLi = document.createElement('li');
      var stat = fantasyStats.projectedPlayerStats[i];
      statLi.id = i;
      statLi.textContent = fantasyStats.projectedPlayerStats[i].statsText;
      statsUl.appendChild(statLi);
    }
  },

  displayStats: function() {
    var statsUl = document.getElementById('showWeeklyStats');
    statsUl.innerHTML = '';
    for(var i = 0; i < fantasyStats.playerStats.length; i++) {
      var statLi = document.createElement('li');
      var stat = fantasyStats.playerStats[i];
      statLi.id = i;
      statLi.textContent = fantasyStats.playerStats[i].statsText;
      statsUl.appendChild(statLi);
    }
  }
}
















/*
var fantasyStrength = {
  weeklyStats: [],
  addStats: function(userEnteredStats) {
    this.weeklyStats.push({
      userEnteredStats: userEnteredStats  //first is property, second is param
    });
  }
};

var handlers = {
  addStats: function() {
    var addNumbersToEvaluate = document.getElementById('addNumbersToEvaluate');
    if(addNumbersToEvaluate.value !== '') {
      fantasyStrength.addStats(addNumbersToEvaluate.value.toString());
      addNumbersToEvaluate.value = '';
      view.displayStats();
    } else {
      alert("You didn't enter anything to evaluate.");
    }
  }
};



var view = {
  displayStats: function() {
    var statLength = fantasyStrength.weeklyStats.length;
    for(var i = 0; i < statLength; i++) {
      var showWeeklyStats = document.getElementById('showWeeklyStats');
      showWeeklyStats.innerHTML += fantasyStrength.weeklyStats.userEnteredStats;
       showWeeklyStats.innerHTML += fantasyStrength.weeklyStats[i];
      };
  }
};

*/
