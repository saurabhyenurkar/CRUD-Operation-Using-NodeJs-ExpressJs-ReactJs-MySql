 // eslint-disable-next-line
import react from 'react';
import {Link} from "react-router-dom";

const About = () =>{
    return(
        <div className="container bg-body-light p-4">
            <div className="text-center mb-4">
                <img className="bi mb-3" alt='Logo' src="assets/logo/logo.ico" width="80px" height="80px" />
                <h1 className="text-body-emphasis">CRUD Operation App</h1>
            </div>
            <p className="justifier lh-lg col-lg-12 text-justify  fs-12 text-muted">
            The CURD Operation App is a simple and efficient application designed for easy data management. CURD stands for Create, Update, Read, and Delete, representing the fundamental database operations. The app offers an intuitive user interface that allows users to create new records, update existing ones, read specific data, and delete unnecessary information. With secure data storage, the app ensures data integrity and privacy. Whether it's managing student information, the CURD Operation App simplifies data handling, making it a valuable tool for school and College.
            </p>
            <div className="text-center p-1">
                <div className="d-inline-flex mb-5">
                    <Link className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" to="/" type="button">
                        Try Now
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default About;