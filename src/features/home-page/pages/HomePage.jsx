import DustyCS from '../../../assets/projects/DustyChar.png'
import { gamesData, oldGamesData } from '../data/gamesData'

import { setCategoryOnLocalStorage } from '../../../utils/helper'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import GameCard from '../components/gameCard'
import GamesCard from '../components/gamesCard'


const gameTags = [
    { name: 'Action', id: 1 },
    { name: 'Adventure', id: 2 },
    { name: 'Puzzle', id: 3 },
    { name: 'Running', id: 4 },
    { name: 'Horror', id: 5 },
  ]

export default function HomePage() {
  const [currentCategory, setCurrentCategory] = useState('All')
  const [tags, setTags] = useState([])

  const allGames = [...gamesData, ...oldGamesData]

  const filteredGames = allGames.filter((game) => {
    const categoryMatch = currentCategory ? game.category === currentCategory : true;

    const tagMatch =
      tags.length > 0
        ? tags.some((tagId) => {
            const selectedTagName = gameTags.find((tag) => tag.id === tagId)?.name.toLowerCase();
            return game.tags.some((t) => t.toLowerCase() === selectedTagName);
          })
        : true;

    return categoryMatch && tagMatch;
  });

  const showFeautured = tags.length === 0 && filteredGames.length > 0

  console.log("filteredGames", filteredGames)

  useEffect(() => {
    const storedCategory = localStorage.getItem('currentCategory')
    if (storedCategory) {
      setCurrentCategory(storedCategory)
    }
  }, [])

  const controls = useAnimation()

  const handleChange = (id) => {
    setTags((prev) =>
      prev.includes(id)
        ? prev.filter((tagId) => tagId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className='h-full'>
        <div className='w-[95vw] m-auto mt-1'>
            <h1 className='text-6xl px-4 font-extrabold mb-4'>Games</h1>
            <div className='sm:flex w-full'>
              <div className='bg-gray-100 h-full shadow-md shadow-rose-700 sm:max-w-[13rem]'>
                <div className=''>
                  <h2 className='text-2xl font-bold justify-center flex'>Category</h2>
                  <select 
                    className='w-full p-2 rounded-md border-2 border-gray-300'
                    value={currentCategory}
                    onChange={(e) => {
                      setCurrentCategory(e.target.value)
                      setCategoryOnLocalStorage(e.target.value)
                    }}
                  >
                      <option value="All">All</option>
                      <option value="Horror">Horror</option>
                      <option value="Action">Action</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Puzzle">Puzzle</option>
                  </select>
                </div>
                <div>
                  <motion.img
                    src={DustyCS}
                    initial={{ rotate: -5 }}
                    animate={{ rotate: 10 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>
                <div className='px-2'>
                  <h4 className='text-xl'>Filter</h4>
                  <div>
                    {
                      gameTags.map((tag) => (
                        <div key={tag.id}>
                          <label>
                            <input type="checkbox" checked={tags.includes(tag.id)} onChange={() => handleChange(tag.id)} />
                            {tag.name}
                          </label>
                        </div>
                      ))
                    }
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <strong>Selected Tags:</strong> {tags.map((tagId) => gameTags.find((tag) => tag.id === tagId).name).join(", ")}
                  </div>
                </div>
              </div>
              <div className='sm:grid sm:grid-cols-3 auto-rows-max grid-flow-dense sm:gap-4 sm:px-4 mt-4 w-full'> 
                {tags.length === 0 && currentCategory === "All" ? (
                  // Default layout
                  <>
                    <div className='sm:col-span-2 sm:row-span-1'>
                      <GameCard {...gamesData[0]} />
                    </div>
                    {oldGamesData.map((game, index) => (
                      <div className='p-4' key={index}>
                        <GamesCard {...game} />
                      </div>
                    ))}
                  </>
                ) : (
                  // Filtered layout
                  <>
                    {filteredGames.length > 0 ? (
                      filteredGames.map((game, index) => (
                        <div className='p-4' key={index}>
                          <GamesCard {...game} />
                        </div>
                      ))
                    ) : (
                      <p className='text-gray-500 col-span-3'>No games found for this filter.</p>
                    )}
                  </>
                )}
              </div>
            </div>
        </div>
    </div>
  )
}
