import React from 'react'
import ReactDOM from 'react-dom'

export function Dropback(props){
    let handleClick=()=>{
        if(props.onClose){
            props.onClose() 
        }
    }
    return(
        <div onClick={handleClick} className='loader-overlay'></div>
    )
}
export default function Loader() {
  return (
       ReactDOM.createPortal(
        <>
        <Dropback/>
       <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
    </>,
    document.getElementById("loader-root")

    )
    
  )
}
