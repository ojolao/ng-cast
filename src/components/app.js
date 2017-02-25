angular.module('video-player')
  .controller('AppCtrl', ['$scope', function($scope) {
    $scope.selectVideo = function() {
    };
  }])

.directive('app', function() {
  return {

    scope: {
      selectVideo: '<'

    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };


}
);

