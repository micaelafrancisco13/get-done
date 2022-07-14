import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const withHOC = (Component) => (props) => {
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isExtraSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );

  const { id } = useParams();
  const { authId } = useParams();

  return (
    <Component
      {...props}
      navigate={navigate}
      id={id}
      authId={authId}
      isExtraSmallScreen={isExtraSmallScreen}
    />
  );
};

export default withHOC;
