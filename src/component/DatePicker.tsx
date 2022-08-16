import { Calendar as NewCalendar } from '@internationalized/date';
import React, { useRef } from 'react';
import { I18nProvider, useDatePicker } from 'react-aria';
import { DatePickerStateOptions, useDatePickerState } from 'react-stately';
import Calendar from './calendar/Calendar';
import { DateField } from './datefield/DateField';
import { Box } from '@mui/system';
import TimeField from './timefield/TimeField';
import { Button, styled } from '@mui/material';
const DatePickerButton = styled(Button)({
  backgroundColor: '#386DBF',
  textTransform: 'none',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#386DBF',
  },
});
const DatePicker = (props: DatePickerStateOptions) => {
  const state = useDatePickerState(props);
  const ref = useRef<HTMLDivElement | null>(null);
  const { groupProps, labelProps, fieldProps, buttonProps, dialogProps, calendarProps } =
    useDatePicker(props, state, ref);
  return (
    <I18nProvider locale="ja">
      <Box sx={{}}>
        <Calendar {...calendarProps} />
        <Box
          {...groupProps}
          ref={ref}
          sx={{
            display: 'flex',
            marginLeft: '',
            marginTop: '5px',
          }}
        >
          <Box>
            <DateField locale={''} createCalendar={function (name: string): NewCalendar {
              throw new Error('Function not implemented.');
            } } {...fieldProps} />
          </Box>
          <Box ml={2.5}>
            <TimeField />
          </Box>
        </Box>

        <DatePickerButton variant="contained" fullWidth>保存</DatePickerButton>
      </Box>
    </I18nProvider>
  );
};

export default DatePicker;
