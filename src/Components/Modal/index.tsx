


import './index.css'

interface ModalProps{
    onClose: () => void    
    children:React.ReactNode

}
 const Modal: React.FC<ModalProps>=({onClose,children})=>{
        return (
            <>
                <div className="modal-background" onClick={onClose}></div>
                <div className="modal-content">
                        {children}
                        <a onClick={onClose}> Close</a>
                </div>
            </>
        )
 }
export default Modal