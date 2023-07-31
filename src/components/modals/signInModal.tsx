import {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FormEvent,
  useContext,
} from "react";
import { loginRequest } from "@services/login.service";
import { AuthContext } from "@src/context/authContext";
import {
  Container,
  Modal,
  TextField,
  Typography,
  InputAdornment,
  useTheme,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import {
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  CloseOutlined,
} from "@mui/icons-material";

export const SignInModal = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}) => {
  const { login } = useContext(AuthContext);
  const theme = useTheme();
  const [loginBody, setLoginBody] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setLoginBody((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const response = await loginRequest(loginBody);

    if (response.status === 200 && response.data && response.data.length > 0) {
      login(response.data[0]);
      props.setOpen(false);
      setError(false);
    }

    setError(true);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        maxWidth: "28em",
        maxHeight: error ? "24em" : "23.44em",
        margin: "auto",
      }}
    >
      <Container
        component="form"
        onSubmit={handleLogin}
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
        <Typography variant="h4" sx={{ display: "flex", mb: "1.5em" }}>
          Sign in to{" "}
          <Typography
            sx={{
              ml: "0.2em",
              fontWeight: "bold",
              lineHeight: 1.25,
              color: `${theme.palette.primary.main} !important`,
            }}
          >
            Coin
          </Typography>
          <strong>Synch</strong>
        </Typography>
        <TextField
          placeholder="Email"
          name="email"
          required
          error={error}
          value={loginBody.email}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined
                  fontSize="small"
                  sx={{ color: "secondary.300", cursor: "pointer" }}
                  onClick={() => setShowPassword(true)}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="Password"
          name="password"
          required
          type={showPassword ? "text" : "password"}
          value={loginBody.password}
          onChange={handleChange}
          error={error}
          helperText={error && "usuário ou senha inválidos"}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            width: "100%",
            "& .MuiInputBase-root": {
              height: "3em",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "secondary.300",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined
                  fontSize="small"
                  sx={{ color: "secondary.300" }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {!showPassword ? (
                  <IconButton onClick={() => setShowPassword(true)}>
                    <VisibilityOutlined
                      fontSize="small"
                      sx={{ color: "secondary.300" }}
                    />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setShowPassword(false)}>
                    <VisibilityOffOutlined
                      fontSize="small"
                      sx={{ color: "secondary.300" }}
                    />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="subtitle2" mt="0.56em" alignSelf="end">
          <Link
            href="#"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Forgot password?
          </Link>
        </Typography>

        <Button
          variant="contained"
          type="submit"
          sx={{
            color: "white !important",
            borderRadius: "2em",
            padding: "14px 24px",
            gap: "10px",
            mt: "32px",
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
          {"Sign In"}
        </Button>
        <Button
          type="button"
          sx={{ textTransform: "none" }}
          onClick={() => {
            props.setIsSignUp(true);
            props.setOpen(false);
          }}
        >
          <Typography variant="subtitle1" sx={{ display: "flex", mt: "1.5em" }}>
            {"Don’t have an account?"}{" "}
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", mt: "0.2em", ml: "0.5em" }}
            >
              Sign in to{" "}
              <Typography
                sx={{
                  ml: "0.2em",
                  fontWeight: "bold",
                  mt: "0.1em",
                  color: `${theme.palette.primary.main} !important`,
                }}
              >
                Coin
              </Typography>
              <strong>Synch</strong>
            </Typography>
          </Typography>
        </Button>
      </Container>
    </Modal>
  );
};
