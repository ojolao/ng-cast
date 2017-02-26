angular.module('video-player')

.controller('videoListController', function() {

})

.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<' 
    }, 
    restrict: 'E',
    controller: 'videoListController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html'
  };
});

