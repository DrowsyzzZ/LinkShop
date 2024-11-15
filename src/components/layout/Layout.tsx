import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto w-full PC:w-[1198px] Tablet:px-6 Mobile:px-4">
      {children}
    </div>
  );
};

export default Layout;
