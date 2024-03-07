import Banner1 from "../assets/images/Banner1.jpg";
import SearchIcon from "@mui/icons-material/Search";

const Banner = () => {
  return (
    <div>
      <div className="w-full h-[450px]">
        <img src={Banner1} alt="" className="w-full h-[450px] absolute" />
        <div className="relative p-24">
          <h3 className="text-2xl font-bold text-slate-700">
            Find your next career with our
          </h3>
          <h1 className="text-4xl font-bold text-cyan-950 font-serif">
            Job Fair
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            industry. <br /> Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, <br /> when an unknown printer took a
            galley of type
          </p>

          <form className="max-w-md w-96 mt-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon></SearchIcon>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search your dream job...."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
