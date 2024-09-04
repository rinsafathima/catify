export default function Home() {
  return (
    <main className="py-20 px-10 p-16 m-auto max-w-6xl">

  <div className="border border-gray-200 p-2 rounded-md shadow-lg shadow-orange-300">
    <div className="flex items-end gap-1">
      <span className="text-6xl font-semibold dark:text-white">Me</span>
      <svg
        className="animate-spin"
        fill="#F97316"
        width="30px"
        height="30px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Football"
          d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z"
          transform="translate(-41 -25)"
        />
      </svg>
      <svg
        className="animate-bounce"
        fill="#F97316"
        width="30px"
        height="30px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Football"
          d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z"
          transform="translate(-41 -25)"
        />
      </svg>
      <span className="text-6xl font-semibold dark:text-white">wsters</span>
      <span className="text-5xl font-semibold text-orange-500"> 🐱!!</span>
    </div>
  </div>

      
      {/* <h1 className="">Hi Meowsters 🐱!</h1> */}
      <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-2xl py-6">The most  
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-600"> purrfect meowsters </span> 
      in the neighborhood.</h2>

      <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">

        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block font-mono">
              Welcome to Catify, your ultimate companion in the world of cats! Dive into a community of whisker enthusiasts, share your kitty’s cutest moments, 
              and explore a world designed with your furry friend in mind. Join Catify today and make every day a meow-velous adventure! 🐈😻🐈‍⬛
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
                alt="Cat"
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
                alt="Cat"
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

