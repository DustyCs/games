import DustyCS from '../../../assets/projects/DustyChar.png'
import { gamesData, oldGamesData } from '../data/gamesData'

import { setCategoryOnLocalStorage } from '../../../utils/helper'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import GameCard from '../components/gameCard'

export default function HomePage() {
  const [currentCategory, setCurrentCategory] = useState('Horror')
  const [tags, setTags] = useState([])

  console.log("data", gamesData[0])

  useEffect(() => {
    const storedCategory = localStorage.getItem('currentCategory')
    if (storedCategory) {
      setCurrentCategory(storedCategory)
    }
  }, [])

  const controls = useAnimation()

  const gameTags = [
    { name: 'Horror', id: 1 },
    { name: 'Action', id: 2 },
    { name: 'Adventure', id: 3 },
    { name: 'Puzzle', id: 4 },
  ]

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
              <div className='bg-gray-100'>
                <div className=''>
                  <h2 className='text-2xl font-bold'>Category</h2>
                  <select 
                    className='w-full p-2 rounded-md border-2 border-gray-300'
                    value={currentCategory}
                    onChange={(e) => {
                      setCurrentCategory(e.target.value)
                      setCategoryOnLocalStorage(e.target.value)
                    }}
                  >
                      <option value="Horror">Horror</option>
                      <option value="Action">Action</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Puzzle">Puzzle</option>
                  </select>
                </div>
                <div>
                  <motion.img
                    src={DustyCS}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div>
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
                  <div className='sm:col-span-2 sm-row-span-2 bg-red-300'>
                    {/* <GameCard props={gamesData[0]}/> Wrong way to pass props */}
                    <GameCard {...gamesData[0]}/>
                  </div>
                  {oldGamesData.map((game, index) => (
                    <div className='p-4' key={index}>
                      <GameCard key={index} {...game} />
                    </div>
                  ))}
                  {/* <div className="bg-blue-300 p-4">Card 2</div>
                  <div className="bg-green-300 p-4">Card 3</div>
                  <div className="bg-yellow-300 p-4">Card 4</div>
                  <div className="bg-purple-300 p-4">Card 5</div> */}
              </div>
      
            </div>
        </div>
    </div>
  )
}
