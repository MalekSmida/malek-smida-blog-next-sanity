function index() {
  return (
    <>
      <div className="flex w-full items-center justify-between px-6 pt-5 pb-10 md:px-20">
        <div className="space-y-5 text-gray-700">
          <h1 className="text-5xl font-bold">Wanderer</h1>
          <h1 className="text-xl md:w-3/4">
            How sad if we pass through life and never see it with the eyes of a
            child -Anthony De Mello
          </h1>
        </div>
        <img
          src="/moment-to-relax.svg"
          alt="relax Logo"
          className="ml-2 hidden h-52 md:inline-flex"
        />
      </div>
      <hr className="mx-auto w-full border border-gray-200" />
    </>
  );
}

export default index;
