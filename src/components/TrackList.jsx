import Track from './Track'

import '../styles/TrackList.css'

function TrackList({ tracks }) {
  return (
    <div className='tracklist'>
      { tracks.map(track => (
          <Track key={track.id} title={track.title} artist={track.artist} />
      ))}
    </div>
  )
}

export default TrackList