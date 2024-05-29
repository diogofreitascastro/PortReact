function ServiceCard(props) {
  return (
    <div className="service-card">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default ServiceCard;