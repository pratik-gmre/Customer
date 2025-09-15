interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">{children}</div>;
};

export default layout;
