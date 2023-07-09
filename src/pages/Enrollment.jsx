import React from "react";
import { EnrollmentFilterProvider } from "../utils/EnrollmentFilterContext";
import EnrollmentContainer from "../components/EnrollmentContainer";

function Enrollment() {
  return (
    <EnrollmentFilterProvider>
      <div className="enrollment">
        <EnrollmentContainer />
      </div>
    </EnrollmentFilterProvider>
  );
}

export default Enrollment;
