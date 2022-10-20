import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetCountryQuery } from '../redux/services/geoLocation';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: countryData, isFetching: isFetchingCountry } = useGetCountryQuery();

  const { data, isFetching, error } = useGetSongsByCountryQuery(
    { country: countryData?.location?.country },
    { skip: !countryData?.location?.country, refetchOnFocus: false }
  );

  if (isFetching || isFetchingCountry) return <Loader title="Loading songs around you" />;

  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black text-xs">{countryData?.location?.country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard
            key={song?.key}
            song={song}
            index={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
