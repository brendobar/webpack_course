import styles from './Layout.module.scss'
import {Link, Outlet} from "react-router-dom";
import {Suspense} from "react";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header>
                <nav className={styles.nav}>
                    <Link to="/">Home</Link>
                    <Link to="/test">Test</Link>
                    <Link to="/auth">Auth</Link>
                </nav>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet/>
                </Suspense>
            </main>
            <footer className={styles.footer}>footer</footer>
        </div>
    );
};

export default Layout;