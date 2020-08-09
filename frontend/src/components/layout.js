import React from "react";
import PropTypes from "prop-types";

import Header from "./header/header";
import Footer from "./footer/footer";
import "./global.scss";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
