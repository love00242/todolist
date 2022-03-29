import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faXmark } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Popup = ({title, closePopup}) => {
    const addTask = () => {};
    const close = () => {
        closePopup();
    }
    return (
        <div className="popup">
            <div className="popup-mask" onClick={close}></div>
            <div className="popup-content" >
                <div className="popup-content-title">
                    <h2>{title}</h2><FontAwesomeIcon icon={faXmark} onClick={close} />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="輸入內容..."></textarea>
                <div className="popup-content-bottom">
                    <FontAwesomeIcon icon={faTag} />
                    <button onClick={addTask}>新增</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;