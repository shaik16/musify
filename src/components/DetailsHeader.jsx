import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.data[0]?.attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-slate-800 sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
        <img
          className="sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          src={
            artistId
              ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images.background
          }
          alt="art"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-48 h-24" />
    </div>
  );
};

export default DetailsHeader;
