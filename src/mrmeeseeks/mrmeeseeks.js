var MrMeeseeks = {
	messageOnCreate: "I'm Mr Meeseeks! Look at meeee!"
}

var factory = {
	mrMeeseeks: null,
	get: function() {
		if (factory.mrMeeseeks == null) {
			factory.mrMeeseeks = Object.create(MrMeeseeks);
		}
		return factory.mrMeeseeks;
	}
};

exports.singleMrMeeseeks = factory;
