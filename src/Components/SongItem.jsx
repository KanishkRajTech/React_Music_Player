import React, { useContext,  useState } from "react";
import { PlayerContext } from "../Contex/PlayerContex";

const SongItem = ({ name, image, desc, id }) => {
    const { playWithId,handleSongClick ,activeSongId} = useContext(PlayerContext); 
  
    return (
        <div
            onClick={() => handleSongClick(id)}
            className={`min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] 
            ${activeSongId === id ? "bg-[#ffffff26]" : "hover:bg-gray-700"}`}
        >
           
            
            <img className="rounded" src={image} alt={name} />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    );
};

export default SongItem;
