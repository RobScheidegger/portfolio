import React from "react";
import TechnologyBadge from "./TechnologyBadge";

const courseList = [
    {
        name: "Complex Analysis",
        number: "MATH 1260",
        semester: "Fall 2021",
        category: "current",
        technologies: ["Analysis", "Problem Solving"]
    },
    {
        name: "Computer Systems",
        number: "CSCI 0330",
        semester: "Fall 2021",
        category: "current",
        technologies: ["Systems", "C", "Assembly"]
    },
    {
        name: "Artificial Intelligence",
        number: "CSCI 1410",
        semester: "Fall 2021",
        category: "current",
        technologies: ["AI", "Machine Learning"]
    },
    {
        name: "Design and Analysis of Algorithms",
        number: "CSCI 1570",
        semester: "Fall 2021",
        category: "current",
        technologies: ["Algorithms", "Problem Solving"]
    },
    {
        name: "Quantum Mechanics A",
        number: "PHYS 1410",
        semester: "Fall 2021",
        category: "current",
        technologies: ["Physics", "Problem Solving"]
    },
    {
        name: "Data Science",
        number: "CSCI 1951A",
        semester: "Summer 2021",
        category: "past",
        technologies: ["Python", "Tensorflow", "MapReduce", "PySpark"]
    },
    {
        name: "Blockchains and Cryptocurrencies",
        number: "CSCI 1951L",
        semester: "Summer 2021",
        category: "past",
        technologies: ["Golang", "C++", "Solidity", "Distributed Systems/Consensus"]
    },
    {
        name: "Electricity and Magnetism",
        number: "PHYS 1980/0470",
        semester: "Summer 2021",
        category: "past",
        technologies: ["Physics", "Problem Solving"]
    },
    {
        name: "Abstract Algebra",
        number: "MATH 1530",
        semester: "Summer 2021",
        category: "past",
        technologies: ["Algebra", "Problem Solving"]
    },
    {
        name: "Discrete Structures",
        number: "CSCI 0220",
        semester: "Spring 2021",
        category: "past",
        technologies: ["Algorithms", "Combinatorics", "Statistics"]
    },
    {
        name: "Advanced Classical Mechanics",
        number: "PHYS 0500",
        semester: "Spring 2021",
        category: "past",
        technologies: ["Physics", "Problem Solving"]
    },
    {
        name: "Honors Linear Algebra",
        number: "MATH 0350",
        semester: "Spring 2021",
        category: "past",
        technologies: ["Linear Algebra", "Algebra"]
    },
    {
        name: "Honors Calculus",
        number: "MATH 0350",
        semester: "Spring 2021",
        technologies: ["Analysis"],
        category: "past"
    },
    {
        name: "Accelerated Introduction to Computer Science",
        number: "CSCI 0190",
        semester: "Fall 2021",
        category: "past",
        technologies: ["Pyret", "Unit Testing", "Algorithms"]
    }
]

export default class CoursesSection extends React.Component {
    render(){
        const courseRenderer = p => {
            return <div class="col-lg-6">
                <div class="card shadow p-3 m-2">
                    <h3><span class="mr-2">{p.name}</span></h3>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="subheading">{p.number}</div>
                        </div>
                        <div class="col-lg-6 text-right">
                            <div class="subheading">{p.semester}</div>
                        </div>
                    </div>
                    
                    <p>{p.description}</p>
                    <p class="technologies-list">
                        {p.technologies ? p.technologies.map(t => <TechnologyBadge name={t}/>) : ""}
                    </p>
                </div>
            </div>
        };

        const currentCourses = courseList.filter(c => c.category === "current").map(courseRenderer);
        const pastCourses = courseList.filter(c => c.category === "past");
        const cs = pastCourses.filter(c => c.number.toLowerCase().substring(0,4) === "csci").map(courseRenderer);
        const other = pastCourses.filter(c => c.number.toLowerCase().substring(0,4) !== "csci").map(courseRenderer);
        return <section class="resume-section" id="courses">
            <div class="resume-section-content">
                <h2 class="mb-5">Current Courses</h2>
                <div class="row">
                    {currentCourses}
                </div>
                <h2 class="mb-5">Computer Science Courses</h2>
                <div class="row">
                    {cs}
                </div>
                <h2 class="mb-5">Other Courses</h2>
                <div class="row">
                    {other}
                </div>
            </div>
        </section>;
    }
}