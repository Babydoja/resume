import React,{useState} from 'react'
// import arrow from '../assets/Arrow 2.png'
// import{BiRightArrowAlt} from 'react-icons/bi'
// import './Frequestques.css'
import './Frequentques.css'
const Frequestques = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className='freuwntss'>
         <div className='frequent1'>
            <h1 className='freqq'>Frequently Asked</h1>
        </div>
        <div >
         {items.map((item, index,icon) => (
        <div key={index}>
          <div className='itemss' onClick={() => handleItemClick(index)}>
            <p className='hr1'>{item.line}</p>
            <span>{item.icon}</span>
            <span>{item.title}</span>
           
          </div>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
         

    </div>
  )
}

export default Frequestques