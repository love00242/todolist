import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDownWideShort, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <FontAwesomeIcon icon={faBars} /><h2>Todo List</h2>
            </div>
            <div className="header-right">
                <FontAwesomeIcon icon={faArrowDownWideShort} />
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </div>
    )
}

export default Header;