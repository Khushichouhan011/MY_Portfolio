import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./Project.css";
import projectData from "../../pages/ProjectData.json";

export const Project = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="project section" id="project">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">What I Designed</span>

      <div className="project__container container grid">
        {projectData.map((project) => (
          <div className="project__card" key={project.id}>
            
            {/* IMAGE */}
            <div className="project__image-wrapper">
              <img
                src={`/assets/${project.image}`}
                alt={project.name}
                className="project__image"
              />
            </div>

            {/* CONTENT */}
            <div className="project__content">
              <h3 className="project__title">{project.name}</h3>
              <span className="project__year">{project.date}</span>

              <div className="project__links">
                <a
                  href={project.github_repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              <button
                className="project__button"
                onClick={() => openModal(project.id)}
              >
                View More
              </button>
            </div>

            {/* MODAL */}
            {activeModal === project.id && (
              <div className="project__modal">
                <div className="project__modal-content">
                  <IoMdClose
                    className="project__modal-close"
                    onClick={closeModal}
                  />

                  <h3 className="project__modal-title">
                    <h3>Name : </h3>{project.name}
                  </h3>

                  <p className="project__modal-category">
                    <h3>Category: </h3>{project.category}
                  </p>

                  <ul className="project__modal-description">
                    <h3>Description : </h3>
                    {project.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <div className="project__tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech__badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import "./Project.css";
// import projectData from "../../pages/ProjectData.json";

// export const Project = () => {
//   const [activeModal, setActiveModal] = useState(null);

//   const openModal = (id) => {
//     setActiveModal(id);
//   };

//   const closeModal = () => {
//     setActiveModal(null);
//   };

//   return (
//     <section className="project section" id="project">
//       <h2 className="section__title">My Projects</h2>
//       <span className="section__subtitle">What I Designed</span>

//       <div className="project__container container grid">
//         {projectData.map((project) => (
//           <div className="project__card" key={project.id}>
            
//             {/* Project Image */}
//             <img
//               src={`/assets/${project.image}`}
//               alt={project.name}
//               className="project__image"
//             />

//             <div className="project__content">
//               <h3 className="project__title">{project.name}</h3>
//               <span className="project__year">{project.date}</span>
              

//               <div className="project__links">
//                 <a
//                   href={project.github_repo}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   GitHub
//                 </a>

                
//               </div>

//               <button
//                 className="project__button"
//                 onClick={() => openModal(project.id)}
//               >
//                 View More
//               </button>
//             </div>

//             {/* Modal */}
//             {activeModal === project.id && (
//               <div className="project__modal">
//                 <div className="project__modal-content">
//                   <IoMdClose
//                     className="project__modal-close"
//                     onClick={closeModal}
//                   />

//                   <h3 className="project__modal-title">
//                     {project.name}
//                   </h3>

//                   <p className="project__modal-category">
//                     {project.category}
//                   </p>

//                   <ul className="project__modal-description">
//                     {project.description.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>

//                   <div className="project__tech">
//                     {project.technologies.map((tech, index) => (
//                       <span key={index} className="tech__badge">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
