angular.module('video-player')
  .controller('AppCtrl', ['$scope', function($scope) {
    $scope.allVideos = window.exampleVideoData;
    $scope.length = $scope.allVideos.length;
    $scope.video = [];
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

