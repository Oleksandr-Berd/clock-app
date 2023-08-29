import { Suspense } from "react";
import { Dna } from "react-loader-spinner";

import * as SC from "./SharedLayoutStyled";

import bgMobileDay from "../../assets/mobile/bg-image-daytime.jpg";

type Props = {
  children: React.ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  return (
    <SC.MainLayout bg={bgMobileDay}>
      <Suspense
        fallback={
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        }
      >
        {children}
      </Suspense>
    </SC.MainLayout>
  );
};

export default SharedLayout;
