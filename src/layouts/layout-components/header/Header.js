import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logotext from '../../../assets/images/main_logo.png';

const settings = {
	activeDir: 'ltr',
	activeThemeLayout: 'vertical',
	activeTheme: 'light',
	activeSidebarType: 'full',
	activeLogoBg: 'skin6',
	activeNavbarBg: 'skin1',
	activeSidebarBg: 'skin6',
	activeSidebarPos: 'fixed',
	activeHeaderPos: 'fixed',
	activeLayout: 'full'
};

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/

export default () => {
	return (
		<header className="topbar navbarbg" data-navbarbg={settings.activeNavbarBg}>
			<Navbar>
				<NavbarBrand href="/">
					<b className="logo-icon">{/* <img src={logoicon} alt="homepage" className="dark-logo" /> */}</b>
					<span className="logo-text">
						<img style={{ height: 60, marginTop: '-10px' }} src={logotext} alt="homepage" className="dark-logo" />
					</span>
				</NavbarBrand>
			</Navbar>
		</header>
	);
};
