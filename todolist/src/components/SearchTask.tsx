type SearchTaskProps = {
  setSearchTask: React.Dispatch<React.SetStateAction<string>>;
};

function SearchTask({ setSearchTask }: SearchTaskProps) {
  return (
    <div className="flex justify-center">
      <input
        placeholder="Search task..."
        onChange={(e) => setSearchTask(e.target.value)}
        className="font-josefin fixed bottom-10 z-10 h-15 w-[40%] rounded-md border border-stone-200 px-5 pl-15 text-xl text-stone-600 shadow-xl"
      />
    </div>
  );
}

export default SearchTask;
