import { useEffect, useState } from "react";
import { getCoins } from "@services/coins.service";
import { ICoinResp, ICoin } from "@src/services/interface";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  Typography,
  Container,
  Button,
  useTheme,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";
import { formatToUSD } from "@src/utils";

const INITIAL_QUERY = {
  per_page: 10,
  vs_currency: "usd",
  sparkline: false,
};

const TopCryptoSection = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [coins, setCoins] = useState<ICoinResp | null>(null);

  const firstRender = async () => {
    setIsLoading(true);
    const response = await getCoins(INITIAL_QUERY);
    localStorage.setItem("coins", JSON.stringify(response));
    if (response) {
      setCoins(response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const coins = localStorage.getItem("coins");
    if (coins) {
      const dataObject = JSON.parse(coins);
      setCoins(dataObject);
    } else {
      firstRender();
    }
  }, []);

  return (
    <Container
      id="section2"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: 'white',
        p: "7.5em 0em",
      }}
    >
      <Typography variant="h3" sx={{ alignSelf: "center", fontWeight: "bold" }}>
        Top Cryptos
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ maxWidth: 1248, p: "2em" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Crypto</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Change</StyledTableCell>
              <StyledTableCell>Trade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins &&
              coins.data &&
              coins.data.length > 0 &&
              coins?.data?.map((row: ICoin, index: number) => (
                <StyledTableRow key={`${row.name}${index}`}>
                  <StyledTableCell component="th" scope="row">
                    <Typography>{index + 1}</Typography>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "1em" }}
                    >
                      <img
                        src={row.image}
                        width="32"
                        alt={`Logo ${row.name}`}
                      />
                      <Typography variant="body1">
                        {`${row.id_icon || ""}  ${row.name} `}{" "}
                        <Typography
                          variant="body1"
                          sx={{
                            display: "inline",
                            color: `${theme.palette.secondary.main} !important`,
                          }}
                        >
                          {row.symbol?.toUpperCase()}
                        </Typography>
                      </Typography>
                    </Box>
                  </StyledTableCell>

                  <StyledTableCell>
                    {
                      <Typography variant="body1">
                        {formatToUSD(Number(row.current_price))}
                      </Typography>
                    }
                  </StyledTableCell>

                  <StyledTableCell
                    sx={{
                      color:
                        row?.market_cap_change_percentage_24h &&
                        row?.market_cap_change_percentage_24h > 0
                          ? "success.700"
                          : "error.700",
                    }}
                  >
                    {row.market_cap_change_percentage_24h &&
                      row.market_cap_change_percentage_24h > 0 &&
                      "+"}
                    {row.market_cap_change_percentage_24h?.toFixed(2)}%
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "success.700",
                        boxShadow: "none",
                        color: "white !important",
                        borderRadius: "2em",
                        padding: "14px 24px",
                        gap: "10px",
                        fontWeight: "bold",
                        alignSelf: "self-start",
                        "&.MuiButtonBase-root": {
                          height: "2em !important",
                          width: "5em !important",
                        },
                      }}
                    >
                      Buy
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TopCryptoSection;
