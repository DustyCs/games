export default function GamesCard({ images, title, category, tags, link }) {
  return (
    <div className='shadow-lg rounded-md h-full w-full'>
        <div className="flex flex-col">
            <div className='h-[20rem] w-full bg-gray-200 mb-4'>
                {images && images.length > 0 ? (
                    <img src={images[0]} alt={title} className='h-full w-full object-cover rounded-sm' />
                ) : (
                    <img src='https://via.placeholder.com/150' alt={title} className='h-full w-full object-cover rounded-lg' />
                )
                }
            </div>
            <div className="p-2">
                <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                <p className='text-gray-500 mb-2'>Category: {category}</p>
            </div>
            <div className='flex flex-wrap gap-2 p-2'>
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
            <div className="p-2">
                { link == false ? null :
                    link == "soon" ? <span className="text-gray-500">In Development</span> :
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View Game
                    </a>
                }
            </div>
        </div>
    </div>
  )
}
