import {GiPositionMarker} from 'react-icons/gi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaBehanceSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <Link to={'/'}>
              <a className="navbar-brand" id="logo-title">
                <img
                  src={require("../../assets/images/medays.jpg")}
                  alt="medays logo"
                  id="logo-title"
                />
              </a></Link>
              <p
                className="text-white"
                style={{ fontWeight: "bold", fontSize: "16px" }}
              >
                MeDays Forum 2022
              </p>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light title">
                À propos
              </h2>
              <p className="text-light text-help">
                DISRUPTIVE THINKING est notre MANIFESTE. Il nous définit par ce
                que nous sommes, ce en quoi nous croyons et ce que nous faisons.
                C’est la base sur laquelle nous bâtissons et nourrissons notre
                créativité.
              </p>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light title">
                Plus d'infos
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                <GiPositionMarker className='fs-5' style={{color:'white',marginRight:'4px'}}/>
                  <a className="text-decoration-none text-white text-help">18 Av. Moulay Hassan, Rabat 10020</a>
                </li>
                <li className='mt-2'>
                <BsFillTelephoneFill className='fs-5' style={{color:'white',marginRight:'4px'}}/>
                  <a className="text-decoration-none text-white text-help"> 05377-23944</a>
                </li>
                <li className='mt-2'>
                <MdEmail className='fs-5' style={{color:'white',marginRight:'4px'}}/>
                  <a className="text-decoration-none text-white text-help">
                  hello@innoveos.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light"></div>
            </div>
            <div className="col-auto me-auto">
              <ul className="list-inline footer-icons">
                <li className="list-inline-item">
                  <a
                    className="text-decoration-none"
                    target="_blank"
                    href="https://fr-fr.facebook.com/innoveos/"
                  >
                    <BsFacebook className='fs-5' style={{color:'white'}}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.linkedin.com/company/innoveos/about/"
                  >
                    <BsLinkedin className='fs-5' style={{color:'white'}}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.behance.net/innoveosdi3763/appreciated"
                  >
                    <FaBehanceSquare className='fs-5' style={{color:'white'}}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://github.com/innoveos?language=javascript"
                  >
                    <BsGithub className='fs-5' style={{color:'white'}}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-100 py-3" style={{ backgroundColor: "black" }}>
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-light text-center text-help">
                  Copyright &copy; 2022 MeDays Forum
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
