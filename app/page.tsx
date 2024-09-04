export default function Home() {
  return (
    <main className="py-20 px-10 p-16 m-auto max-w-6xl">
      
      <h1 className="">Hi Meowsters 🐱!</h1>
      <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl py-4">The most  
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-600"> purrfect meowsters </span> 
      in the neighborhood</h2>

      <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">

        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block font-mono">
              Welcome to Catify, your ultimate companion in the world of cats! Dive into a community of whisker enthusiasts, share your kitty’s cutest moments, and explore a world designed with your furry friend in mind. Join Catify today and make every day a meow-velous adventure! 🐾✨
              </p>
            </div>
            <a
              href="#"
              className="font-mono inline-block rounded-lg border bg-white dark:bg-gray-950 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.pexels.com/photos/954720/pexels-photo-954720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Clawsy</span>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://images.pexels.com/photos/8523559/pexels-photo-8523559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">PurrPal</span>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://images.pexels.com/photos/5270658/pexels-photo-5270658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">PurrSuit</span>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.pexels.com/photos/11132156/pexels-photo-11132156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">MeowMingle</span>
            </a>
            {/* image - end */}

                        {/* image - start */}
                        <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">WhiskerWish</span>
            </a>
            {/* image - end */}

            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://images.pexels.com/photos/9709427/pexels-photo-9709427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">FelineFriends</span>
            </a>
            {/* image - end */}
          </div>
        </div>
      </div>
    </main>
  );
}

