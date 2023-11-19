import Track from './Track'

function TrackList({ tracks }) {
  return (
    <>
      { tracks.map(track => (
          <Track key={track.id} title={track.title} artist={track.artist} />
      ))}
    </>
  )
}

export default TrackList