 // eslint-disable-next-line
import react from 'react';

const About = () =>{
    return(
        <div className='container bg-body-light '>
            <div className="p-2 rounded">
                    <div className="text-center">
                        <img className="bi mb-" alt='Logo' src="assets/logo/icon.png" width="80px" height="80px" />
                        <h1 className="text-body-emphasis">CRUD Operation App</h1>
                    </div>
                    <p className="justifier lh-lg col-lg-12 text-justify  fs-13 text-muted">
                    The CURD Operation App is a simple and efficient application designed for easy data management. CURD stands for Create, Update, Read, and Delete, representing the fundamental database operations. The app offers an intuitive user interface that allows users to create new records, update existing ones, read specific data, and delete unnecessary information. With secure data storage, the app ensures data integrity and privacy. Whether it's managing customers, products, or any other information, the CURD Operation App simplifies data handling, making it a valuable tool for businesses and organizations.
                    </p>
            </div>
        </div>

    )
}

export default About;