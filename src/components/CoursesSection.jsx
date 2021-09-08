import React from "react";
import TechnologyBadge from "./TechnologyBadge";

const courseList = [
    {
        name: "Honors Linear Algebra",
        number: "MATH 0350",
        semester: "Spring 2021"
    },
    {
        name: "Honors Calculus",
        number: "MATH 0350",
        semester: "Spring 2021",
        technologies: []
    }
]

export default class CoursesSection extends React.Component {
    render(){
        const courses = courseList.map(p => {
            return <div class="col-lg-6">
                <div class="card shadow p-3 m-3">
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
        });
        return <section class="resume-section" id="courses">
            <div class="resume-section-content">
                <h2 class="mb-5">Courses</h2>
                <div class="row">
                    {courses}
                </div>
            </div>
        </section>;
    }
}