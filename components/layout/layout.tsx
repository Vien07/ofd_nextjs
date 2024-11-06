import React from "react";
import { useLockedBody } from "../hooks/useBodyLock";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    // <SidebarContext.Provider
    //   value={{
    //     collapsed: sidebarOpen,
    //     setCollapsed: handleToggleSidebar,
    //   }}
    // >
    //   <section className="flex">
    //     <SidebarWrapper />
    //     <NavbarWrapper>{children}</NavbarWrapper>
    //   </section>
    // </SidebarContext.Provider>
    <div className="container mx-auto p-4">
      {children}
    </div>

  );
};
