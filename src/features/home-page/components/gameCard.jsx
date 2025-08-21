export default function GameCard({ images, video, title, description, releaseDate, category, tags, link }) {
    // console.log("GameCard props:", { images, video, title, description, releaseDate, category, tags });
  return (
    <div className='shadow-md rounded-lg h-full w-full'>
        <div className="flex">
            <div className='h-[20rem] w-[75%] bg-gray-200 mb-4'>
                {images && images.length > 0 ? (
                    <img src={images[0]} alt={title} className='h-full w-full object-cover rounded-lg' />
                ) : (
                    <img src='https://via.placeholder.com/150' alt={title} className='h-full w-full object-cover rounded-lg' />
                )}
            </div>
            <div>
                <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                <p className='text-gray-500 mb-2'>Release Date: {releaseDate}</p>
                <p className='text-gray-500 mb-2'>Category: {category}</p>
            </div>
        </div>
       
        <p className='text-gray-700 mb-4'>{description}</p>
        
        <div className='flex flex-wrap gap-2'>
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
    </div>
  )
}
