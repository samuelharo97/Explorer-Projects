export const Header = () => (
  <header
    id="header"
    className=" h-28 flex items-center justify-between p-5 bg-gray-900 text-white border-b border-gray-600"
  >
    <div className="flex items-center">
      <h1 className="text-rose-400 ml-4 text-2xl font-semibold">
        rocketm0vies
      </h1>
    </div>
    <div className="flex items-center w-6/12">
      <input
        type="text"
        placeholder="Pesquisar por título"
        className="rounded w-full h-14 p-6 mr-4 focus:divide-rose-400"
      />
    </div>
    <div className="rounded-full p-2 bottom-0 right-0 mt-2 mr-4 flex">
      <div className="flex-col mr-4">
        <p className="text-sm font-medium mb-3">Samuel Haro</p>
        <div className="text-right">
          <a href="#" className="block text-xs font-medium text-rose-400">
            Logout
          </a>
        </div>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/103484037?v=4"
        alt="user-avatar"
        className="h-16 w-16 rounded-full"
      />
    </div>
  </header>
);