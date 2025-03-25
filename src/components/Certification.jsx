import React, {useEffect} from "react";
import Header from "./Header";
import FlexNav from "./FlexNav";

const Certification = () => {
  useEffect(() => {
    document.title = "Olorunfemi- My Certifications"
  }, [])
  return (
    <div>
      <Header fore="Feats" back="Certification" />
      <FlexNav />
    </div>
  );
};

export default Certification;
