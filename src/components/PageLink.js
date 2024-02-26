const PageLink = ({ itemClass, link }) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;
