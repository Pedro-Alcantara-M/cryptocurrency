import { useEffect, useState } from "react";
import { getCoins } from "@services/coins.service";
import { ICoinResp, ICoin } from "@src/services/interface";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";

const TopCryptoSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [coins, setCoins] = useState<ICoinResp | null>(null);
  console.log({ coins });
  const firstRender = async () => {
    setIsLoading(true);
    const response = await getCoins();
    if (response) {
      setCoins(response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    firstRender();
  }, []);

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography variant="h3" sx={{ alignSelf: "center", pt: "7.5em", fontWeight: "bold" }}>
        {" "}
        Top Cryptos
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ maxWidth: 1248, p: "2em" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Change</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins &&
              coins.data &&
              coins.data.length > 0 &&
              coins?.data?.map((row: ICoin, index: number) => (
                <StyledTableRow key={`${row.name}${index}`}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                  {`${row.id_icon || ''}  ${row.name}`}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">{row.change}%</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TopCryptoSection;
