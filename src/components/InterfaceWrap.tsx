import { ReactNode, useContext } from "react";
import { Header } from "./Header";
import { AppContext } from "@/context/AppContext";
import { SideBar } from "./SideBar";

interface InterfaceWrapProps {
  children: ReactNode;
}

export function InterfaceWrap({ children }: InterfaceWrapProps) {
  const { sidebarOpen } = useContext(AppContext);

  return (
    <>
      <div className="grid h-screen w-full relative bg-green-50">
        <div className="fixed z-50">
          <SideBar />
        </div>

        <div className="bg-slate-50 pl-16">
          <div
            aria-selected={sidebarOpen}
            className="backdrop-blur-sm bg-white bg-opacity-20 absolute top-0 left-0 transition-all delay-75 hidden aria-selected:block h-screen w-screen z-10"
          ></div>
          <Header />

          <div className="p-16 pt-12">{children}</div>
        </div>
      </div>
    </>
  );
}
