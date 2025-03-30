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
            title: "Data Structures",
            description: `Learn about various data 
            structures like arrays, linked lists, and trees.`,
        },
        {
            title: "Algorithms",
            description: `Explore different algorithms 
            such as sorting and searching algorithms.`,
        },
        {
            title: "Web Development",
            description: `Get started with web development 
            technologies like HTML, CSS, and JavaScript.`,
        },
    ];

    return (
        <div className="homepage-container">
            <h2 className="main-heading">
                GeeksforGeeks
            </h2>
            <h3 className="sub-heading">
                Courses:
            </h3>
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
