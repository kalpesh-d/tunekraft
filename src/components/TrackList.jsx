import Track from './Track'

import '../styles/TrackList.css'

function TrackList({ data, searchSong, error }) { 
  const filteredData = data?.filter(track => (
    track.name.toLowerCase().includes(searchSong.toLowerCase())
  )) 

  return (
    <div className='tracklist'>
      { error && <p className='error'>{error}</p> }
      { 
        filteredData && filteredData.map(track => ( 
            <Track key={track.id} name={track.name} artist={track.artist} album={track.album}/>
        ))
      }
    </div>
  )
}

export default TrackList