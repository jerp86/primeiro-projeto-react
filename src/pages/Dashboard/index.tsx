import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54115624?s=460&u=6dd0a7b2e45858cdb7b732f16721d4bca13cfe66&v=4"
            alt="Jerp86"
          />
          <div>
            <strong>team-organizer-backend</strong>
            <p>
              Team organizer for hackathons by roles and experiences.
              https://teammaker.netlify.com
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54115624?s=460&u=6dd0a7b2e45858cdb7b732f16721d4bca13cfe66&v=4"
            alt="Jerp86"
          />
          <div>
            <strong>team-organizer-backend</strong>
            <p>
              Team organizer for hackathons by roles and experiences.
              https://teammaker.netlify.com
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54115624?s=460&u=6dd0a7b2e45858cdb7b732f16721d4bca13cfe66&v=4"
            alt="Jerp86"
          />
          <div>
            <strong>team-organizer-backend</strong>
            <p>
              Team organizer for hackathons by roles and experiences.
              https://teammaker.netlify.com
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54115624?s=460&u=6dd0a7b2e45858cdb7b732f16721d4bca13cfe66&v=4"
            alt="Jerp86"
          />
          <div>
            <strong>team-organizer-backend</strong>
            <p>
              Team organizer for hackathons by roles and experiences.
              https://teammaker.netlify.com
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
