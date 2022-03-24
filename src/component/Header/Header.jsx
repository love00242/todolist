import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDownWideShort, faEllipsis } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faBars} />
            <h2>Todo List</h2>
            <div>
                <FontAwesomeIcon icon={faArrowDownWideShort} />
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </div>
    )
}

export default Header;