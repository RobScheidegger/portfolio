import React from "react";
import TechnologyBadge from "./TechnologyBadge";

const experienceList = [
    {
        company: "Bankwise Technologies",
        position: "Software Engineer",
        description: "Responsible for developing a new application to aid health insurance brokerages reconcile their commission payments. "
          + "Worked directly with customers to determine proper data structures, database schema, and UI design to meet their needs. ",
        timeframe: "September 2020 - May 2021",
        technologies: ["C#", "JavaScript", "MySQL", "jQuery", "CSS", "HTML", "Handlebars"]
    },
    {
        company: "Fort William Henry Corporation",
        position: "Software Engineer",
        description: "Returned for the summer in order to develop a complete management system for the corporation, including barcode-based inventory management program, "
            + "additional functions to automate integration of other cloud based services, and migration of previous programs from WPF to ASP.NET Core MVC.",
        timeframe: "April 2020 - August 2020\nMay 2021 - June 2021",
        technologies: ["C#", "Asp.Net Core", "Azure", "Azure DevOps", "CI/CD", "Unit Testing", "Moq", "MSSQL"]
    },
    {
        company: "Adirondack Technologies, Inc. (Contract)",
        position: "Software Engineer",
        description: "In charge of developing custom applications for clients, some using C# WPF, but later transitioning to more web-based application architectures with ASP.NET Core MVC and Entity Framework Core (EFCore). "
            + "Responsible both for engineering the data structures in compliance with the needs of the end-user, as well as developing the application from start to completion. Version control managed via Azure DevOps, and generally published to IIS for deployment.",
        timeframe: "August 2016 - Current (Part Time)",
        technologies: ["C#", "Asp.Net Core", "Azure", "Azure DevOps", "CI/CD", "Unit Testing", "Moq"]
    },
    {
        company: "Fort William Henry Corporation",
        position: "Technology Assistant",
        description: "Handing both IT duties (building computers, maintaining infrastructure, assisting end-users) as well as programming duties in an effort to develop a custom application to integrate the POS system with accouting in Microsoft Great Plains. "
             + "Written in C# WPF, with a few other console applications created along the way to automate data exchanges and ensure integrity of third party software.",
        timeframe: "June 2016 - August 2016",
        technologies: ["C#", "WPF", "MSSQL", "IT", "Hardware"]
    }

];

export default class ExperienceSection extends React.Component {
    render(){
        const experiences = experienceList.map((e) => 
            <div class="card shadow p-3 m-4">
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">{e.position}</h3>
                        <div class="subheading mb-3">{e.company}</div>
                        <p>{e.description}</p>
                        <p class="technologies-list">
                            {e.technologies.map(t => <TechnologyBadge name={t} />)}
                        </p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="text-primary">{e.timeframe}</div>
                    </div>
                </div>
            </div>
        );
        return <section class="resume-section" id="experience">       
            <div class="resume-section-content">
                <h2 class="mb-5">Experience</h2>
                {experiences}
            </div>
        </section>;
    }
}