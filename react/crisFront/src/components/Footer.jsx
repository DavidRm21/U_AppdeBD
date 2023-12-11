
export const Footer = () => {
    return (
        <footer className='footer'>
            
            <div className="info">
                <h3>Aplicaciones de bases de datos</h3>
                <div className='footer-profile'>
                    <div className='profile-photo'></div>
                    <div className='profile-data'>
                        <div className='profile-name'>Cristian David Romero Melo</div>
                        <div className='profile-description'>Estudiante de Universitaria</div>
                    </div>
                </div>
            </div>

            <div className="social-media" >
                
                <a href="https://github.com/DavidRm21" className="link-media">
                    <span className="icon icon-github"></span>
                </a>

                <a href="https://web.whatsapp.com/" className="link-media">
                    <span className="icon icon-whatsapp"/>
                </a>

                <a href="https://www.instagram.com/" className="link-media">
                    <span className="icon icon-instagram"/>
                </a>

            </div>
        </footer>
    )
}
