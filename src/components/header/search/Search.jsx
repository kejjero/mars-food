import {selectFilter, setSearchValue} from "../../../redux/slices/filterSlice";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {createTheme, Input, Stack, ThemeProvider} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function Search() {
    const {searchValue} = useSelector(selectFilter)
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [openSearch, setOpenSearch] = useState(false);

    function onClickClear() {
        dispatch(setSearchValue(''))
        inputRef.current.focus();
    }

    const theme = createTheme({
        palette: {
            neutral: {
                main: '#EF4137',
            },
        },
    });

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
                <ThemeProvider theme={theme}>
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
                        onChange={(evt) => dispatch(setSearchValue(evt.target.value))}
                        placeholder={'Поиск вкусной еды...'}
                        color="neutral"
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
                </ThemeProvider>
            </Stack>
        )
    }

    const MobileSearch = () => {
        return (
            <Stack
                direction="row"
                spacing={2}
                flex={'row'}
                alignItems={'center'}
                borderRadius={"10px"}
                height={"30px"}
            >
                <ThemeProvider theme={theme}>
                    <SearchIcon
                        sx={{
                            color: '#fff',
                            padding: '3px',
                            borderRadius: '30%',
                            fontSize: '30px',
                            cursor: 'pointer',
                        }}
                    />
                    {
                        openSearch &&
                        <Input
                            inputRef={inputRef}
                            value={searchValue}
                            onChange={(evt) => dispatch(setSearchValue(evt.target.value))}
                            placeholder={'Поиск вкусной еды...'}
                            color="neutral"
                            sx={{color: '#fff'}}
                        />
                    }
                    {
                        searchValue.length >= 1 &&
                        <CloseIcon
                            sx={{color: 'fff'}}
                            cursor={'pointer'}
                            onClick={() => onClickClear()}
                        />
                    }
                </ThemeProvider>
            </Stack>
        )
    }

    return (
        <div className="header__search">
            {
                window.screen.width > 950 ? <DesktopSearch/> : <MobileSearch/>
            }

        </div>
    )
}

export default Search;