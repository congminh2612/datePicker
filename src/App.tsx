import DatePicker from './component/DatePicker';
import { Box } from '@mui/material';
import DateRangePicker from './component/DateRangePicker';
import { today, getLocalTimeZone } from '@internationalized/date';

function App() {
  return (
    <Box display="flex">
      <Box
        sx={{ width: '331px', maxHeight: '600px', boxShadow: 3, marginLeft: '50px', padding: '30px' }}
      >
        <DatePicker defaultValue={today(getLocalTimeZone())} />
      </Box>
      <Box
        ml={10}
        sx={{
          width: '331px',
          maxHeight: '600px',
          boxShadow: 3,
          marginLeft: '50px',
          padding: '30px',
        }}
      >
        <DateRangePicker />
      </Box>
    </Box>
  );
}

export default App;
