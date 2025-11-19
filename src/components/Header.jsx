import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router";
import "../assets/styles/Header.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Header() {
	const location = useLocation();
	const auth = useSelector((state) => state.auth);

	const getValidToken = () => {
		const isValid = auth.token && new Date(auth.expiresAt) > new Date();
		return isValid;
	};

	const isConnected = getValidToken();

	return (
		<Navbar bg="light" data-bs-theme="light">
			<Container>
				<Nav className="ms-auto">
					<Nav.Link as={NavLink} to="/">
						Accueil
					</Nav.Link>
					<Nav.Link as={NavLink} to="/offres/publiques">
						Offres Publiques
					</Nav.Link>

					<Nav.Link as={NavLink} to="/offres/professionnelles">
						Offres Professionnelles
					</Nav.Link>
					{!isConnected && (
						<>
							<Nav.Link as={NavLink} to="/inscription">
								Inscription
							</Nav.Link>
							<Nav.Link as={NavLink} to="/connexion">
								Connexion
							</Nav.Link>
						</>
					)}
					{isConnected && (
						<Nav.Link as={NavLink} to="/deconnexion">
							Déconnexion
						</Nav.Link>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
}
export default Header;
