const AppFooter = (): JSX.Element => {
  return(
    <div className="sticky inset-x-0 bottom-0 bg-white">
      <footer className="bg-white rounded-lg shadow mx-4 mb-2 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023&nbsp;
              <a href="localhost:3000/" className="hover:underline">Home™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                  <a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="/licensing" className="mr-4 hover:underline md:mr-6">Licensing</a>
              </li>
              <li>
                  <a href="/contact" className="hover:underline">Contact</a>
              </li>
          </ul>
          </div>
      </footer>
    </div>
  );
};

export default AppFooter;