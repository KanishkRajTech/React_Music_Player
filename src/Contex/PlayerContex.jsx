import { createContext,useEffect,useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) =>{
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [activeSongId, setActiveSongId] = useState(null);
    const [track,settrack] = useState(songsData[2]);
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play =() =>{
        audioRef.current.play();
        setPlayStatus(true)
    }
    const pause =() =>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async(id)=>{
        await settrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async() =>{
        if(track.id > 0){
            await settrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true)
        }
    }
    const next = async() =>{
        if(track.id < songsData.length -1){
            await settrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true)
        }
    }
    const seekSong = async (e) =>{
        audioRef.current.currentTime= ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = `${Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100)}%`;
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60) || 0, 
                        minute: Math.floor(audioRef.current.duration / 60) || 0, 
                    },
                });
            };
        }
        // return () => {
        //     if (audioRef.current) {
        //         audioRef.current.ontimeupdate = null; 
        //     }
        // };
    }, [audioRef]);
    
    const handleSongClick = (songId) => {
        setActiveSongId(songId);
        playWithId(songId); 
    };

    const  contexValue = {
        audioRef,
        seekBar,
        seekBg,
        track, settrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,next,
        seekSong,
        activeSongId, setActiveSongId,
        handleSongClick

    }
    return(
        <PlayerContext.Provider value={contexValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;