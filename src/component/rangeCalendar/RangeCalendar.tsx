import React, { useRef } from 'react';
import { useLocale, useRangeCalendar } from 'react-aria';
import { useRangeCalendarState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import { Box, Typography } from '@mui/material';
import Button from '../button/Button';
import RangeCalendarGrid from './RangeCalendarGrid';
import MonthDropdown from './MonthDropdown';
import YearDropDown from './YearDropDown';
import { flexbox } from '@mui/system';

const RangeCalendar = (props: any) => {
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const ref = useRef<HTMLDivElement | null>(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useRangeCalendar(
    props,
    state,
    ref
  );

  return (
    <Box {...calendarProps} ref={ref}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box mr={2} sx={{}}>
          <YearDropDown state={state} ref={ref} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginRight:'10px',
            marginTop:''
          }}
        >
          <Box mr={1.25}>
            <Button {...prevButtonProps}>
              <i className="fa-solid fa-angle-down" style={{ transform: 'rotate(90deg)' }}></i>
            </Button>
          </Box>
          <MonthDropdown state={state} />
          <Box>
            <Button {...nextButtonProps}>
              <i className="fa-solid fa-angle-down" style={{ transform: 'rotate(-90deg)' }}></i>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <RangeCalendarGrid state={state} />
      </Box>
    </Box>
  );
};

export default RangeCalendar;
