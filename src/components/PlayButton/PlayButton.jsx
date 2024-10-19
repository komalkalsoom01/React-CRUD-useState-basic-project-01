import React from "react";

const PlayButton = ({ children, onPlay, onPause }) => {
    const [playing,setPlaying]=React.useState(false)
    
    function handleClick(){
        if(playing){
            onPause();

        }else{
            onPlay();
        }
      setPlaying(!playing)
  
    }
  return (
    <button className="bg-red-900 text-white rounded-md mt-2 p-2 w-full"
    onClick={handleClick}
    >
      {children} <span>{playing?"⏸️ Play Product Video":"▶️ Pause Product Video"}</span>
    </button>
  );
};

export default PlayButton;