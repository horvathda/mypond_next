import ReactPlayer from "react-player";

const Youtube = () =>(


      <div className="video_box">
      
      <div className='player-wrapper'>
          <video
            className='react-player fixed-bottom'
            src= '/video/video.mp4'
            width='100%'
            height='100%'
            controls = {true}
            
  
          />
        </div>
      </div> 
    );
 


export default Youtube;
