import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
  useContext,
  useEffect,
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
} from "@mui/material";
import { updateUserCrypto } from "@src/services/users.service";
import { CloseOutlined, KeyboardArrowRight } from "@mui/icons-material";
import { ICoin } from "@src/services/interface";
import { GeneralContext } from "@src/context/generalContext";
import { AuthContext } from "@src/context/authContext";

export const AddCryptoModal = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
}) => {
  const { user, storeUser } = useContext(AuthContext);
  const { coins } = useContext(GeneralContext);
  const theme = useTheme();
  const [body, setBody] = useState<ICoin | null>(null);

  const handleClose = () => {
    props.setOpen(false);
  };
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const currentCryptos = body
      ? user?.customerCrypto
        ? [...user.customerCrypto, body]
        : [body]
      : user?.customerCrypto;

    const response = await updateUserCrypto(user?.id, {
      customerCrypto: currentCryptos || [],
    });

    if (response.status === 200 && response.data) {
      storeUser(response.data);
      props.setOpen(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody((state) => ({ ...state, [e.target.name]: Number(e.target.value) }));
  };

  useEffect(() => {
    props.setIsSuccess(false);
  }, []);

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ maxWidth: "28em", maxHeight: "20em", margin: "auto" }}
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
          Add Crypto
        </Typography>
        <Autocomplete
          sx={{ width: "100%" }}
          options={coins || []}
          value={body}
          onChange={(e: any, newValue: ICoin | null) => {
            setBody((state) => ({ ...state, ...newValue }));
          }}
          getOptionLabel={(option: ICoin) => option?.name || ""}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between !important",
                p: "1em 1.5em",
                borderBottom: `1px solid ${theme.palette.secondary.light}`,
              }}
              {...props}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  loading="lazy"
                  width="16"
                  height="16"
                  src={option.image}
                  alt={option.name}
                />
                <Typography variant="body1" ml="0.5em">
                  {`${option.name} `}
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      color: `${theme.palette.secondary.main} !important`,
                    }}
                  >
                    {option.symbol?.toUpperCase()}
                  </Typography>
                </Typography>
              </Box>

              <Box>
                <KeyboardArrowRight
                  sx={{
                    color: theme.palette.secondary.light,
                  }}
                />
              </Box>
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose"
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
          {"Sign Up"}
        </Button>
      </Container>
    </Modal>
  );
};
