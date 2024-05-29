function Footer() {
  return (
    <footer>
      <div className="inner-footer">
        <div className="signature-wrap">
          <span id="signature">Handcrafted by Diogo Freitas Castro</span>
        </div>
        <div className="other-links">
          <a
            href="https://www.instagram.com/diogofreitascastro/"
            title="instagram"
            target="_blank"
          >
            <img src="images/instagram-logo.svg" />
          </a>
          <a
            href="https://github.com/diogofreitascastro"
            title="github"
            target="_blank"
          >
            <img src="images/github-logo.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
