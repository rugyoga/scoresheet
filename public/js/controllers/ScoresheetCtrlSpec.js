describe( 'ScoresheetCtrl', function()
{
	var scope, ctrl;
	beforeEach(module('Scoresheet'));
	beforeEach(inject(function($rootScope){ $scope = $rootScope.$new(); } ));
	beforeEach(inject(function($controller){ ctrl  = $controller( 'ScoresheetCtrl', { $scope: $scope } ); } ));
	
	it( 'should contain a record_result method',
		function()
		{
			expect( $scope.home ).toBeDefined();
			expect( $scope.away ).toBeDefined();
			expect( $scope.match ).toBeDefined();
			expect( $scope.substitute ).toBeDefined();
			expect( $scope.record_result ).toBeDefined();
			expect( $scope.wins ).toBeDefined();
			expect( $scope.losses ).toBeDefined();
		}
	);
	
		it( 'should contain a record_result method',
		function()
		{
			expect( 1 ).toBeTruthy();
		}
	);
	
});