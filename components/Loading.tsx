import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-full h-full absolute flex-col">
            <div className="overlay">
            </div>
            <div className="z-20 text-center">
                <img src="/TMP.ico" alt="Loading.." className="w-24 h-24 m-auto animate-bounce" />
                <h1 className="text-3xl mt-4 font-extrabold font-mono">Loading...</h1>
            </div>
        </div>
    )
}

export default Loading