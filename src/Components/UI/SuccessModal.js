import React from 'react'
import Modal from './Modal'

export default function SuccessModal({onClose}) {
  return (
    <div>
      <Modal onClose={onClose}>
        Order Successful!
      </Modal>
    </div>
  )
}
