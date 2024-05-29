function MenuItems(props) {
  return (
    <li
      onClick={props.onPress}
      className={props.active == props.PageName ? "active-page" : null}
    >
      <a href={props.PageLink} title={props.PageName}>
        {props.PageName}
      </a>
    </li>
  );
}

export default MenuItems;
