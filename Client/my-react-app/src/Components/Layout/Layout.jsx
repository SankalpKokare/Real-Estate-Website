import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import UserDetailContext from "../../Context/UserDetailsContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

function Layout() {
  const {isAuthenticated , user} = useAuth0();
  const {setUserDetails} = useContext(UserDetailContext)

  const {mutate} = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email)

  })
  useEffect ( ()=> {
   isAuthenticated && mutate()
  } , [isAuthenticated])

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
