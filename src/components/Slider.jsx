import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 


function Slider() {
  return (
    <div>
      <AwesomeSlider className='h-[500px] p-3 ' >
    <div className=' bg-zinc-100  rounded-3xl'><img src='https://images.unsplash.com/photo-1552872673-9b7b99711ebb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img1'  /></div>
    <div><img src='https://images.unsplash.com/photo-1606481021733-5e269f7d87f6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img2'/></div>
    <div><img src='https://images.unsplash.com/photo-1628521495179-ca4448a584d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img3'/></div>
    <div><img src='https://images.unsplash.com/photo-1631896928983-2c94ea6f97e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img4'/></div>

  </AwesomeSlider>
    </div>
  )
}

export default Slider
