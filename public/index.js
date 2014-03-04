(function () {
  var $role = document.querySelector('#role');
  var $answer = document.querySelector('#answer');
  var $tech = document.querySelector('#technology');
  var $insult = document.querySelector('#insult');
  var $yes = document.querySelector('#yes');
  var $no = document.querySelector('#no');

  var response = {role: '', technology: '', insult: ''};

  var db = {
    'programming': ['PYTHON', 'NODE.JS', 'RABBITMQ', 'MONGODB', 'C#', 'JAVA', 'RUBY ON RAILS', 'SINATRA', 'DJANGO', 'FLASK', 'COUCHDB', 'NEO4J', 'CLOJURE', 'F#', 'ANGULAR.JS', 'GULP', 'GRUNT', 'BOWER', 'YEOMAN', 'SCSS', 'LESS', 'WEB COMPONENTS', 'BACKBONE.JS', 'EMBER.JS', 'JAVASCRIPT', 'COFFEESCRIPT'],
    'devops': ['DOCKER', 'VAGRANT', 'ANSIBLE', 'CHEF', 'PUPPET'],
    'design': ['RESPONSIVE DESIGN', 'LESS', 'SASS', 'CSS3 GRID LAYOUTS', 'CSS3 TRANSITIONS', 'MOBILE FIRST'],
    'insults': ['NUMBNUTS', 'JACKASS', 'FUCKWAD', 'SHITBAG', 'ASSHOLE', 'DICKCHEESE', 'SCUZZBUCKET', 'DIPSHIT', 'SCUMBAG', 'DOUCHEBAG']
  };

  function getResponse () {
    var t = db[response.role];
    var i = db['insults'];
    
    response.technology = t[Math.floor(Math.random()*t.length)];
    response.insult = i[Math.floor(Math.random()*i.length)];

    $tech.innerHTML = response.technology;
    $insult.innerHTML = response.insult;
  }

  $role.onchange = function (evt) {
    response.role = this.value;
    getResponse();

    $answer.className = 'show';
  };

  $no.onclick = function () {
    getResponse();
  };

  $yes.onclick = function () {
    
  };

}());