
import DNA from "react-loader-spinner/dist/loader/Dna";
import * as SC from "./LoaderStyled";

const Loader: React.FC = () => {
  return (
    <SC.LoaderStyled>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </SC.LoaderStyled>
  );
};

export default Loader;
