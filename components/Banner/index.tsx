// node modules
import Image from 'next/image';

/**
 * Banner shown in home screen
 *
 * @type {React.FC}
 */
function Banner() {
  return (
    <>
      <div
        className="flex w-full items-center justify-between px-6 pt-5 pb-10 md:px-20"
        data-testid="banner-container"
      >
        <div className="space-y-5 text-gray-700">
          <h1 className="text-5xl font-bold">Wanderer</h1>
          <h1 className="text-xl md:w-3/4">
            How sad if we pass through life and never see it with the eyes of a
            child -Anthony De Mello
          </h1>
        </div>
        <div className="ml-2 hidden md:inline-flex">
          <Image
            src="/moment-to-relax.svg"
            alt="relax Logo"
            width={275}
            height={208} // alternative to h-52 in tailwindcss
          />
        </div>
      </div>
      <hr className="mx-auto w-full border border-gray-200" />
    </>
  );
}

export default Banner;
