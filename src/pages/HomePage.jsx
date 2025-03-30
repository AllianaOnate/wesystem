// Home Page

import "../layout/HomePageLayout.css"; 

const Course = ({ title, description }) => {
    return (
        <div className="course">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const HomePage = () => {
    const courses = [
        {
            title: "Lily Potter",
            description: `Muggle-born who joined the original Order of the Phoenix in 1978; 
            wife of James Potter and mother of Harry Potter. Murdered by Voldemort on the night 
            of 31 October, 1981.`,
        },
        {
            title: "James Potter",
            description: `James Potter, Fleamont and Euphemia's only son, was born late in the couple's lives on 27 March, 1960. 
            By that time, his parents were both elderly (even by wizarding standards), but they pampered and cherished their child 
            accordingly to the point where he became a proud yet arrogant boy. However, James was still considered a good person.`,
        },
    ];

    return (
        <div className="homepage-container">
            <h2 className="main-heading">
                Harry Potter's Parents
            </h2>
            <div className="course-list">
                {courses.map((course, index) => (
                    <Course key={index}
                        title={course.title}
                        description={course.description} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
