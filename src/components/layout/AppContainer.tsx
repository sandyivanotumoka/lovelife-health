// Komponen AppContainer
// Mobile tetap nyaman, tetapi desktop bisa menggunakan seluruh lebar layar

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AppContainer({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Area aplikasi */}
      <div className="w-full min-h-screen bg-[var(--color-background)]">
        {children}
      </div>
    </div>
  );
}

export default AppContainer;
