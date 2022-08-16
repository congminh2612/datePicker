import { CalendarAria, useCalendar, useDateFormatter, useLocale } from 'react-aria';
import { CalendarStateOptions, useCalendarState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import Button from '../button/Button';
import CalendarGrid from './CalendarGrid';
import { useRef } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CalendarProps, DateValue } from '@react-types/calendar';

function Calendar(props: any) {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state);
  console.log(props);
  console.log(state);
  

  return (
    <Box {...calendarProps} ref={ref}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Button {...prevButtonProps}>
            <i className="fa-solid fa-angle-down" style={{ transform: 'rotate(90deg)' }}></i>
          </Button>
        </Box>
        <Typography
          align="center"
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '32px',
            width: '95px',
          }}
        >
          {title.split('年').join(' ')}
        </Typography>

        <Box>
          <Button {...nextButtonProps}>
            <i className="fa-solid fa-angle-down" style={{ transform: 'rotate(-90deg)' }}></i>
          </Button>
        </Box>
      </Box>
      <Box sx={{}}>
        <CalendarGrid state={state} />
      </Box>
    </Box>
  );
}
export default Calendar;
