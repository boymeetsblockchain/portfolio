import './footer.css'

function Footer() {
  return (
<footer className="footer">
   <div className="footer__container container">
            <h1 className="footer__title">Oluwasegun</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href="#testimonial" className='footer__link'>Testimonials</a>
                </li>
            </ul>
     <div className="footer__social">
       <a href="https://github.com/boymeetsblockchain" className='footer__social-link' target="_blank"> 
         <i class='bx bxl-github'></i>
        </a>
        <a href="https://twitter.com/i_am_hasashi" className='footer__social-link'  target="_blank"> 
         <i class='bx bxl-twitter'></i>
        </a>
        <a href="https://www.linkedin.com/in/oluwasegun-aje-b990a1232/" className='footer__social-link'  target="_blank"> 
         <i class='bx bxl-linkedin'></i>
        </a>
      </div>
      <span className='footer__copy'> &#169; Aje Oluwasegun .All rigths reserved</span>
   </div>
 </footer>
  )
}

export default Footer