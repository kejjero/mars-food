import React, {useEffect, useRef, useState} from "react";
import {setSort} from "../redux/filter/filterSlice";
import {useDispatch, useSelector} from "react-redux";

type sortItemType = {
    name: string;
    sortProperty: 'rating' | 'price' | 'title';
    sortType: 'desc' | 'asc';
}

type popupClickType = MouseEvent & {
    path: Node[];
};

const sortList: sortItemType[] = [
    {name: 'cначала популярные', sortProperty: 'rating', sortType: 'desc'},
    {name: 'сначала дорогие', sortProperty: 'price', sortType: 'desc'},
    {name: 'сначала недорогие', sortProperty: 'price', sortType: 'asc'},
    {name: 'по наименованию', sortProperty: 'title', sortType: 'asc'},
]

const Sort: React.FC = () => {
    const sort = useSelector((state: any) => state.filterReducer.sort)
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const sortName = sortList[sort.sortId].name
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (evt: MouseEvent): void => {
            const _event = evt as popupClickType
            if (sortRef.current && !_event.path.includes(sortRef.current)) {
                setIsOpen(false)
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return () => document.body.removeEventListener('click', handleClickOutside)
    }, [])

    function handleSelectSort(index: number, sortItem: sortItemType) {
        setIsOpen(!isOpen)
        const objSort = {sortId: index, property: sortItem.sortProperty, type: sortItem.sortType}
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
                            sortList.map((sortItem: sortItemType, index: number) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelectSort(index, sortItem)}
                                    className={sort.sortId === index ? "active" : ""}
                                >
                                    {sortItem.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default React.memo(Sort);