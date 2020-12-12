import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import LevelCounter from '../LevelCounter';

import { userSkills } from '../../data/site-data';

import { Container, SkillsList, Skill } from './styles';

const ResumeSkills: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <h3>{intl.formatMessage({ id: `components.resumeSkills.title` })}</h3>
      <SkillsList>
        {userSkills.map(skill => (
          <Skill>
            <h4>{skill.label}</h4>
            <LevelCounter level={skill.level} />
          </Skill>
        ))}
      </SkillsList>
    </Container>
  );
};

export default ResumeSkills;
