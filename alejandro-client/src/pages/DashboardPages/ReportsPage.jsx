import { Typography, Stack } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const ReportsPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <BarChart
          series={[
            { data: [15, 44, 24, 34], label: 'Series 1' },
            { data: [51, 6, 49, 30], label: 'Series 2' },
          ]}
          height={300}
          xAxis={[
            { data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' },
          ]}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'A' },
                { id: 1, value: 15, label: 'B' },
                { id: 2, value: 20, label: 'C' },
              ],
            },
          ]}
          width={300}
          height={300}
        />
      </Stack>
    </>
  );
};

export default ReportsPage;