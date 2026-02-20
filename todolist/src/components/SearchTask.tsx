type SearchTaskProps = {
  setSearchTask: React.Dispatch<React.SetStateAction<string>>;
};

function SearchTask({ setSearchTask }: SearchTaskProps) {
  return (
    <div className="flex justify-center">
      <input
        placeholder="Search task..."
        onChange={(e) => setSearchTask(e.target.value)}
        className="font-josefin w-20rounded-md text-md fixed top-3 right-3 z-10 h-10 border border-stone-200 px-5 pl-15 text-stone-200 shadow-xl backdrop-blur-md"
      />
    </div>
  );
}

export default SearchTask;
