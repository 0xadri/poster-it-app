const ArtistCoverImage = ({ deets }) => {
  return (
    <div className="relative">
      <img className="w-full" src={deets?.images[0]?.url} />
      <div className="absolute z-1 left-0 top-1/2 mx-2 -mt-[16px]">
        <span className="block">{deets?.name}</span>
        <span className="text-xs">Search: {deets?.origSearchTerm}</span>
      </div>
    </div>
  );
};

export default ArtistCoverImage;
