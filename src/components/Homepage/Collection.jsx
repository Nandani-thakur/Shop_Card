import { Link } from 'react-router-dom';
import '../Homepage/Collection'
function Collection() {
    return (
      <>
        <div className="container flex-col relative">
          <div className="flex">
            <img src="https://i.pinimg.com/564x/3a/85/8a/3a858a5ac043f57d24cfbf6dc2e79c6f.jpg" alt="img1" className="image w-[33%] h-[700px] rounded-l-2xl" />
            <img src="https://i.pinimg.com/564x/a4/ae/39/a4ae39e3c89f144d41fb5aca38dc98dc.jpg" alt="img2" className="image w-[33%] h-[700px]" />
            <img src="https://i.pinimg.com/564x/2b/7c/04/2b7c04a714f466ff15f314049827a6ec.jpg" alt="IMG3" className="image w-[33%] h-[700px] rounded-r-2xl" />
          </div>
          <div className="overlay flex flex-col items-center justify-center absolute inset-0">
            <h1 className="text-9xl font-extrabold text-center text-black opacity-10">Collection</h1>
         <button className="mt-4 px-6 py-2 bg-zinc-700 text-white rounded-full">  <Link to="/card" className='text-white' >Explore now </Link> </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Collection;