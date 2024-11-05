const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col  max-w-7xl m-auto bg-white/[2%] min-h-screen">
      {children}
    </div>
  );
};
export default Container;
