// eslint-disable-next-line
import react from "react";

const Footer = () => {
  return (
    <div className="fixed-bottom container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py- my-1 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 CRUD App | <a className="ancle" href="https://github.com/saurabhyenurkar/" target="blank"><i>Saurabh Yenurkar</i></a>, Inc
          </span>
        </div>
        <ul className="sss nav col-md-6 justify-content-end list-unstyled ">
          <li className="ms-4">
            <a className="text-body-secondary" target="blank" href="https://www.linkedin.com/in/saurabhyenurkar/">
              <img className="bi" width={20} height={20} alt='LinkedIn' src="assets/logo/1.png"/>
            </a>
          </li>
          <li className="ms-4">
            <a className="text-body-secondary" target="blank" href="https://www.instagram.com/princesaurabh13/">
              <img className="bi" width={20} height={20} alt='Instagram' src="assets/logo/3.png"/>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
