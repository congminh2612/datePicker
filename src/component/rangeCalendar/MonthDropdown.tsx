import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  styled,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDateFormatter } from 'react-aria';
import { RangeCalendarState } from 'react-stately';
import Button from '../button/Button';
interface Props {
  state: RangeCalendarState;
}

const ButtonCustom = styled(Button)({
  '&:hover': {
    backgroundColor: '#fff',
  },
  '&:focus': {
    backgroundColor: 'none',
  },

  color: '#111',
  backgroundColor: '#fff',
  padding: 0,
  minWidth: '20px',
});
const MonthDropdown: React.FC<Props> = ({ state }) => {
  const months = [];
  const formatter = useDateFormatter({
    month: 'long',
    timeZone: state.timeZone,
  });
 

  const numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 0; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  return (
    <Box
      display="flex"
      mr={1.75}
      sx={{
        alignItems: 'center',
      }}
    >
      <Typography
        align="center"
        sx={{
          width: '31px',
          fontSize: '14px',
          fontWeight: '700',
          marginLeft: '4px',
        }}
      >
        {`${state.focusedDate.month}月`}
      </Typography>
    </Box>
  );
};

export default MonthDropdown;
