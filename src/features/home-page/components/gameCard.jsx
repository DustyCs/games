import { useEffect, useState } from "react";

export default function GameCard({ images, video, title, description, releaseDate, category, tags, link }) {
    // console.log("GameCard props:", { images, video, title, description, releaseDate, category, tags });
    const [imageIndex, setImageIndex] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

  return (
    <div className='relative shadow-md rounded-md h-full w-full'>
        <div className="flex">
            <div className='h-[20rem] w-[75%] bg-gray-200 mb-4'>
                {images && images.length > 1 ? (
                    <img src={images[imageIndex]} alt={title} className='h-full w-full object-cover' />
                ) : (
                    <img src={images[0]} alt={title} className='h-full w-full object-cover' />
                )}
            </div>
            <div className="items-center flex flex-col">
                <h2 className='text-center text-2xl font-bold mb-2'>{title}</h2>
                <p className='text-gray-500 mb-2'>Release Date: {releaseDate}</p>
                <p className='text-gray-500 mb-2'>Category: {category}</p>
            </div>
        </div>
       
        <p className='text-gray-700 mb-4 px-4'>{description}</p>
        
        <div className='flex flex-wrap gap-2 px-2'>
            {tags && tags.length > 0 ? (
                tags.map((tag, index) => (
                    <span key={index} className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm'>
                        {tag}
                    </span>
                ))
            ) : (
                <span className='text-gray-500'>No tags available</span>
            )}
        </div>
        <div className="absolute bottom-5 left-5">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Play Now</a>
        </div>
    </div>
  )
}
