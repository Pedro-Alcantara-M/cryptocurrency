/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from "@mui/material";
import walletIcon from "@assets/cryptowallet.svg";
import AddIcon from "@mui/icons-material/Add";
import { ICoin } from "@src/services/interface";
import theme from "@src/theme";
import { formatToUSD } from "@src/utils";
import { StyledTableCell, StyledTableRow } from "./styles";
import tradeIcon from "@assets/trade.svg";
import noDataIcon from "@assets/nodata.svg";
import { AddCryptoModal } from "@src/components/modals/addCryptoModal";
import { TransferCryptoModal } from "@src/components/modals/transferCryptoModal";
import { getCoins } from "@src/services/coins.service";
import { GeneralContext } from "@src/context/generalContext";
import { AuthContext } from "@src/context/authContext";
import useMediaQuery from "@mui/material/useMediaQuery";

export const TableSection = () => {
  const { user } = useContext(AuthContext);
  const { storeCoins } = useContext(GeneralContext);
  const smallScreen = useMediaQuery(`(max-width: 600px)`);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isAddCryptoModalOpen, setIsAddCryptoModalOpen] = useState(false);
  const [isTransferCryptoModalOpen, setIsTransferCryptoModalOpen] =
    useState(false);
  const [currentCoin, setCurrentCoin] = useState<ICoin | null>(null);
  const [isMore, setIsMore] = useState(true);

  function removeDuplicateObjects(arr1: ICoin[], arr2: ICoin[]): ICoin[] {
    const uniqueIds = new Set<string>();
    const result: ICoin[] = [];

    arr2.forEach((item) => uniqueIds.add(item.id || ""));
    result.push(...arr1.filter((item) => !uniqueIds.has(item.id || "")));

    return result;
  }

  const INITIAL_QUERY = {
    _limit: isMore ? 10 : 4,
  };

  const firstRender = async () => {
    setIsLoading(true);
    const respCoins = await getCoins(INITIAL_QUERY);

    if (respCoins && respCoins.data) {
      const currentCoins = removeDuplicateObjects(
        respCoins?.data || [],
        user?.customerCrypto || []
      );
      storeCoins(currentCoins);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    isSuccess && firstRender();
  }, [isSuccess, isMore]);

  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        backgroundColor: "white",
        mt: "2em",
        minHeight: smallScreen ? "10em" : "24.3em",
        borderRadius: "8px",
        p: "0 !important",
        boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "5em",
        }}
      >
        <Box p="2em" sx={{ display: "flex" }}>
          <img src={walletIcon} alt="wallet icon" />
          <Typography variant="h4" fontWeight="bold" ml="1em">
            My Wallet
          </Typography>
        </Box>
        {!smallScreen ? (
          <Button
            variant="contained"
            type="button"
            onClick={() => setIsAddCryptoModalOpen(true)}
            sx={{
              m: "2em",
              color: "white !important",
              borderRadius: "32px",
              textTransform: "none",
              boxShadow: "none",
              "&.MuiButtonBase-root": {
                height: "2em !important",
              },
            }}
          >
            <AddIcon sx={{ fontSize: "1.3em", mr: "0.2em" }} /> Add crypto
          </Button>
        ) : (
          <IconButton
            onClick={() => setIsAddCryptoModalOpen(true)}
            sx={{
              background: theme.palette.primary.main,
              m: "2em",
              color: "white !important",
              boxShadow: "none",
              '&:hover': {
                background: theme.palette.primary.main,
              }
          
            }}
          >
            <AddIcon sx={{ fontSize: "0.8em"}} />
          </IconButton>
        )}
      </Box>
      <Divider sx={{ backgroundColor: "secondary.200", p: 0, m: 0 }} />
      {!smallScreen && (
        <Box>
          <TableContainer
            component={Paper}
            sx={{ boxShadow: "none", p: "0 !important" }}
          >
            {user?.customerCrypto && user?.customerCrypto?.length > 0 && (
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>#</StyledTableCell>
                    <StyledTableCell>Crypto</StyledTableCell>
                    <StyledTableCell>Holdings</StyledTableCell>
                    <StyledTableCell>Change</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "right" }}>
                      Trade
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user?.customerCrypto?.map((row: ICoin, index: number) => (
                    <StyledTableRow key={`${row.name}${index}`}>
                      <StyledTableCell component="th" scope="row">
                        <Typography>{index + 1}</Typography>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1em",
                          }}
                        >
                          <img
                            src={row.image}
                            width="32"
                            alt={`Logo ${row.name}`}
                          />
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

                      <StyledTableCell>
                        <Typography variant="body1">
                          {formatToUSD(Number(row.price))}
                        </Typography>
                        <Typography
                          sx={{
                            color: `${theme.palette.primary.main} !important`,
                          }}
                        >
                          {`${row.amount} ${row.symbol?.toUpperCase()}`}
                        </Typography>
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
                      <StyledTableCell sx={{ ml: "10px", textAlign: "right" }}>
                        <IconButton
                          onClick={() => {
                            setCurrentCoin(row);
                            setIsTransferCryptoModalOpen(true);
                          }}
                        >
                          <img src={tradeIcon} alt="trade icon" />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            )}
            {user?.customerCrypto && user?.customerCrypto?.length === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "4.5em",
                }}
              >
                <img src={noDataIcon} alt="no data icon" />
                <Typography variant="h5" fontWeight="bold">
                  Nothing here yet...
                </Typography>
                <Typography variant="body1">
                  Add a crypto and start earning
                </Typography>
              </Box>
            )}
          </TableContainer>
        </Box>
      )}

      <Grid container spacing={1} justifyContent="center" sx={{ mb: "5em" }}>
        {smallScreen &&
          user?.customerCrypto &&
          user?.customerCrypto?.length > 0 &&
          user?.customerCrypto?.map((row: ICoin, index: number) => (
            <Grid key={`${row.id}${index}`} item xs={6}>
              <Box
                sx={{
                  height: "18em",
                  mt: "1em",
                  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5em",
                    pl: "1em",
                    background: theme.palette.primary.light,
                    height: "3em",
                    borderRadius: "8px 8px 0px 0px",
                  }}
                >
                  <img
                    src={row.image}
                    alt="coin image"
                    width="18em"
                    height="18em"
                  />
                  {` ${row.name}`}{" "}
                  <Typography variant="body1">
                    {row.symbol?.toUpperCase()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    pl: "1em",
                    py: "1.5em",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: `${theme.palette.secondary.main} !important` }}
                  >
                    Holdings
                  </Typography>
                  <Typography variant="subtitle1">
                    US
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(row.price || 0)}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: `${theme.palette.primary.main} !important` }}
                  >
                    {row.amount}BTC
                  </Typography>
                </Box>

                <Divider sx={{ mx: "1em" }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    py: "1.5em",
                    borderRadius: "0px 0px 8px 8px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      pl: "1em",
                      color: `${theme.palette.secondary.main} !important`,
                    }}
                  >
                    Change
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      pl: "1em",
                      color: `${
                        row?.change && row?.change > 0
                          ? theme.palette.success.main
                          : theme.palette.error.main
                      } !important`,
                    }}
                  >
                    {row?.change && row?.change > 0 && "+"}{" "}
                    {row.change?.toFixed(2)}
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      mx: "auto !important",
                      "&.MuiBox-root": {
                        display: "flex",
                        justifyContent: "center",
                        mt: "1em",
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      type="button"
                      onClick={() => {
                        setCurrentCoin(row);
                        setIsTransferCryptoModalOpen(true);
                      }}
                      sx={{
                        ml: 0,
                        color: "white !important",
                        width: "80%",
                        borderRadius: "32px",
                        textTransform: "none",
                        boxShadow: "none",
                        "&.MuiButtonBase-root": {
                          height: "2em !important",
                        },
                      }}
                    >
                      Trade
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}

        {smallScreen && (
          <Box
            sx={{
              width: "100%",
              mx: "auto !important",
              "&.MuiBox-root": {
                display: "flex",
                justifyContent: "center",
                mt: "1em",
              },
            }}
          >
            <Button
              variant="text"
              type="button"
              onClick={() => {
                setIsMore(!isMore);
              }}
              sx={{
                ml: 0,
                width: "80%",
                borderRadius: "32px",
                textTransform: "none",
                boxShadow: "none",
                "&.MuiButtonBase-root": {
                  height: "2em !important",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: `${theme.palette.primary.main} !important` }}
              >
                {isMore ? "View More +" : "View less -"}
              </Typography>
            </Button>
          </Box>
        )}
      </Grid>

      {isAddCryptoModalOpen && (
        <AddCryptoModal
          setIsSuccess={setIsSuccess}
          open={isAddCryptoModalOpen}
          setOpen={setIsAddCryptoModalOpen}
        />
      )}

      {isTransferCryptoModalOpen && (
        <TransferCryptoModal
          setIsSuccess={setIsSuccess}
          currentCoin={currentCoin}
          open={isTransferCryptoModalOpen}
          setOpen={setIsTransferCryptoModalOpen}
        />
      )}
    </Container>
  );
};
