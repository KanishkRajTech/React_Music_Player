import React, { useContext } from "react";
import {  assets } from "../assets/assets";
import { PlayerContext } from "../Contex/PlayerContex";
const Player = () =>{


    const {seekBar, seekBg,playStatus, play,pause,track,time,previous,next,seekSong} = useContext(PlayerContext)

    return(
        <div className="h-[10%] bg-black flex justify-betwee items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img src={track.image} alt="" className="w-12"/>
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0,12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4 ">
                    <img  src={assets.shuffle_icon} className="w-4 cursor-pointer" alt="" />
                    <img onClick={previous} src={assets.prev_icon} className="w-4 cursor-pointer" alt="" />
                    {
                        playStatus 
                        ?  <img onClick={pause} src={assets.pause_icon} className="w-4 cursor-pointer" alt="" /> 
                        :  <img onClick={play} src={assets.play_icon} className="w-4 cursor-pointer" alt="" /> 
                    }
                    <img onClick={next} src={assets.next_icon} className="w-4 cursor-pointer" alt="" />
                    <img src={assets.loop_icon} className="w-4 cursor-pointer" alt="" />
                </div>
                <div className="flex items-center gap-5 ">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className="w-4" src={assets.plays_icon} alt="" />
                <img className="w-4" src={assets.mic_icon} alt="" />
                <img className="w-4" src={assets.queue_icon} alt="" />
                <img className="w-4" src={assets.speaker_icon} alt="" />
                <img className="w-4" src={assets.volume_icon} alt="" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
                <img className="w-4" src={assets.mini_player_icon} alt="" />
                <img className="w-4" src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default Player;