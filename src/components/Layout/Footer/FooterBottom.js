import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="footer__bottom">
            <div className="container">
                <div className="row">
                <div className="col-xxl-12">
                    <div className="footer__copyright text-center">
                        <p>© 2022 NEST - Education System Powered By <Link href="https://webbie.business/"><a>Webbie A Digital Company</a></Link></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;