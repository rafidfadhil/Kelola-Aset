// MainContent.tsx
import React, { ReactNode } from "react";

interface MainContentProps {
  children?: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
      {children}
    </main>
  );
};

export default MainContent;
