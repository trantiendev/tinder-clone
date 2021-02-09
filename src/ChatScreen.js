import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './stylesheets/ChatScreen.css'

function ChatScreen() {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([
    {
      name: 'Min',
      image: 'https://baotuoitre.net/wp-content/uploads/2019/06/tieu-su-min-5.jpg',
      message: 'An an com chua'
    },
    {
      name: 'Min',
      image: 'https://baotuoitre.net/wp-content/uploads/2019/06/tieu-su-min-5.jpg',
      message: 'An an com co ngon khong'
    },
    {
      message: '<3 anh an roi ne'
    },
  ])

  const onHandleInput = e => {
    e.preventDefault();
    
    setMessages([...messages, {message: inputValue}])
    setInputValue('')
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__title">you Matched with min on 10/08/2020</p>
      
      {
        messages.map(message => (
          message.name ? (
            <div className="chatScreen__message" key={message.message}>
              <Avatar className="chatScreen_image" src={message.image} alt={message.name}/>
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message" key={message.message}>
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        ))
      }
      <form className="form">
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="input" placeholder="Type a message..." type="text" />
        <button onClick={onHandleInput} type='submit' className="btn">SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen