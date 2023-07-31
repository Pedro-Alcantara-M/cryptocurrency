import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useContext,
} from "react";
import {
  Container,
  Modal,
  TextField,
  Typography,
  useTheme,
  Button,
  Autocomplete,
  Box,
  Divider,
} from "@mui/material";

import { updateUserCrypto } from "@src/services/users.service";
import { CloseOutlined } from "@mui/icons-material";
import { ICoin } from "@src/services/interface";
import { AuthContext } from "@src/context/authContext";

type ITransfer = { type?: string; amount?: number };

export const TransferCryptoModal = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  currentCoin: ICoin | null;
}) => {
  const { user, storeUser } = useContext(AuthContext);
  const theme = useTheme();
  const [body, setBody] = useState<ITransfer | null>(null);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { amount: bodyAmount, type } = body ?? {};

    const userCustomerCrypto = user?.customerCrypto || [];
    const currentCoinId = props.currentCoin?.id || "";

    const cryptoIndex = userCustomerCrypto.findIndex(
      (crypto) => crypto.id === currentCoinId
    );

    const operation =
      type === "transfer_in"
        ? {
            ...userCustomerCrypto[cryptoIndex],
            amount:
              (userCustomerCrypto[cryptoIndex]?.amount || 0) +
              (bodyAmount || 0),
          }
        : {
            ...userCustomerCrypto[cryptoIndex],
            amount:
              (userCustomerCrypto[cryptoIndex]?.amount || 0) -
              (bodyAmount || 0),
          };

    const currentCrypto =
      cryptoIndex !== -1
        ? operation
        : {
            id: currentCoinId,
            amount: bodyAmount,
          };

    const updatedCustomerCrypto =
      cryptoIndex !== -1
        ? [
            ...userCustomerCrypto.slice(0, cryptoIndex),
            currentCrypto,
            ...userCustomerCrypto.slice(cryptoIndex + 1),
          ]
        : [...userCustomerCrypto, currentCrypto];

   const validatedUpdatedCrypto =  updatedCustomerCrypto.filter((item) => (item?.amount || 0) > 0);

    const response = await updateUserCrypto(user?.id, {
      customerCrypto: validatedUpdatedCrypto,
    });

    if(response && response.data) {
      storeUser(response.data)
    }

    return props.setOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody((state) => ({ ...state, amount: Number(e.target.value) }));
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ maxWidth: "28em", maxHeight: "27.56em", margin: "auto" }}
    >
      <Container
        component="form"
        onSubmit={handleOnSubmit}
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          borderRadius: "8px",
          p: "2em",
        }}
      >
        <CloseOutlined
          fontSize="small"
          sx={{
            color: "secondary.main",
            cursor: "pointer",
            position: "absolute",
            top: "0.8em",
            right: "0.8em",
          }}
          onClick={handleClose}
        />
        <Typography
          variant="h4"
          sx={{ display: "flex", mb: "1.5em", fontWeight: "bold" }}
        >
          Transfer Crypto
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ display: "flex", mt: "1.5em", mb: "1.5em" }}
        >
          You are transfering
          <Box sx={{ display: "flex", alignItems: "center", ml: "1.5em" }}>
            <img
              loading="lazy"
              width="24"
              height="24"
              src={props?.currentCoin?.image}
              alt={props?.currentCoin?.name}
            />
            <Typography variant="body1" ml="0.5em">
              {`${props?.currentCoin?.name} `}
              <Typography
                variant="body1"
                sx={{
                  display: "inline",
                  color: `${theme.palette.secondary.main} !important`,
                }}
              >
                {props?.currentCoin?.symbol?.toUpperCase()}
              </Typography>
            </Typography>
          </Box>
        </Typography>

        <Typography variant="subtitle1" sx={{ alignSelf: "start" }}>
          Transfer
        </Typography>
        <Autocomplete
          sx={{ width: "100%" }}
          options={[
            { label: "Transfer In", value: "transfer_in" },
            { label: "Transfer Out", value: "transfer_out" },
          ]}
          onChange={(
            _e: any,
            newValue: { label: string; value: string } | null
          ) => {
            setBody((state) => ({ ...state, type: newValue?.value || "" }));
          }}
          getOptionLabel={(option: { label: string; value: string }) =>
            option?.label || ""
          }
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select transfer"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "100%",
                mb: "1.5em",
                "& .MuiInputBase-root": {
                  height: "3em",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "secondary.300",
                },
              }}
            />
          )}
        />

        <Typography variant="subtitle1" sx={{ alignSelf: "start" }}>
          Quantity
        </Typography>
        <TextField
          placeholder="0,00"
          name="amount"
          type="number"
          required
          value={body?.amount}
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "100%",
            mb: "1.5em",
            "& .MuiInputBase-root": {
              height: "3em",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "secondary.300",
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            color: "white !important",
            borderRadius: "2em",
            padding: "14px 24px",
            fontSize: "1em",
            textTransform: "none",
            alignSelf: "self-start",
            boxShadow: "none",
            "&.MuiButtonBase-root": {
              height: "3em !important",
              width: "100% !important",
            },
          }}
        >
          Transfer Crypto
        </Button>
      </Container>
    </Modal>
  );
};
