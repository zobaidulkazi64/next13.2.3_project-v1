import React from 'react'

const BgLine = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="absolute inset-0 bg-purple-100  dark:bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {children}
      </div>
    </div>
  );
}

export default BgLine