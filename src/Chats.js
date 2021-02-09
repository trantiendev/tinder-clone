import React from 'react'
import './stylesheets/Chats.css'
import Chat from './Chat'

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Chillies"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://i1.sndcdn.com/artworks-000541252098-l0zhom-t500x500.jpg"
      />
      <Chat
        name="Min"
        message="Anh an com chua"
        timestamp="5 minutes ago"
        profilePic="https://baotuoitre.net/wp-content/uploads/2019/06/tieu-su-min-5.jpg"
      />
      <Chat
        name="Billie"
        message="I want you bigboi"
        timestamp="9 hours ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/400px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg"
      />
    </div>
  )
}

export default Chats
