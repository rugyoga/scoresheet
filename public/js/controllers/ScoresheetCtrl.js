app
.controller(
  "ScoresheetCtrl",
  function($scope)
  {
	$scope.home  = { name: "", wins: 0, player: [{name: "", match: [], home: 1}, {name: "", match: [], home: 1}, {name: "", match: [], home: 1}, {name: "", match: [], home: 1}]};
	$scope.away  = { name: "", wins: 0, player: [{name: "", match: [], home: 0}, {name: "", match: [], home: 0}, {name: "", match: [], home: 0}, {name: "", match: [], home: 0}]};
	$scope.match = [
		{ home: 0, away: 0, breaks: false, tablerun: 0 },
		{ home: 1, away: 1, breaks: true , tablerun: 0 },
		{ home: 2, away: 2, breaks: false, tablerun: 0 },
		{ home: 3, away: 3, breaks: true , tablerun: 0 },
		{ home: 1, away: 0, breaks: true , tablerun: 0 },
		{ home: 0, away: 1, breaks: true , tablerun: 0 },
		{ home: 2, away: 3, breaks: true , tablerun: 0 },
		{ home: 1, away: 2, breaks: false, tablerun: 0 },
		{ home: 3, away: 1, breaks: false, tablerun: 0 },
		{ home: 0, away: 3, breaks: false, tablerun: 0 },
		{ home: 2, away: 0, breaks: true , tablerun: 0 },
		{ home: 3, away: 2, breaks: true , tablerun: 0 },
		{ home: 1, away: 3, breaks: false, tablerun: 0 },
		{ home: 2, away: 1, breaks: false, tablerun: 0 },
		{ home: 0, away: 2, breaks: true , tablerun: 0 },
		{ home: 3, away: 0, breaks: false, tablerun: 0 }
		];
	for (var i = 0; i < $scope.match.length; i++)
	{
		var m = $scope.match[i];
		$scope.home.player[m.home].match.push( i );
		$scope.away.player[m.away].match.push( i );
	}
	
	$scope.record_result =
		function( m, result )
		{
			m.win  = result;
			m.loss = 1-result;
			$scope.home.wins = _.filter( $scope.match, function(m){ return m.win == 1; } ).length;
			$scope.away.wins = _.filter( $scope.match, function(m){ return m.loss == 1; } ).length;
		}
	$scope.wins =
		function(p)
		{
			var matches = _.map( p.match, function(m){ return $scope.match[m]; } );
			return _.filter( matches, function( m ){ return (p.home ? m.win : m.loss) == 1; } );
		}
	$scope.losses =
		function(p)
		{
			var matches = _.map( p.match, function(m){ return $scope.match[m]; } );
			return _.filter( matches, function( m ){ return (p.home ? m.win : m.loss) == 0; } );
		}
	$scope.tableruns = function(p){ return _.filter( $scope.wins(p), function(m){ return m.tablerun == 1; } ); }
  }
)