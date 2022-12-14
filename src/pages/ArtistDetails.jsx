import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCoreV2';

const ArtistDetails = () => {
  const { id: artistId } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error: artistsError
  } = useGetArtistDetailsQuery({ artistId });

  if (isFetchingArtistDetails) return <Loader title="Searching artist  details" />;

  if (artistsError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={artistData?.data[0]?.views['top-songs'].data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
