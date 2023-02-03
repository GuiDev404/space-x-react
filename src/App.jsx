import { Container, Image, Box } from "@chakra-ui/react";
import { Route, Routes, Link } from "react-router-dom";

import logo from "./assets/logo.png";

import LaunchDetails from "./pages/LaunchDetails";
import Home from "./pages/Home";
import RocketDetails from "./pages/RocketDetails";
import NotFound from "./pages/NotFound";

export function App() {
  return (
    <Container maxWidth="container.sm">

      <Box mt={4} mb={3} w='100%'  textAlign="center">
        <Link to="/">
          <Image
            src={logo}
            display="inline-block"
            alt="Logo de Space X"
            width={175}
          />
        </Link>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch/:id" element={<LaunchDetails />} />
        <Route path="/rockets/:id" element={<RocketDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
