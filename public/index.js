(function () {
  var $role = document.querySelector('#role'),
      $answer = document.querySelector('#answer'),
      $tech = document.querySelector('#technology'),
      $insult = document.querySelector('#insult'),
      $yes = document.querySelector('#yes'),
      $no = document.querySelector('#no');

  var response = {role: '', technology: '', insult: '', url: ''};
  var db = {
    'programming': [
      'PYTHON',
      'NODE.JS',
      'RABBITMQ',
      'MONGODB',
      'C#',
      'RUBY ON RAILS',
      'SINATRA',
      'DJANGO',
      'FLASK',
      'COUCHDB',
      'NEO4J',
      'CLOJURE',
      'F#',
      'ANGULAR.JS',
      'GULP',
      'GRUNT',
      'BOWER',
      'YEOMAN',
      'WEB COMPONENTS',
      'BACKBONE.JS',
      'EMBER.JS',
      'COFFEESCRIPT'],
    'devops': ['DOCKER', 'VAGRANT', 'ANSIBLE', 'CHEF', 'PUPPET'],
    'design': ['RESPONSIVE DESIGN', 'LESS', 'SCSS', 'CSS3 GRID LAYOUTS', 'CSS3 TRANSITIONS', 'MOBILE FIRST'],
    'insults': ['NUMBNUTS', 'JACKASS', 'FUCKWAD', 'SHITBAG', 'ASSHOLE', 'DICKCHEESE', 'SCUZZBUCKET', 'DIPSHIT', 'SCUMBAG', 'DOUCHEBAG'],
    'urls': {
      'PYTHON': 'http://www.python.org/',
      'NODE.JS': 'http://nodejs.org/',
      'RABBITMQ': 'https://www.rabbitmq.com/',
      'MONGODB': 'http://www.mongodb.org/',
      'C#': 'http://msdn.microsoft.com/en-gb/vstudio/hh341490.aspx',
      'RUBY ON RAILS': 'http://rubyonrails.org/',
      'SINATRA': 'http://www.sinatrarb.com/',
      'DJANGO': 'https://www.djangoproject.com/',
      'FLASK': 'http://flask.pocoo.org/',
      'COUCHDB': 'http://couchdb.apache.org/',
      'NEO4J': 'http://www.neo4j.org/',
      'CLOJURE': 'http://clojure.org/',
      'F#': 'http://www.tryfsharp.org/',
      'ANGULAR.JS': 'http://angularjs.org/',
      'GULP': 'http://gulpjs.com/',
      'GRUNT': 'http://gruntjs.com/',
      'BOWER': 'http://bower.io/',
      'YEOMAN': 'http://yeoman.io/',
      'SCSS': 'http://sass-lang.com/',
      'LESS': 'http://lesscss.org/',
      'WEB COMPONENTS': 'http://w3c.github.io/webcomponents/explainer/',
      'BACKBONE.JS': 'http://backbonejs.org/',
      'EMBER.JS': 'http://emberjs.com/',
      'COFFEESCRIPT': 'http://coffeescript.org/',
      'DOCKER': 'https://www.docker.io/',
      'VAGRANT': 'http://www.vagrantup.com/',
      'ANSIBLE': 'http://www.ansible.com/home',
      'CHEF': 'http://www.getchef.com/chef/',
      'PUPPET': 'http://puppetlabs.com/',
      'RESPONSIVE DESIGN': 'https://developer.mozilla.org/en-US/docs/Web_Development/Responsive_Web_design',
      'CSS3 GRID LAYOUTS': 'http://dev.w3.org/csswg/css-grid/',
      'CSS3 TRANSITIONS': 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions',
      'MOBILE FIRST': 'http://www.html5rocks.com/en/mobile/responsivedesign/'
    },
  };

  function getResponse () {
    var t = db[response.role];
    var i = db['insults'];
    
    response.technology = t[Math.floor(Math.random()*t.length)];
    response.url = db.urls[response.technology];
    response.insult = i[Math.floor(Math.random()*i.length)];

    $tech.innerHTML = response.technology;
    $tech.href = response.url;
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
    window.open(response.url);
  };

}());