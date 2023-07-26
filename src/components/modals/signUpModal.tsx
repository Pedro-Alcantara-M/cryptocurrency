import {
  useState,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
} from "react";
import { createUser } from "@services/users.service";
import {
  Container,
  Modal,
  TextField,
  Typography,
  InputAdornment,
  useTheme,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  CloseOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { IUser } from "@src/services/interface";
import { validateEmail } from "@src/utils";

export const SignUpModal = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<{wrongPassword: boolean, invalidEmail: boolean}>({
    wrongPassword: false,
    invalidEmail: false
  });
  const [body, setBody] = useState<IUser | null>(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(!validateEmail(body?.email)){
      return setError((state) => ({ ...state, invalidEmail: true }));
    }

    if(body?.password !== confirmPassword){
     return setError((state) => ({ ...state, wrongPassword: true }));
    }

    const response = await createUser(body);

    if (response.status === 201 && response.data) {
      props.setOpen(false);
      setError({
        wrongPassword: false,
        invalidEmail: false
      })
    }
    
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError({
      wrongPassword: false,
      invalidEmail: false
    })
    setBody((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ maxWidth: "28em", maxHeight: "35.5em", margin: "auto" }}
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
        <Typography variant="h4" sx={{ display: "flex", mb: "1.5em" }}>
          Sign Up to{" "}
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
          placeholder="Name"
          name="name"
          required
          value={body?.name}
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
                <PersonOutline
                  fontSize="small"
                  sx={{ color: "secondary.300", cursor: "pointer" }}
                  onClick={() => setShowPassword(true)}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="Email"
          name="email"
          required
          error={error.invalidEmail}
          helperText={error.invalidEmail && "invalid email"}
          value={body?.email}
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
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
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
        <TextField
          placeholder="Confirm password"
          value={confirmPassword}
          required
          error={error.wrongPassword}
          helperText={error.wrongPassword && "passwords do not match"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          type={showConfirmPassword ? "text" : "password"}
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
                {!showConfirmPassword ? (
                  <IconButton onClick={() => setShowConfirmPassword(true)}>
                    <VisibilityOutlined
                      fontSize="small"
                      sx={{ color: "secondary.300" }}
                    />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setShowConfirmPassword(false)}>
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

        <FormControlLabel
          sx={{ fontSize: theme.typography.subtitle1, mt: "1.5em" }}
          required
          control={
            <Checkbox
              sx={{
                transform: "translatey(-0.8em)",
                "&.MuiButtonBase-root.MuiCheckbox-root": {
                  color: "primary.main",
                },
              }}
            />
          }
          label={
            <>
              I have read and accept the <strong>Privacy Policy</strong> and{" "}
              <strong>Terms of User Sign up.</strong>
            </>
          }
        />

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
          {"Sign Up"}
        </Button>
        <Typography variant="subtitle1" sx={{ display: "flex", mt: "1.5em" }}>
          {" Already have and account?"}{" "}
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", mt: "0.2em", ml: "0.5em" }}
          >
            <strong>Sign in to</strong>{" "}
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
      </Container>
    </Modal>
  );
};
