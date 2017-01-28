Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

		launch: function() {
			
			console.log('my first app- woot!');
			this._loadData();
			},
			
		// Get data from Rally
		_loadData: function() {
			var myStore = Ext.create('Rally.data.wsapi.Store', {
				model: 'User Story',
				autoLoad: true,
				listeners: {
					load: function(myStore, myData, success) {
						console.log('got data', myStore, myData, success);
						this._loadGrid(myStore);
					},
					scope: this
				},
				fetch: ['FormattedID', 'Name', 'ScheduleState']
			});
		},
		
		// Create and show a grid of user stories
		_loadGrid: function(myStoryStore) {
			var myGrid = Ext.create('Rally.ui.grid.Grid', {
				store: myStoryStore,
				columnCfgs: [
					'FormattedID', 'Name', 'ScheduleState'
				]
			});
			
			this.add(myGrid);
			console.log('what is this?', this);
			
		}

});
