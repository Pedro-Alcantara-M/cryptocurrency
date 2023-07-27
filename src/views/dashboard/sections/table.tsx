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
} from "@mui/material";
import walletIcon from "@assets/cryptowallet.svg";
import AddIcon from "@mui/icons-material/Add";
import { ICoin } from "@src/services/interface";
import theme from "@src/theme";
import { formatToUSD } from "@src/utils";
import { StyledTableCell, StyledTableRow } from "./styles";
import tradeIcon from "@assets/trade.svg";
import { getCustomerCryptoRequest } from "@src/services/customerCrypto.service";
import { AddCryptoModal } from "@src/components/modals/addCryptoModal";
import { TransferCryptoModal } from "@src/components/modals/transferCryptoModal";
import { getCoins } from "@src/services/coins.service";
import { getUsersRequest } from "@src/services/users.service";
import { GeneralContext } from "@src/context/generalContext";
import { AuthContext } from "@src/context/authContext";

const INITIAL_QUERY = {
  per_page: 10,
  vs_currency: "usd",
  sparkline: false,
};

export const TableSection = () => {
  const {user} = useContext(AuthContext)
  const { storeCoins } = useContext(GeneralContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isAddCryptoModalOpen, setIsAddCryptoModalOpen] = useState(false);
  const [isTransferCryptoModalOpen, setIsTransferCryptoModalOpen] =
    useState(false);
  const [customerCoins, setCustomerCoins] = useState<ICoin[] | []>([]);
  const [currentCoin, setCurrentCoin] = useState<ICoin | null>(null);

  function removeDuplicateObjects(arr1: ICoin[], arr2: ICoin[]): ICoin[] {
    const uniqueIds = new Set<string>();
    const result: ICoin[] = [];

    arr2.forEach((item) => uniqueIds.add(item.id || ""));
    result.push(...arr1.filter((item) => !uniqueIds.has(item.id || "")));

    return result;
  }

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
  }, [isSuccess]);

  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        backgroundColor: "white",
        mt: "2em",
        minHeight: "24.3em",
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
      </Box>
      <Divider sx={{ backgroundColor: "secondary.200", p: 0, m: 0 }} />
      <Box>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", p: "0 !important" }}
        >
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
              {user?.customerCrypto &&
                user?.customerCrypto?.length > 0 &&
                user?.customerCrypto?.map((row: ICoin, index: number) => (
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
        </TableContainer>

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
      </Box>
    </Container>
  );
};
