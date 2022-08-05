import {useEffect, useRef, useState} from "react";
import {setSort} from "../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

const sortList = [
    {name: 'cначала популярные', sortProperty: 'rating', sortType: 'desc'},
    {name: 'сначала дорогие', sortProperty: 'price', sortType: 'desc'},
    {name: 'сначала недорогие', sortProperty: 'price', sortType: 'asc'},
    {name: 'по наименованию', sortProperty: 'title', sortType: 'asc'},
]

function Sort() {
    const sort = useSelector((state) => state.filterReducer.sort)
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const sortName = sortList[sort.sortId].name
    const sortRef = useRef();

    useEffect(() => {
        const handleClickOutside = (evt) => {
            if (!evt.path.includes(sortRef.current)) {
                setIsOpen(false)
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return () => document.body.removeEventListener('click', handleClickOutside)
    }, [])

    function handleSelectSort(index, obj) {
        setIsOpen(!isOpen)
        const objSort = {sortId: index, property: obj.sortProperty, type: obj.sortType}
        dispatch(setSort(objSort))
    }

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    className={`"sort__arrow" ${isOpen && "sort__arrow_open"}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="fff"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#DBDBDB"
                    />
                </svg>
                {
                    window.screen.width > 520 &&
                    <b>Сортировка:</b>
                }
                <span onClick={() => setIsOpen(!isOpen)}>{sortName}</span>
            </div>
            {
                isOpen &&
                <div className="sort__popup">
                    <ul>
                        {
                            sortList.map((obj, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelectSort(index, obj)}
                                    className={sort.sortId === index ? "active" : ""}
                                >
                                    {obj.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort;