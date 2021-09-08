import React from "react";

export default class EducationSection extends React.Component {
    render(){
        return <section class="resume-section" id="education">
            <div class="resume-section-content">
                <h2 class="mb-5">Education</h2>
                <div class="card shadow p-3 m-2">
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Brown University</h3>
                            <div class="subheading mb-2">Mathematics-Computer Science</div>
                            <h4> CS GPA: 4.0</h4>
                            <p>Very STEM focused courseload, with intentional specialization in algorithms and theoretical Computer Science.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2020 - May 2024 (Anticipated)</span></div>
                    </div>
                </div>
                <div class="card shadow p-3 m-2">
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Queensbury High School</h3>
                            <div class="subheading mb-3">International Baccaloureate Diploma Program</div>
                            <div class="font-weight-bold">Highlights:</div>
                            <ol>
                                <li>GPA: 98.84 (Valedictorian)</li>
                                <li>Student Senate President</li>
                                <li>National Merit Scholarship Recipient</li>
                                <li>Designated Commencement Speaker</li>
                                <li>Adirondack Area School Boards Community Service Award (One person chosen per school/year)</li>
                                <li>Extended Essay: Applications of Generating Functions in Solving Diophantine Equations</li>
                            </ol>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2016 - June 2020 </span></div>
                    </div>
                </div>
            </div>
        </section>;
    }
}