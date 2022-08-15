import React, {useCallback, useRef} from "react";
import {Input, Stack} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {useDispatch, useSelector} from "react-redux";
import {selectFilter} from "../../redux/filter/selectors";
import {setSearchValue} from "../../redux/filter/filterSlice";
import {debounce} from "lodash";
import {AppDispatch} from "../../redux/store";

const Search: React.FC = () => {
    const {searchValue} = useSelector(selectFilter)
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();
    type inputType = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
        }, 50),
        [],
    );

    const onChangeInput = (evt: inputType): void => {
        updateSearchValue(evt.target.value)
    };

    const onClickClear = () => {
        dispatch(setSearchValue(''))
        inputRef.current?.focus();
    }

    return (
        <Stack
            direction="row"
            spacing={2}
            flex="row"
            alignItems="center"
            borderRadius="10px"
            height="30px"
            width="230px"
        >
            <SearchIcon/>
            <Input
                type="text"
                inputRef={inputRef}
                value={searchValue}
                onChange={(evt) => onChangeInput(evt)}
                placeholder="Поиск вкусной еды..."
                // color="neutral"
                sx={{color: '#fff'}}
                color="error"
            />
            {
                searchValue.length >= 1 &&
                <CloseIcon
                    sx={{color: "fff"}}
                    cursor="pointer"
                    onClick={() => onClickClear()}
                />
            }
        </Stack>
    )
}

export default Search;