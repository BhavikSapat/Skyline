export const dynamic = "force-dynamic";
import React from "react";
import RealEstateTemplate from "./Realty-Modified";
const page = async () => {
  const Responce = await fetch(
    "https://store-admin-uat.actifyzone.com/store-uat/api/dynamic-template",
    {
      method: "GET",
      headers: {
        "X-Tenant-ID": "20",
      },
    },
  );
  const Data = await Responce.json();

  return (
    <div>
      <RealEstateTemplate data={Data.formJson[0]} />
    </div>
  );
};

export default page;
