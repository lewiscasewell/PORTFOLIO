import NextHead from "next/head";
import PropTypes from "prop-types";
import React from "react";

interface Props {
  title: string;
  description: string;
}

export const Head: React.FC<Props> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      {/* <meta
        property="og:image"
        content=""
      /> */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000000" />
    </NextHead>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
