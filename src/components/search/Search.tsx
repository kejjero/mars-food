import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { setSearchValue } from "../../redux/filter/filterSlice";
import { debounce } from "lodash";
import { AppDispatch } from "../../redux/store";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";

const Search: React.FC = () => {
  const { searchValue } = useSelector(selectFilter);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  type inputType = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 50),
    []
  );

  const onChangeInput = (evt: inputType): void => {
    updateSearchValue(evt.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };

  const handleSearchOpen = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <Stack>
        <Input
          type="text"
          inputRef={inputRef}
          value={searchValue}
          onChange={(evt) => onChangeInput(evt)}
          placeholder="Поиск вкусной еды..."
          sx={{ color: "#fff" }}
          color="error"
        />
    </Stack>
  );
};

export default Search;
