import { useState } from "react";
import { Box, Select, Text } from "@chakra-ui/react";

import Header from "../components/Header";
import LaunchList from "../components/LaunchList";
import Loader from "../components/Loader";
import ColorModeSwitcher from "../components/ColorModeSwitcher";

import { useFetch } from "../hooks/useFetch";
import { LAUNCHES_LIST_URL } from "../services/request";

const Home = () => {
  const [launchResult, setLaunchResult] = useState("all");
  const { data: launches, loading, error } = useFetch({ 
    url: LAUNCHES_LIST_URL,
    initialData: []
  })

  const handleChange = (e) => {
    setLaunchResult(e.target.value);
  };

  const launchesFiltered = !loading &&
    launches.filter(launch => {
      if (launchResult === "success") return launch.launch_success;
      if (launchResult === "failure") return !launch.launch_success;
      return launchResult === "all";
    });

  return (
    <>
      <Header
        title="Space X Lanzamientos"
        options={
          <>
            <Select
              width={{ base: "100%", sm: "fit-content" }}
              onChange={handleChange}
              value={launchResult}
            >
              <option hidden>Select Option</option>
              <option value="all">All</option>
              <option value="success">Success</option>
              <option value="failure">Failure</option>
            </Select>

            <ColorModeSwitcher />
          </>
        }
      />

      {error && <Text> {error?.message || 'Lo sentimos, algo salio mal.'} </Text>}

      <Box>
        {loading
          ? <Loader /> 
          : <LaunchList launches={launchesFiltered} />
        }
      </Box>
    </>
  );
};

export default Home;
