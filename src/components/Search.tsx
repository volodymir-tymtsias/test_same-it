import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchWith } from "../helpers/searchHelper";
import * as historyAction from '../features/history';
import { useAppDispatch } from "../app/hooks";

type Props = {
  textButton: string;
  nameValue: string;
  label: string;
  placeholder: string;
};

export const Search: React.FC<Props> = ({ 
  textButton, 
  nameValue,
  label,
  placeholder,
}) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedQuery = searchParams.get(nameValue) || '';
  const [query, setQuery] = useState(appliedQuery);
  const [isErrorFormat, setIsErrorFormat] = useState(false);

  useEffect(() => {
    if (appliedQuery) {
      setQuery(appliedQuery);
    }
  }, [appliedQuery]);

  const InputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (isErrorFormat) {
      setIsErrorFormat(false);
    }
    setQuery(event.target.value);
  }

  const setQuerySearchParams = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setQuery(query.trim());
    const noError = (nameValue === 'trackingNumber')
      ? /^(\d){14}$/.test(query.trim())
      : true;

    setSearchParams(
      getSearchWith(searchParams, { 
        [nameValue]: null, 
      }),
    );

    if (noError) {
      const newParamsToAdd = (nameValue === 'city')
        ? { 
            city: query.trim() || null, 
            page: 1,
            pageSize: 5,
          }
        : { [nameValue]: query.trim() };

      setSearchParams(getSearchWith(searchParams, newParamsToAdd));

      if (nameValue === 'trackingNumber') {
        dispatch(historyAction.addTrackings(query.trim()));
      }
      
    } else {
      setIsErrorFormat(true);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
        mb: 2,
      }}
      noValidate
      autoComplete="off"
      onSubmit={setQuerySearchParams}
    >
      <TextField
        label={label}
        placeholder={placeholder}
        color="secondary"
        size="small"
        type="search"
        sx={{
          width: { xs: '100%', sm: '30%', lg: '20%' },
        }}
        error={isErrorFormat}
        helperText={(isErrorFormat && nameValue === 'trackingNumber')
          ? 'Введений ТТН некоректний. ТТН повинен містити тільки цифри та мати довжину 14 символів'
          : ''
        }
        value={query}
        onChange={InputHandler}
      />
      <Button 
        variant="contained" 
        color="secondary"
        type="submit"
        sx={{ textTransform: 'none' }}
      >
        {textButton}
      </Button>
    </Box>
  );
}