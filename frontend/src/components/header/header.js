import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";

import "./header.scss";

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(
				relativePath: { eq: "compact-logo-small.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<header>
			<nav>
				<div className="logo">
					<Link to="/">
						<Img
							fluid={data.placeholderImage.childImageSharp.fluid}
						/>
					</Link>
				</div>
				<div className="nav-links">
					<Link to="../oferta">Oferta</Link>
					<Link to="/">Kontakt</Link>
				</div>
			</nav>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
