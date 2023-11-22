import Track from './Track'

import '../styles/TrackList.css'

function TrackList({ searchTrack }) {
  return (
    <div className='tracklist'>
      { 
        searchTrack && searchTrack.map(
          track => ( 
            <Track key={track.id} name={track.name} artist={track.artist} album={track.album}/>
          )
        )
      }
    </div>
  )
}

export default TrackList