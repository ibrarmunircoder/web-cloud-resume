/* eslint-disable jsx-a11y/anchor-is-valid */
import gitBashSrc from 'components/git-bash.svg';
export const Resume = () => {
  return (
    <section id='resume'>
      <div className='row education'>
        <div className='three columns header-col'>
          <h1>
            <span>Certifications</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          <div className='row item'>
            <div className='twelve columns'>
              <h3>Azure Administrator - AZ-104</h3>
              <p className='info'>
                <em className='date'>August 2023</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row work'>
        <div className='three columns header-col'>
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          <div className='row item'>
            <div className='twelve columns'>
              <h3>Ocloud Solutions</h3>
              <p className='info'>
                Software Engineer <span>•</span>
                <em className='date'>January 2021 - March 2023</em>
              </p>
              <p></p>
              <p />
            </div>
          </div>
          <div className='row item'>
            <div className='twelve columns'>
              <h3>OptimaGeeks</h3>
              <p className='info'>
                Software Engineer <span>•</span>
                <em className='date'>March 2023 - Present</em>
              </p>
              <p></p>
              <p />
            </div>
          </div>
        </div>
      </div>
      <div className='row work'>
        <div className='three columns header-col'>
          <h1>
            <span>Technologies & Tools</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          <div className='row item'>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                flexWrap: 'wrap',
              }}
            >
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg'
                  alt='HTML5'
                  width={90}
                  height={80}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg'
                  alt='CSS3'
                  width={80}
                  height={80}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg'
                  alt='Javascript'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg'
                  alt='Nodejs'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg'
                  alt='React'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg'
                  alt='TailwindCSS'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg'
                  alt='Nestjs'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg'
                  alt='MongoDB'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg'
                  alt='MongoDB'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg'
                  alt='AWS'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg'
                  alt='Azure'
                  width={90}
                  height={90}
                />
              </a>
              <a href='#' target='_blank'>
                <img src={gitBashSrc} alt='Bash' width={100} height={48} />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/linux/linux-ar21.svg'
                  alt='Linux'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg'
                  alt='git'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.jpg'
                  alt='github'
                  width={70}
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg'
                  alt='gitlab'
                  height={51}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg'
                  alt='vs-code'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg'
                  alt='jenkins'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg'
                  alt='kubernetes'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/docker/docker-ar21.svg'
                  alt='docker'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/terraformio/terraformio-ar21.svg'
                  alt='Terraform'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/ansible/ansible-ar21.png'
                  alt='Ansible'
                  width={90}
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-ar21.svg'
                  alt='Jira'
                  height={48}
                />
              </a>
              <a href='#' target='_blank'>
                <img
                  src='https://www.vectorlogo.zone/logos/slack/slack-ar21.svg'
                  alt='Slack'
                  height={48}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
