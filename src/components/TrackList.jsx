import Track from './Track'

import '../styles/TrackList.css'

function TrackList({ data, searchSong }) { 
  return (
    <div className='tracklist'>
      { 
        data &&
        data.filter(trackSearch => (trackSearch.name.toLowerCase().includes(searchSong)))
        .map(track => ( 
            <Track key={track.id} name={track.name} artist={track.artist} album={track.album}/>
        ))
      }
    </div>
  )
}

export default TrackList