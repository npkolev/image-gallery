import React from "react";

function ImageModal({closeModal, src}) {
    if (!src) return null;
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <a href="#" className='modal-close' onClick={closeModal} >&times;</a>
        <div open={!!src} className="modal">
          <div className='modal-body'>
            <img src={src} alt="Panorama"/>
          </div>
        </div>
      </div>
    )
  }

export default ImageModal;