import  { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './custom-slider.css'; // Import your custom CSS file


function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => { 
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Change 4 to the number of slides you have
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <AwesomeSlider
        className='h-[570px] rounded-3xl container'
        selected={currentIndex}
      >
        <div className='flex justify-center'>
          <img 
            src="https://i.pinimg.com/564x/3a/85/8a/3a858a5ac043f57d24cfbf6dc2e79c6f.jpg" 
            alt="img1" 
            className="w-[350px] h-[480px] relative left-12 rounded-3xl"
          />
          <img 
            src='https://i.pinimg.com/564x/7c/15/47/7c1547667de2a364f3e1ce0f7dd8c08e.jpg' 
            alt='img2' 
            className="w-[350px] h-[480px] rounded-3xl"
          />
          <img 
            src="https://i.pinimg.com/564x/b8/a0/23/b8a02367c0a08bcade09f4d6bb9f46e2.jpg" 
            alt='img3' 
            className="w-[350px] h-[480px] relative right-12 rounded-3xl"
          />
        </div>
        <div className='flex justify-center'>
          <img 
            src="https://i.pinimg.com/564x/5d/f2/c7/5df2c7601bbebd06c5feeb6c7da1ad75.jpg" 
            alt="img1" 
            className="w-[350px] h-[480px] relative left-12 rounded-3xl"
          />
          <img 
            src='https://i.pinimg.com/564x/64/96/d1/6496d180eca3ab8b59da6deeb53c1398.jpg' 
            alt='img2' 
            className="w-[350px] h-[480px] rounded-3xl"
          />
          <img 
            src="https://i.pinimg.com/736x/d7/3a/73/d73a73eb42dbe6863fb801378cc2825b.jpg" 
            alt='img3' 
            className="w-[350px] h-[480px] relative right-12 rounded-3xl"
          />
        </div>
        <div className='flex justify-center'>
          <img 
            src="https://i.pinimg.com/736x/f5/bf/4c/f5bf4cdc0207c4c603e6fde0c1d4f08c.jpg" 
            alt="img1" 
            className="w-[350px] h-[480px] relative left-12 rounded-3xl"
          />
          <img 
            src='https://i.pinimg.com/564x/50/d5/25/50d52583c5df3563a9c7bbd7eaf56981.jpg' 
            alt='img2' 
            className="w-[350px] h-[480px] rounded-3xl"
          />
          <img 
            src="https://i.pinimg.com/564x/16/cf/54/16cf5478400def5c5786fcaac714046a.jpg" 
            alt='img3' 
            className="w-[350px] h-[480px] relative right-12 rounded-3xl"
          />
        </div>
        <div className='flex justify-center'>
          <img 
            src="https://i.pinimg.com/564x/0b/60/c7/0b60c77f9a289a708ab92f58a71de9f0.jpg" 
            alt="img1" 
            className="w-[350px] h-[480px] relative left-12 rounded-3xl"
          />
          <img 
            src='https://i.pinimg.com/564x/fe/56/0d/fe560d57eb0975590ac232e6406e6d71.jpg' 
            alt='img2' 
            className="w-[350px] h-[480px] rounded-3xl"
          />
          <img 
            src="https://i.pinimg.com/736x/c2/2f/de/c22fdec8f780c0bbd99fbfc994ec80b7.jpg" 
            alt='img3' 
            className="w-[350px] h-[480px] relative right-12 rounded-3xl"
          />
        </div>
      </AwesomeSlider>
    </div>
  );
}

export default Herosection;
