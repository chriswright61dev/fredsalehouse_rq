import "./EmailLink.css";
function EmailLink(props) {
  const link = "mailto:" + props.link;
  const linkText = props.linkText;
  return (
    <div className="email_link">
      <a href={link}>{linkText}</a>
    </div>
  );
}

export default EmailLink;
