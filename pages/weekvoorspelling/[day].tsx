import React, { FC } from "react";
import { GetServerSideProps } from "next";

type DayDetailsProps = {
  day: string;
};

export const DayDetails: FC<DayDetailsProps> = ({ day }) => {
  return (
    <div>
      <h1>Detail weerpagina</h1>
      <h2>{day}</h2>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.day;

  return {
    props: {
      slug: slug,
    },
  };
};

export default DayDetails;
