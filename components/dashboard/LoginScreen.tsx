import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const LoginScreen = () => {
    const [image, setImage] = useState("")
    const [showFullImage, setShowFullImage] = useState(false)
    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <div className="loginScreen h-full center">
            <div className="bg-black w-4/5 h-4/5 p-4">
                <form className="h-1/2">
                    <h1 className="text-2xl">Movie Poster</h1>
                    <div className="posterUpload relative h-1/2 border-2 border-zinc-500 my-2">
                        <input type="file" name="poster" className="absolute opacity-0 cursor-pointer w-full h-full" onChange={onImageChange} />
                        <img src={image} alt="preview" className={`w-full h-full object-contain ${!image && "hidden"}`} />
                        <div className={`flex-col h-full ${image && "hidden"}`}>
                            <h1 className="center h-full">Upload File</h1>
                        </div>
                    </div>
                    {
                        image && (
                            <>
                                <div className={`${!showFullImage ? "hidden" : ""}`}>
                                    <div className="overlay" />
                                    <div className="bg-black center center-no-flex z-20 w-3/4 h-3/4">
                                        <FontAwesomeIcon icon={faClose} onClick={() => { setShowFullImage(false) }} className="absolute top-0 right-0 m-4 cursor-pointer" />
                                        <img src={image} alt="preview" className="w-3/4 h-3/4" />
                                    </div>
                                </div>
                                <button className="btn" type='button' onClick={() => setShowFullImage(true)}>Show Full Image</button>
                                <button className="btn" type='button' onClick={() => setImage("")}>Remove Image</button>
                            </>
                        )
                    }
                    <button type="submit" className="btn">Update</button>
                </form>
                <form className="h-1/2 flex flex-col justify-end">
                    <h1 className="text-xl">Hash Color</h1>
                    <input type="text" className="input" placeholder="#000000" />
                    <button type="submit" className="btn">Update</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen