const ArtistCoverImage = ({ deets }) => {
  return (
    <div className="relative h-full group cursor-pointer overflow-hidden">
      <img className="" src={deets?.images[0]?.url} />
      <div className="absolute z-2 left-0 top-0 mx-2 mt-10 py-1 px-1 rounded-sm bg-slate-500/30 hidden group-hover:block">
        <span className="block text-sm">{deets?.name}</span>
        <span className="text-xs">Search: {deets?.origSearchTerm}</span>
      </div>
    </div>
  );
};

export default ArtistCoverImage;
