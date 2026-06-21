import React from 'react';
import { styles } from './WishListStyles.module';
import { Link } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
const Header = (itemCount = 0) => {
    return (
        <Header style={styles.header}>
            <div style={styles.headerContainer}>
                <Link to="/" style={styles.logoLink}>
                    <h1>amazon.in</h1>

                </Link>
                <div style={styles.headerRight}>
                    <span>Hello, User</span>
                    <div style={styles.cartIcon}>
                        <Link to="/cart" style={styles.cartLink}>
                            <ShoppingCart size={24} />
                        </Link>
                        <span style={styles.cartCount}>{itemCount}</span>
                    </div>
                </div>
            </div>
        </Header >
    )
}
export default Header;