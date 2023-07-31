import { useEffect, useState, useContext } from "react";
import { getCoins } from "@services/coins.service";
import { ICoin } from "@src/services/interface";
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
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";
import { formatToUSD } from "@src/utils";
import { GeneralContext } from "@src/context/generalContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { KeyboardArrowDownSharp } from "@mui/icons-material";

const INITIAL_QUERY = {
  _limit: 4,
  isMore: true,
};

const TopCryptoSection = () => {
  const theme = useTheme();
  const { storeCoins, coins } = useContext(GeneralContext);
  const [query, setQuery] = useState<{ _limit: number; isMore: boolean }>(
    INITIAL_QUERY
  );
  const [, setIsLoading] = useState(false);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const smallScreen = useMediaQuery(`(max-width:650px)`);

  const tableheaders = ["#", "Crypto", "Price", "Change", "Trade"];

  const handleAccordionChange =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedRow(isExpanded ? index : null);
    };

  const handleButton = () => {
    if (query.isMore) {
      return setQuery({ _limit: 10, isMore: false });
    }

    return setQuery({ _limit: 4, isMore: true });
  };

  

  useEffect(() => {
    const firstRender = async () => {
      setIsLoading(true);
      const response = await getCoins({ _limit: query._limit });
  
      if (response && response.data) {
        storeCoins(response.data);
      }
      setIsLoading(false);
    };
    
    firstRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Container
      id="section2"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        p: "7.5em 0em",
        maxWidth: "90em !important",
      }}
    >
      <Typography variant="h3" sx={{ alignSelf: "center", fontWeight: "bold" }}>
        Top Cryptos
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ display: "flex", boxShadow: "none", justifyContent: "center" }}
      >
        <Table sx={{ maxWidth: 1248, p: "2em" }} aria-label="customized table">
          <TableHead>
            {!smallScreen ? (
              <TableRow>
                {tableheaders.map((item) => (
                  <StyledTableCell key={item}>{item}</StyledTableCell>
                ))}
              </TableRow>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: "40px",
                }}
              >
                <StyledTableCell>Crypto</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </Box>
            )}
          </TableHead>

          <TableBody>
            {!smallScreen &&
              coins &&
              coins.length > 0 &&
              coins?.map((row: ICoin, index: number) => (
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
                        {`${row.name} `}{" "}
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
                        {formatToUSD(Number(row.price))}
                      </Typography>
                    }
                  </StyledTableCell>

                  <StyledTableCell
                    sx={{
                      color:
                        row?.change && row?.change > 0
                          ? "success.700"
                          : "error.700",
                    }}
                  >
                    {row.change && row.change > 0 && "+"}
                    {row.change?.toFixed(2)}%
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

      {smallScreen && (
        <Box sx={{ maxWidth: 1248, p: "2em" }} aria-label="customized table">
          {coins.map((row, index) => (
            <Accordion
              key={index}
              elevation={0}
              expanded={expandedRow === index}
              onChange={handleAccordionChange(index)}
              sx={{
                width: "100%",
                border: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <KeyboardArrowDownSharp
                    sx={{ color: "primary.main", fontSize: "1.9em" }}
                  />
                }
                sx={{
                  height: "56px",
                  background:
                    index % 2 !== 0 ? theme.palette.action.hover : "white",
                }}
              >
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ border: "none" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                    }}
                  >
                    <img src={row.image} width="32" alt={`Logo ${row.name}`} />
                    <Typography variant="body1">
                      {`${row.name} `}
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
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  borderTop: `1px solid ${theme.palette.secondary.light} !important`,
                }}
              >
                <StyledTableRow
                  key={`${row.name}${index}`}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <StyledTableCell sx={{ border: "none" }} component="th">
                    Price:
                  </StyledTableCell>
                  <StyledTableCell sx={{ border: "none" }}>
                    <Typography variant="body1">
                      {formatToUSD(Number(row.price))}
                    </Typography>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow
                  key={`${row.name}${index}`}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    "&:nth-of-type(even)": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <StyledTableCell sx={{ border: "none" }} component="th">
                    Change:
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      border: "none",
                      color:
                        row?.change && row?.change > 0
                          ? "success.700"
                          : "error.700",
                    }}
                  >
                    {row.change && row.change > 0 && "+"}
                    {row.change?.toFixed(2)}%
                  </StyledTableCell>
                </StyledTableRow>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
      <Button
        onClick={handleButton}
        sx={{
          m: "1em auto",
          alignSelft: "center",
          maxWidth: "7em",
          fontSize: "1em",
          textTransform: "none",
          color: `${theme.palette.primary.main} !important`,
        }}
      >
        {query.isMore ? "View more +" : "View less -"}
      </Button>
    </Container>
  );
};

export default TopCryptoSection;
