import React from 'react'
import Player from "./player.js"
// import testImage from '../images/profilePicture.jpg';

function Audio() {
	return (
		<React.Fragment>
			<h2>Audio</h2>
			<ul>
				<li>Audio Player</li>
			</ul>

			<div>

      <h3 align="center">Album Cover Placeholder</h3>
			{/* <img className="album-img" src={testImage} alt='album cover title' /> */}
			<div>
				<h3 align="center">Album Title - Track Title</h3>
				<div className="audio">
					<Player src={"https://www.mboxdrive.com/kaalan2.mp3"}/>
				</div>
			</div>
  
      <h3 align="center">Album Title - Track Title</h3>
      <div className="audio">
        <Player src={"https://www.mboxdrive.com/(z2.fm)2.mp3"}/>
      </div>
    </div>
		



			</React.Fragment>
	)
}

export default Audio