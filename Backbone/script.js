var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({model:Song});

var songs = new Songs([
		new Song({title:'Blue in green',year:'2009'}),
		new Song({title:'Linkin Park',year:'2010'}),
		new Song({title:'Eminem',year:'2011'})
	]);

var SongView = Backbone.View.extend({
	tagName: "li",
	render:function () {	
		this.$el.html(this.model.get('title'));
		return this;
	}
});
var SongsView = Backbone.View.extend({

	render:function () {
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({model:song});
			self.$el.append(songView.render().$el);
		});
	}
});

var songsView = new SongsView({
	el:'#songs',
	model:songs
});
songsView.render();

