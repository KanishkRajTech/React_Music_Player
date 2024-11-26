import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../Contex/PlayerContex";

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId,handleSongClick ,activeSongId} = useContext(PlayerContext);


    return (
        <>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className="w-48 rounded" src={albumData.image} alt="" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
                        <b> Spotify </b>
                        1,234,123 likes
                        <b> 50 songs, </b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className="text-sm text-gray-400 mt-6 mb-2 px-4">
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 items-center">
                    <p><b>#</b> Title</p>
                    <p className="text-center">Album</p>
                    <p className="hidden sm:block text-center">Date Added</p>
                    <img className="w-4 justify-self-center" src={assets.clock_icon} alt="Duration" />
                </div>
                <hr className="border-gray-700 my-2" />

                <div>
                    {songsData.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => handleSongClick(item.id)}
                            className={`grid grid-cols-4 sm:grid-cols-5 gap-4 items-center p-3 cursor-pointer text-white text-sm 
                                ${activeSongId === item.id ? "bg-gray-800" : "hover:bg-gray-700"}`}
                        >
                            <div className="flex items-center gap-3">
                                <p className="text-gray-400">{index + 1}</p>
                                <img src={item.image} className="w-10 h-10 rounded" alt={item.name} />
                                <p className="font-medium truncate">{item.name}</p>
                            </div>
                            <p className="text-center text-gray-400 text-xs">{albumData.name}</p>
                            <p className="hidden sm:block text-center text-gray-400 text-xs">5 Days ago</p>
                            <p className="text-xs text-center">{item.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DisplayAlbum;
