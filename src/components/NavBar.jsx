import { useNavigate } from "react-router";
import { Button } from "./Button.jsx";
import { ThemeProvider } from "styled-components";
import theme from "../styling/theme.tsx";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ThemeProvider theme={theme}>
          <Button
            onClick={() => {
              navigate("/");
            }}
            theme={theme}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              navigate("/about");
            }}
            theme={theme}
          >
            About
          </Button>
          <Button
            onClick={() => {
              navigate("/projects");
            }}
            theme={theme}
          >
            Projects
          </Button>
        </ThemeProvider>
      </nav>
    </>
  );
};
