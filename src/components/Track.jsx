import '../styles/Track.css'

function Track({ title, artist }) {
  return (
    <div className="track">
      <div className='track-content'>
        <h3 className="track-title">{title}</h3>
        <p className="track-artist">{artist}</p>
      </div>
      <button className='track-plus' disabled>+</button>
    </div>
  )
}

export default Track