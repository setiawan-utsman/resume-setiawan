import React from 'react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  classWidth?: string;
  layout?: string;
  data: any
}

const ModalDetail:React.FC<ModalProps> = ({ isOpen, onClose, classWidth='max-w-md', layout, data }) => {
    if (!isOpen) return null;

    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className={`bg-white p-6 rounded shadow-md w-full ${classWidth}`}>
          <div>sdsd</div>
        </div>
      </div>
    );
}


export default ModalDetail