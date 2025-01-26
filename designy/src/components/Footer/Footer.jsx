import './footer.css';
const Footer = () => {
    return(
        <>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-texts">
                    <div className="footer-title">
                            .darkpages
                    </div>
                    <div className="footer-legal">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, accusantium tempora officia quia eos molestiae consequatur perspiciatis molestias hic optio veniam laborum tempore accusamus quam.</p>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-links-title">Links:</div>
                    <ul className="footer-links-ul">
                        <li className="footer-links-li"><a href=".">Home</a></li>
                        <li className="footer-links-li"><a href=".">Watches</a></li>
                    </ul>
                    <ul className="footer-links-ul">
                        <li className="footer-links-li"><a href=".">Vision</a></li>
                        <li className="footer-links-li"><a href=".">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>

        </>
    )
}
export default Footer;