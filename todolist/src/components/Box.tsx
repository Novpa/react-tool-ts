function Box() {
  return (
    <div className="absolute top-5 flex w-full justify-center md:top-1 lg:top-25">
      <div className="w-[80%] md:w-[40%]">
        <div>
          <h1 className="font-josefin text-4xl font-semibold tracking-widest text-stone-700">
            TODO
          </h1>
        </div>
        <div className="relative mt-2 mb-3 rounded-md bg-white md:mt-10">
          <input
            className="font-josefin h-15 w-full rounded-md border border-stone-200 px-5 text-2xl text-stone-600"
            type="text"
          />
          <div className="absolute top-[40%] left-5 h-3.5 w-3.5 rounded-sm border border-stone-400"></div>
        </div>

        <div className="font-josefin rounded-md border border-stone-200 bg-white py-2 text-stone-600 shadow-xl">
          <div className="flex h-15 items-center gap-5 border-b border-stone-300 bg-white px-5 text-lg">
            <input className="rounded-full" type="checkbox" />
            <p>Content</p>
          </div>
          <div className="flex h-15 items-center gap-5 border-b border-stone-300 bg-white px-5 text-lg">
            <input type="checkbox" />
            <p>Content</p>
          </div>
          <div className="flex h-15 items-center gap-5 border-b border-stone-300 bg-white px-5 text-lg">
            <input type="checkbox" />
            <p>Content</p>
          </div>

          {/* summary */}
          <div className="font-josefin flex h-10 items-center justify-between px-5 text-sm font-light">
            <p>5 items left</p>

            <div className="flex gap-4">
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>

            <p>Clear completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
