import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'

const Discover = () => {
  const genreTitle = 'pop'
  return (
    <div className='flex flex-col'>
      <div id='discover-head' className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white'>Discover</h2>
        <select
          className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
          onChange={() => {}}
          value=''
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, index) => (
          <SongCard key={song} song={song} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Discover
