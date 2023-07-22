import { styled } from '@mui/material/styles';
import  { tableCellClasses, TableCell, TableRow} from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      border: 'none'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
'&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
},
// hide last border
'&:last-child td, &:last-child th': {
    border: 0,
},
}));