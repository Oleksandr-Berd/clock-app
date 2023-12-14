
import {Dna} from "react-loader-spinner";
import * as SC from "./LoaderStyled";

const Loader: React.FC = () => {
  return (
    <SC.LoaderStyled>
      <Dna
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
