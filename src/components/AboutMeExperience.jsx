function CourseTitle(props) {
  if (props.course) {
    return <h2 className="course-title">{props.course}</h2>;
  }
}

function CourseDate(props) {
  if (!props.end) {
    return <h3 className="org-dates">{props.start}</h3>;
  } else {
    return (
      <h3 className="org-dates">
        {props.end}
        <br />
        {props.start}
      </h3>
    );
  }
}

function AboutMeExperience(props) {
  return (
    <div className="table-item grid-x">
      <div className="cell small-12 large-3">
        <h2 className="org-title">{props.title}</h2>
        <CourseDate end={props.end} start={props.start} />
      </div>
      <div className="cell small-12 large-9">
        <CourseTitle course={props.course} />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default AboutMeExperience;
