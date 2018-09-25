// create arrays for dataset labels and questions topics
datList = ['creation', 'christmas', 'easter', 'matthew', 'genesis', 'mark', 'luke', 'john', 'apostle' ];
topicsList = [ 'Creation', 'Christmas', 'Easter', 'Matthew', 'Genesis', 'Mark', 'Luke', 'John', 'Apostles' ];

// create array of paired dataset and topic
pairedTopicsList = [];
for (var i = 0; i < datList.length; i++) {
	pairedTopicsList[i] = [datList[i], topicsList[i]];
}

/* create dataset array for each dataset (see datList above);
 * randomize using sort() and compare function */
creation = [
	[ "The Book of Genesis opens with the Hebrew word 'bereshit', what is this word's translation into English?",
	{
		1:"In the beginning",
		2:"Let there be Light",
		3:"When yet there was nothing",
		4:"The Lord God said"
	}, "(Gn 1:1)"
	],
	[ "After putting the man to a deep sleep what did the Lord God take from him to build into a woman?",
	{
		4:"A tooth",
		3:"A fingernail",
		2:"A strand of hair",
		1:'A rib'
	}, "(Gn 1:2)"
	],
	[ "What did the Lord God first bless with the words ‘Be fertile and multiply’?",
	{
		2:"The first man and woman",
		1:"The sea creatues and birds",
		3:"The plants",
		4:"The land animals"
	}, "(Gn 1:22)" 
	]
];
creation = creation.sort(function(a, b){return 0.5 - Math.random()});

christmas = [ 
	[ "Who was the angel of the Lord that announced to Mary that she would conceive and bear a son?",
	{
		1:"Gabriel",
		2:"Michael",
		3:"Raphael",
		4:"Sealtiel"
	}, "(Lk 1:31)"
	],
	[ "What is the name of the mother of St. John the Baptist?", 
	{
		2:"Salome of Zebedee",
		1:"Elizabeth of Zechariah",
		3:"Mary of Cleofas",
		4:"Herodias of Philip"
	}, "(Lk 1:5-6)"
	],
	[ "In what particular city of David was the Lord Jesus born?",
	{
		3:"Bethany",
		1:"Bethlehem",
		2:"Samaria",
		4:"Nazareth"
	}, '(Lk 2:1-7)'
	]
];
christmas = christmas.sort(function(a, b){return 0.5 - Math.random()});

easter = [ 
	[ "At the start of the Resurrection narrative in St. John’s Gospel, who was mentioned as going to the tomb of Jesus early in the morning and seeing the stone removed?",
		{
		1:"Mary of Magdala",
		2:"St. John",
		3:"Martha",
		4:"An angel"
	},
	, "(Jn 20:1)"
	],
	[ "In the Resurrection narrative in St. John’s Gospel, when the Risen Lord first appeared to Mary Magdalene, she mistook him for whom?",
	{
		2:"The jailer",
		3:"The centurion",
		1:"The gradener",
		4:"An angel"
	}, "(Jn 20:15)"
	],
	[ "In St. John’s Gospel, on the first day of the week of the Resurrection, what did the Lord Jesus say before showing them his hands and side for them to examine?",
	{
		4:"Alleluia!",
		3:"Do you have any fish and bread to eat?",
		2:"I am thirsty.",
		1:"Peace be with you.",
	}, "(Jn 20:19-20)",
	]
];
easter = easter.sort(function(a, b){return 0.5 - Math.random()});

var matthew = [ 
[ "In the genealogy of Jesus given in the Gospel of St. Matthew, how many sets of 14 generations were mentioned?",
	{
		2:"Five",
		3:"A score",
		1:"Three",
		4:"A dozen"
	}, "(Jn 20:15)"
	],
	[ "In the genealogy of Jesus given in the Gospel of St. Matthew, the first set of 14 generations mentioned started with Abraham and ended with whom?",
	{
		1:"David",
		2:"Moses",
		3:"Jacob",
		4:"Jesse"
	}, "(Mt 1:1-6)"
	],
	[ "In the prophet Isaiah, it it said that the boy to be born of the virgin shall be given this name which means God-with-us.",
	{
		3:"Jesus",
		4:"John",
		1:"Emmanuel",
		2:"Christos"
	}, "(Mt 1:23)" 
	]
];
matthew = matthew.sort(function(a, b){return 0.5 - Math.random()});

var genesis = [ 
	[ "Because she was taken from out of his flesh, what did the first man call the first woman?",
	{
		2:"Adama",
		3:"Eve",
		1:"Woman",
		4:"Wife"
	}, "(Gn 1:23)"
	],
	[ "What did the Lord God give to serve as food for all the animals of the land and all the birds of the air?",
	{
		1:"The green plants",
		3:"Seed-bearing plants",
		4:"Seed-bearing fruit trees",
		2:"Anything edible"
	}, "(Gn 1:30)"
	],
	[ "In the First Story of Creation in the Book of Genesis, how many days did it take God to create the Universe?",
	{
		1:"Six",
		2:"Seven",
		3:"One score",
		4:"Forty"
	}, "(Gn 1:1-31)"
	],
	[ "In which day of Creation did God create the sun and moon?",
	{
		4:"First",
		3:"Third",
		2:"Second",
		1:"Fourth"
	}, "(Gn 1:14-19)"
	],
	[ "In which day of Creation did God create our first parents?",
	{
		1:"Sixth",
		2:"Seond",
		3:"Fifth",
		4:"Seventh"
	}, "(Gn 1:26-31)" 
	],
	[ "In which day of Creation did God create day and night?",
	{
		2:"Second",
		3:"Third",
		1:"First",
		4:"Fourth"
	}, "(Gn 1:3-5)" ],
];
genesis = genesis.sort(function(a, b){return 0.5 - Math.random()});
