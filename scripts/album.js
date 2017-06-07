var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumSimonandGarfunkel = {
     title: 'Bridge Over Troubled Water',
      artist: 'Simon and Garfunkel',
      label: 'EM',
      year: '1970',
     albumArtUrl: 'assets/images/album_covers/simongarfunkel.png',
      songs: [
          { title: 'Bridge Over Troubled Water', duration: '1:01' },
          { title: 'El Condor Pasa', duration: '5:01' },
          { title: 'Cecilia', duration: '3:21'},
          { title: 'Keep the Customer Satisfied', duration: '3:14' },
          { title: 'The Boxer', duration: '2:15'}
     ]
  };

var createSongRow = function(songNumber, songName, songLength){
var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

     return $(template);
    };

    var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
/*var currentlySelectedAlbum;*/
var setCurrentAlbum = function(album) {
     /*currentlySelectedAlbum = album;*/


     $albumTitle.text(album.title);
      $albumArtist.text(album.artist);
      $albumReleaseInfo.text(album.year + ' ' + album.label);
      $albumImage.attr('src', album.albumArtUrl);

    $albumSongList.empty();

    for (var i = 0; i < album.songs.length; i++) {
      var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
      $albumSongList.append($newRow);
     }
};

/*var findParentByClassName = function(parentClass, child){
  var findParent = child.parentNode;
  while(findParent.getAttribute('class') != parentClass){
    findParent = child.parentNode;

} return findParent; };*/

var findParentByClassName = function(element, targetClass) {
    if (element) {
        var currentParent = element.parentElement;
        while (currentParent.className !== targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
    }
};


var getSongItem = function(element) {
    switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }
};

var clickHandler = function(targetElement) {
  var songItem = getSongItem(targetElement);
  if(currentlyPlayingSong === null){
    songItem.innerHTML = pauseButtonTemplate;
    currentlyPlayingSong = songItem.getAttribute('data-song-number');
  } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')){
     songItem.innerHTML = playButtonTemplate;
     currentlyPlayingSong = null;
    } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     }
 };

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var currentlyPlayingSong = null;
var songRows = document.getElementsByClassName('album-view-song-item');

window.onload = function() {
     setCurrentAlbum(albumPicasso);

  songListContainer.addEventListener('mouseover', function(event) {
         // #1
          if (event.target.parentElement.className === 'album-view-song-item') {
            /*  event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;*/

         var songItem = getSongItem(event.target);

         if(songItem.getAttribute('data-song-number') !== currentlyPlayingSong){
           songItem.innerHTML = playButtonTemplate;
         }
       }
     });

     for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
             // Revert the content back to the number
            var songItem = getSongItem(event.target);
            var songItemNumber = songItem.getAttribute('data-song-number');
            if (songItemNumber !== currentlyPlayingSong) {
                songItem.innerHTML = songItemNumber;
            }
         });
         songRows[i].addEventListener('click', function(){
            clickHandler(event.target);
         });
     }

     var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
     songListContainer.addEventListener('mouseover', function(event) {
         // #1
         if (event.target.parentElement.className === 'album-view-song-item') {
              event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         }
     });

     for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
             // Revert the content back to the number
             this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
         });
     }

     var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
     songListContainer.addEventListener('mouseover', function(event) {
         // #1
         if (event.target.parentElement.className === 'album-view-song-item') {
              event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         }
     });

     for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
             // Revert the content back to the number
             this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
         });
     }

    var albums = [albumPicasso, albumMarconi, albumSimonandGarfunkel];
         var index = 1;
      albumImage.addEventListener('click', function(event){
          setCurrentAlbum(albums[index]);
          index++;
          if(index == albums.length){
              index = 0;
          }
          });

  /*  albumImage.addEventListener("click", function(event){
    for(var i = 1;i < albums.length;i++){
         setCurrentAlbum(albums[i]);
    } if(i == albums.length){
         i = 0;}
 });*/

    /*   document.getElementsByClassName('album-cover-art').addEventListener('click', function(event){
  if(currentlySelectedAlbum == albumPicasso){
        currentlySelectedAlbum = albumMarconi;
     } else if (currentlySelectedAlbum == albumMarconi){
         currentlySelectedAlbum = albumSimonandGarfunkel;
     } else if (currentlySelectedAlbum == albumSimonandGarfunkel){
         currentlySelectedAlbum = albumPicasso;
     }

  } );*/
    };
