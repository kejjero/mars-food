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
    <Stack
      direction="row"
      spacing={2}
      flex="row"
      alignItems="center"
      borderRadius="10px"
      height="30px"
    >
      <button
        style={{
          backgroundColor: "inherit",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Badge badgeContent={0} style={{ color: "#fff" }} color="error">
          <SearchIcon style={{ color: "#fff"}} color={"error"} />
        </Badge>
        <span className="header__text-badge">Поиск</span>
      </button>
      {isOpenSearch && (
        <Input
          type="text"
          inputRef={inputRef}
          value={searchValue}
          onChange={(evt) => onChangeInput(evt)}
          placeholder="Поиск вкусной еды..."
          sx={{ color: "#fff" }}
          color="error"
        />
      )}
      {searchValue.length >= 1 && (
        <CloseIcon
          sx={{ color: "fff" }}
          cursor="pointer"
          onClick={() => onClickClear()}
        />
      )}
    </Stack>
  );
};

export default Search;
