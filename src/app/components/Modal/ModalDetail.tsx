import React from 'react'
import CloseIcon from '../../assets/icons/CloseIcon';
import ImgVideo from '../ImgVideo';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  classWidth?: string;
  layout?: string;
  data: any
}

const ModalDetail:React.FC<ModalProps> = ({ isOpen, onClose, classWidth='max-w-md', layout, data }) => {
    if (!isOpen) return null;
   console.log(data);
   
    return (
      <div className="fixed inset-0 bg-black/50 dark:bg-gray-900/50 z-50 flex justify-center items-center">
        <div
          className={`bg-gray-100 dark:bg-gray-600 p-6 rounded w-full shadow-2xl ${classWidth}`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex justify-end gap-1">
              <div
                onClick={onClose}
                className="cursor-pointer text-gray-800 dark:text-white"
              >
                <CloseIcon />
              </div>
            </div>
            <div className="w-full md:h-96 xs:h-52">
              <ImgVideo type={data?.type} image={data?.img} />
            </div>
          </div>
        </div>
      </div>
    );
}


export default ModalDetail