function layout({ children }) {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-lg p-2">{children}</div>
    </div>
  );
}

export default layout;
