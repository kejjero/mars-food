import {selectFilter, setSearchValue} from "../redux/slices/filterSlice";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {Input} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import debounce from 'lodash.debounce';
import styles from '../../../scss/modules/header.module.scss'


function Search() {
    const {searchValue} = useSelector(selectFilter)
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    // function onClickClear() {
    //     dispatch(setSearchValue(''))
    //     inputRef.current?.focus();
    // }

    return (
        <div className={styles.wrapper}>
            <SearchIcon style={{marginRight: '5px', fontSize: '22px', color: '#EF4137'}}/>
            <Input
                sx={{
                    color: '#fff',
                    fontSize: '14px',
                    width: '240px',
                    height: '40px',
                }}
                placeholder="Поиск вкусной еды..."
                type="text"
                color={"error"}
                value={searchValue}
                onChange={(evt) => dispatch(setSearchValue(evt.target.value))}
            />
            {
                searchValue.length >= 1 &&
                <CloseIcon style={{cursor: 'pointer', fontSize: '22px'}} onClick={() => onClickClear()}/>
            }
        </div>
    )
}

export default Search;