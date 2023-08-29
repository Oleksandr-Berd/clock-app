type Props = {
    children: React.ReactNode
}

const SharedLayout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default SharedLayout;