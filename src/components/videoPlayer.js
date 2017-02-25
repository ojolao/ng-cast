angular.module('video-player')

.controller('videoPlayerController', function($scope) {

})

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    }, 
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {

    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});

