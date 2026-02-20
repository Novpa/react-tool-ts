type SearchTaskProps = {
  setSearchTask: React.Dispatch<React.SetStateAction<string>>;
};

function SearchTask({ setSearchTask }: SearchTaskProps) {
  return (
    <input
      placeholder="Search task..."
      onChange={(e) => setSearchTask(e.target.value)}
      className="font-josefin text-md h-15 w-[60%] rounded-md border border-stone-200 px-5 pl-15 text-stone-400 shadow-xl backdrop-blur-md md:text-stone-200"
    />
  );
}

export default SearchTask;
