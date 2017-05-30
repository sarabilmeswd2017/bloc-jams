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

     return template;
    };

    var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
/*var currentlySelectedAlbum;*/
var setCurrentAlbum = function(album) {
     /*currentlySelectedAlbum = album;*/


    albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
};

window.onload = function() {
     setCurrentAlbum(albumPicasso);

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