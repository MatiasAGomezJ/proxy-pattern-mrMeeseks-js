function MrMeeseeks() {
	this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
	this.messageOnRequest = [
		"Oh, yeah!, Yes, ma'am!",
		"Yes sireee!",
		"Oooh yeah! Can do!"
	];
	this.speakOnRequest = function() {
		randomIndex = Math.floor(Math.random() * this.messageOnRequest.length);
		return this.messageOnRequest[randomIndex]
	};
	this.makeRequest = function(verb, object) {
		let closure = function(object) {
			function execute() {
				return verb + " " + object;
			}
			return execute;
		};
		this.accion = closure(object);
	};
	this.fulfillRequest = function() {
		return this.accion() + " All done!!";
	};
}

var factory = {
	mrMeeseeks: null,
	get: function() {
		if (factory.mrMeeseeks == null) {
			factory.mrMeeseeks = new MrMeeseeks;
		}
		return factory.mrMeeseeks;
	}
};

exports.singleMrMeeseeks = factory;
