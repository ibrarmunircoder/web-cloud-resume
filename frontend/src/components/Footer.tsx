export const Footer = () => {
  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/IbrarMunir4'
              >
                <i className='fa fa-twitter' />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/ibrar-munir-53197a16b/'
              >
                <i className='fa fa-linkedin' />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/ibrarmunircoder'
              >
                <i className='fa fa-github' />
              </a>
            </li>
          </ul>
          <ul className='copyright'>
            <a href='https://www.styleshout.com/free-templates/ceevee/'>
              Template by CeeVee
            </a>
          </ul>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open' />
          </a>
        </div>
      </div>
    </footer>
  );
};
