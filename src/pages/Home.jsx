import React from 'react'



const Home = () => {
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        {/* <img src="/my-logo.png" alt="" /> */}
        <img className='homelogo' src="/editor-logo.jpg" alt="" />
        <h4 className='mainLable'>
          Paste Room ID
        </h4>


        <div className="inputGroup">
          <input type='text ' className='inputBox' placeholder='ROOM ID' />
          <input type='text ' className='inputBox' placeholder='USERNAME' />
          <button className='btn joinBtn' onClick={() => {

          }}>
            Join
          </button>


          <span className="createInfo">


            if you don't have invite create

            <a href='/new-room' className='createNewbtn'>new room</a>
          </span>
        </div>



      </div>

      <h4 className="footer">
        Built by &nbsp;
        <a href='https://github.com/P00JARY'>Ashil Poojary</a>
      </h4>
    </div>
  )
}

export default Home