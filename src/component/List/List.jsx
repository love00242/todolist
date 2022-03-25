import './index.scss';

const List = () => {
    return (
        <li className="list">
            <input type="checkbox" />
            <p>{ "按住右下角+ 可以新增任務" }</p>
        </li>
    )
}

export default List;