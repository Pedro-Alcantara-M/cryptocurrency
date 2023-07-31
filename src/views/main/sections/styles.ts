import { styled } from "@mui/material/styles";
import { tableCellClasses, TableCell, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    border: "none",
    color: theme.palette.secondary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    border: "none",
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  width: "100%",
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
