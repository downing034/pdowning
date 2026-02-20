import { describe, it, expect } from 'vitest';
import {
  ACTIVE_PROJECTS,
  EMPLOYMENT_HISTORY,
  JOBS,
  CODING_ABILITIES,
  DESIGN_ABILITIES,
  TESTING_ABILITIES,
  TOOLS_ABILITIES,
  LANGUAGE_ABILITIES,
  TECHNICAL_SKILLS,
  CODE_SAMPLES,
} from 'constants/index';

describe('Constants - Data Integrity', () => {
  describe('ACTIVE_PROJECTS', () => {
    it('is a non-empty array', () => {
      expect(ACTIVE_PROJECTS.length).toBeGreaterThan(0);
    });

    it('each project has required fields', () => {
      ACTIVE_PROJECTS.forEach((project) => {
        expect(project.title).toBeTruthy();
        expect(project.description).toBeTruthy();
        expect(project.language).toBeTruthy();
        expect(project.framework).toBeTruthy();
      });
    });

    it('each project with a githubUrl has a valid URL', () => {
      ACTIVE_PROJECTS.forEach((project) => {
        if (project.githubUrl) {
          expect(project.githubUrl).toMatch(/^https?:\/\//);
        }
      });
    });

    it('each project with a siteUrl has a valid URL', () => {
      ACTIVE_PROJECTS.forEach((project) => {
        if (project.siteUrl) {
          expect(project.siteUrl).toMatch(/^https?:\/\//);
        }
      });
    });
  });

  describe('EMPLOYMENT_HISTORY', () => {
    it('is a non-empty array', () => {
      expect(EMPLOYMENT_HISTORY.length).toBeGreaterThan(0);
    });

    it('each entry has required fields', () => {
      EMPLOYMENT_HISTORY.forEach((entry) => {
        expect(entry.companyName).toBeTruthy();
        expect(entry.city).toBeTruthy();
        expect(entry.state).toBeTruthy();
        expect(entry.jobTitle).toBeTruthy();
        expect(entry.startYear).toBeTruthy();
      });
    });
  });

  describe('JOBS', () => {
    it('is a non-empty array', () => {
      expect(JOBS.length).toBeGreaterThan(0);
    });

    it('each job has required fields', () => {
      JOBS.forEach((job) => {
        expect(job.title).toBeTruthy();
        expect(job.companyName).toBeTruthy();
        expect(job.location).toBeTruthy();
        expect(job.blurb).toBeTruthy();
        expect(job.description.length).toBeGreaterThan(0);
        expect(job.experienceList.length).toBeGreaterThan(0);
      });
    });

    it('each job has technology information', () => {
      JOBS.forEach((job) => {
        expect(job.technologiesUsed).toBeTruthy();
        expect(job.technologiesUsed.languages).toBeTruthy();
        expect(job.technologiesUsed.frameWorks).toBeTruthy();
      });
    });
  });

  describe('Ability arrays', () => {
    const abilitySets = [
      { name: 'CODING_ABILITIES', data: CODING_ABILITIES },
      { name: 'DESIGN_ABILITIES', data: DESIGN_ABILITIES },
      { name: 'TESTING_ABILITIES', data: TESTING_ABILITIES },
      { name: 'TOOLS_ABILITIES', data: TOOLS_ABILITIES },
      { name: 'LANGUAGE_ABILITIES', data: LANGUAGE_ABILITIES },
    ];

    abilitySets.forEach(({ name, data }) => {
      describe(name, () => {
        it('is a non-empty array', () => {
          expect(data.length).toBeGreaterThan(0);
        });

        it('each ability has a name and valid skill level (1-5)', () => {
          data.forEach((ability) => {
            expect(ability.name).toBeTruthy();
            expect(ability.skillLevel).toBeGreaterThanOrEqual(1);
            expect(ability.skillLevel).toBeLessThanOrEqual(5);
          });
        });
      });
    });
  });

  describe('TECHNICAL_SKILLS', () => {
    it('is a non-empty array of strings', () => {
      expect(TECHNICAL_SKILLS.length).toBeGreaterThan(0);
      TECHNICAL_SKILLS.forEach((skill) => {
        expect(typeof skill).toBe('string');
        expect(skill.length).toBeGreaterThan(0);
      });
    });
  });

  describe('CODE_SAMPLES', () => {
    it('is an array', () => {
      expect(Array.isArray(CODE_SAMPLES)).toBe(true);
    });

    it('each code sample has required fields', () => {
      CODE_SAMPLES.forEach((sample) => {
        expect(sample.appName).toBeTruthy();
        expect(sample.appDescription).toBeTruthy();
        expect(sample.githubLink).toBeTruthy();
        expect(sample.githubLink).toMatch(/^https?:\/\//);
      });
    });
  });
});
