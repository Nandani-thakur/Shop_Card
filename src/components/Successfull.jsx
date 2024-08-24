import check from '../assets/check.gif'
import { Link } from "react-router-dom"
function Successfull() {
  return (
    <div className="container flex justify-center  my-48 flex-col items-center  ">
    <h1>success</h1>
    <img src={check} alt='img' className='w-[50px] h-auto '/>
    <Link to='/'><h5>Back to home</h5></Link>

    
    </div>
  )
}

export default Successfull