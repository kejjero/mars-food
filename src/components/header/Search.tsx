import {selectFilter, setSearchValue} from "../../redux/filter/filterSlice";
import React, {useCallback, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {Input, Stack, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Search: React.FC = () => {
    const {searchValue} = useSelector(selectFilter)
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function onClickClear() {
        dispatch(setSearchValue(''))
        inputRef.current?.focus();
    }

    // const updateSearchValue = useCallback(
    //     debounce((str) => {
    //         dispatch(setSearchValue(str));
    //     }, 150),
    //     [],
    // );

    const onChangeInput = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(setSearchValue( evt.target.value));
    };


    // const theme = createTheme({
    //     palette: {
    //         neutral: {
    //             main: '#EF4137',
    //         },
    //     },
    // });

    const DesktopSearch = () => {
        return (
            <Stack
                direction="row"
                spacing={2}
                flex={'row'}
                alignItems={'center'}
                borderRadius={"10px"}
                height={"30px"}
            >
                <SearchIcon
                    sx={{
                        color: '#fff',
                        // backgroundColor: '#EF4137',
                        padding: '3px',
                        borderRadius: '30%',
                        fontSize: '30px',
                    }}
                />
                <Input
                    inputRef={inputRef}
                    value={searchValue}
                    onChange={(evt) => onChangeInput(evt)}
                    placeholder={'Поиск вкусной еды...'}
                    // color="neutral"
                    sx={{color: '#fff'}}
                />
                {
                    searchValue.length >= 1 &&
                    <CloseIcon
                        sx={{color: 'fff'}}
                        cursor={'pointer'}
                        onClick={() => onClickClear()}
                    />
                }
            </Stack>
        )
    }

    return (
        <div className="header__search">
            {
                window.screen.width > 950 ? <DesktopSearch/> : ''//<MobileSearch/>
            }

        </div>
    )
}

export default Search;