const ProtectRoute = ({ children, session }) => {
  console.log("session client", session);
  return children;
};

export default ProtectRoute;

