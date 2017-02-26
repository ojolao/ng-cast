angular.module('video-player')

.controller('videoPlayerController', function() {
   
})

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    }, 
    restrict: 'E',
    controller: 'videoPlayerController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  };
});

