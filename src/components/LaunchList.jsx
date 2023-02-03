import LaunchItem from "./LaunchItem";

const LaunchList = ({ launches }) => {
  return launches.map((launch) => (
    
    <LaunchItem
      key={`${launch.flight_number}-${launch.launch_date_unix}`}
      flight_number={launch.flight_number}
      mission_name={launch.mission_name}
      launch_year={launch.launch_year}
      launch_success={launch.launch_success}
      launch_date_local={launch.launch_date_local}
      details={launch.details}
      rocket={launch.rocket}
      links={launch.links}
    />
  ));
};

export default LaunchList;
