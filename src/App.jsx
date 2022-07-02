import { Table, TableCell, TableHead, TableRow } from '@mui/material';
import Container from '@mui/material/Container';

function App() {
	return (
		<Container maxWidth="xl" sx={{ height: "30rem" }} >
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell colSpan={3} rowSpan={2}>Date</TableCell>
						<TableCell colSpan={2} rowSpan={2}>Aircraft</TableCell>
						<TableCell rowSpan={3}>Pilot in Command</TableCell>
						<TableCell rowSpan={3}>Co-Pilot</TableCell>
						<TableCell rowSpan={3}>Remarks</TableCell>
						<TableCell colSpan={4}>Single Engine</TableCell>
						<TableCell colSpan={6}>Multi Engine</TableCell>
						<TableCell colSpan={4} rowSpan={2}>Instrument</TableCell>
						<TableCell colSpan={2} rowSpan={2}>Takeoff and Landings</TableCell>
						<TableCell colSpan={5}>Cross Country</TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={2}>Day</TableCell>
						<TableCell colSpan={2}>Night</TableCell>
						<TableCell colSpan={3}>Day</TableCell>
						<TableCell colSpan={3}>Night</TableCell>
						<TableCell colSpan={2}>Day</TableCell>
						<TableCell colSpan={2}>Night</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Year</TableCell>
						<TableCell>Month</TableCell>
						<TableCell>Day</TableCell>
						<TableCell>Type</TableCell>
						<TableCell>Reg</TableCell>
						<TableCell>Dual</TableCell>
						<TableCell>PIC</TableCell>
						<TableCell>Dual</TableCell>
						<TableCell>PIC</TableCell>
						<TableCell>Dual</TableCell>
						<TableCell>PIC</TableCell>
						<TableCell>SIC</TableCell>
						<TableCell>Dual</TableCell>
						<TableCell>PIC</TableCell>
						<TableCell>SIC</TableCell>
						<TableCell>Actual IMC</TableCell>
						<TableCell>Hood</TableCell>
						<TableCell>FTD</TableCell>
						<TableCell>Approaches</TableCell>
						<TableCell>Day</TableCell>
						<TableCell>Night</TableCell>
						<TableCell>SIC</TableCell>
						<TableCell>PIC</TableCell>
						<TableCell>SIC</TableCell>
						<TableCell>PIC</TableCell>
						<TableCell>Route</TableCell>
					</TableRow>
				</TableHead>
			</Table>
		</Container>
	);
}

export default App;
