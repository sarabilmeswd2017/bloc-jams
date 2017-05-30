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
     albumArtUrl: 'assets/images/album_covers/botw_cover.jpg',
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
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
    };
var currentlySelectedAlbum;
var setCurrentAlbum = function(album) {
     currentlySelectedAlbum = album;
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    
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
    
       document.getElementsByClassName('album-cover-art').addEventListener('click', function(event){
  if(currentlySelectedAlbum == albumPicasso){
        currentlySelectedAlbum = albumMarconi;
     } else if (currentlySelectedAlbum == albumMarconi){
         currentlySelectedAlbum = albumSimonandGarfunkel;
     } else if (currentlySelectedAlbum == albumSimonandGarfunkel){
         currentlySelectedAlbum = albumPicasso;
     }
     
  } );
    };


   


  
