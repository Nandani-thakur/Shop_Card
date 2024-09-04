
import { Link } from 'react-router-dom';

function Collection() {
  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row">
        <img
          src="https://i.pinimg.com/564x/3a/85/8a/3a858a5ac043f57d24cfbf6dc2e79c6f.jpg"
          alt="img1"
          className="w-full sm:w-1/3 h-auto object-cover rounded-t-2xl sm:rounded-l-2xl"
        />
        <img
          src="https://i.pinimg.com/564x/a4/ae/39/a4ae39e3c89f144d41fb5aca38dc98dc.jpg"
          alt="img2"
          className="w-full sm:w-1/3 h-auto object-cover"
        />
        <img
          src="https://i.pinimg.com/564x/2b/7c/04/2b7c04a714f466ff15f314049827a6ec.jpg"
          alt="IMG3"
          className="w-full sm:w-1/3 h-auto object-cover rounded-b-2xl sm:rounded-r-2xl"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-9xl font-extrabold text-center opacity-90">Collection</h1>
        <button className="mt-4  px-4 py-2 bg-zinc-700 text-white rounded-full  hover:text-zinc-700 transition-colors duration-300">
          <Link to="/card" className="text-white">Explore Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Collection;
