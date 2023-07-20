import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Iowa, Iowa City, Iowa
          </h3>
          <p>Bachelor of Science in Global Health Studies</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coursera, Meta Front-End Professional Certificate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Professional Certificate
          </h4>
          <p>Front-End Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nisaa African Family Services Youth Advocate	
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Des Moines, Iowa | Iowa City, Iowa
          </h4>
          <p>
          Planed and executed 10+ educational events regarding sexual assault, mental health, and 
          domestic violence for African youth in 2 locations in Des Moines, Iowa and Iowa City, Iowa
          Executed and planned a Gala for 100+ attendees and found performers for the event,
          Created social media promotional content for Instagram and Facebook 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lab Technician II - Integrated DNA Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Coralville, Iowa
          </h4>
          <p>
            Operated, maintained, and cleaned 6+ laboratory machines in a manufacturing laboratory.
            Ensured the laboratory is inspection ready and maintained overall lab cleanliness.
            Maintained meticulous records of equipment maintenance, calibration, and troubleshooting
            activities, ensuring compliance with standard operating procedures and regulatory guidelines.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Psychiatric Nursing Assistant - University of Iowa Hospital and Clinics
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Iowa City, Iowa
          </h4>
          <p>
            Assisted nurses with 36+ patients in adult psychiatry, assisted with Pediatric and
            Geriatric Psychiatry and supervised patients in the Emergency Department providing
            emotional support to patients in a vulnerable state.
            Entered 36 patients' data in the online hospital database.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
