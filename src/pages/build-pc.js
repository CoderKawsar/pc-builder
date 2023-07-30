import SectionTitle from "@/components/UI/SectionTitle";
import PrivateRoute from "@/components/layouts/PrivateRoute";
import React from "react";

function BuildPcPage() {
  return (
    <PrivateRoute>
      <div className="mt-32">
        <SectionTitle title="Build PC" />
      </div>
    </PrivateRoute>
  );
}

export default BuildPcPage;
