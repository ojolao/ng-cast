angular.module('video-player')

.controller('videoListController', function($scope) {
  $scope.onClick = function() {
  };
})

.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<' 
    }, 
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {

    },
    templateUrl: 'src/templates/videoList.html'
  };
});

