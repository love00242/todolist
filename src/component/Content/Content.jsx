import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import List from "../List";
import './index.scss';

const Content = ({showPopup}) => {
    const openPopup = () => {
        showPopup(true);
        console.log("props");
    };
    return (
        <div className="content">
            <div className="content-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="搜尋" />
            </div>
            <div className="content-task">
                <ul>
                    <List />
                    <List />
                    <List />
                </ul>
            </div>
            <div className="content-task">
                <small>已完成</small>
                <ul><List /><List /><List /><List /></ul>
            </div>
            <button className="content-add" onClick={openPopup}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}

export default Content;