import React from 'react'
import './Modal.css'

const Modal = ({score}) => {
  return (
    <div className='container-modal'>
        <div className='modal-txt'> SKOR : {score} </div>
        <div onClick={ () => window.location = "/" } className='modal-btn'>Yeniden Başla</div>
    </div>
  )
}

export default Modal
