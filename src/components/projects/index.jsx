import React from 'react';
import projectImg from '../../assets/projectsImg.svg'

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <div className="projects__top flex">
                    <h2 className="projects__title title">
                    Наши проекты
                    </h2>
                    <p className="projects__description description text-center">
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
                    </p>
                </div>
                <div className="projects__bottom">
                    <div className="projects__row row">
                        <div className="col-3"> <img src={projectImg} alt=""/> </div>
                        <div className="col-3"> <img src={projectImg} alt=""/> </div>
                        <div className="col-3"> <img src={projectImg} alt=""/> </div>
                        <div className="col-3"> <img src={projectImg} alt=""/> </div>
                    </div>
                </div>
                <button className="projects__btn btn">
                Все проекты
                </button>
            </div>
        </section>
    )
}

export default Projects;
