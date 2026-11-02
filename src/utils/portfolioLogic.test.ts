import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createMailtoLink,
  createTelLink,
  filterProjects,
  getSkillCount,
  matchesQuery
} from './portfolioLogic';
import { PROJECTS_DATA, SKILLS_DATA } from '../data/portfolioData';

test('createMailtoLink properly encodes email, subject and body', () => {
  const link = createMailtoLink('moogollaramu@gmail.com', 'Opportunity Inquiry');
  assert.ok(link.startsWith('mailto:moogollaramu@gmail.com?'));
  assert.ok(link.includes('subject=Opportunity%20Inquiry'));
  assert.ok(link.includes('body=Hi%20Ramu'));
});

test('createTelLink strips spaces and keeps international + sign', () => {
  const tel = createTelLink('+91 95505 82361');
  assert.equal(tel, 'tel:+919550582361');
});

test('matchesQuery performs case-insensitive substring search', () => {
  assert.equal(matchesQuery('Python Developer', 'python'), true);
  assert.equal(matchesQuery('Python Developer', 'DEV'), true);
  assert.equal(matchesQuery('Python Developer', 'Java'), false);
  assert.equal(matchesQuery('Any string', ''), true);
});

test('filterProjects finds projects by technology, category or title', () => {
  const cnnProjects = filterProjects(PROJECTS_DATA, 'CNN');
  assert.equal(cnnProjects.length, 1);
  assert.equal(cnnProjects[0].id, 'crop-disease-detection');

  const sensorProjects = filterProjects(PROJECTS_DATA, 'Sensor');
  assert.equal(sensorProjects.length, 1);
  assert.equal(sensorProjects[0].id, 'smart-dustbin');

  const emptyFilter = filterProjects(PROJECTS_DATA, '');
  assert.equal(emptyFilter.length, 2);
});

test('getSkillCount returns total technical skills across all groups', () => {
  const total = getSkillCount(SKILLS_DATA);
  assert.ok(total > 10, 'Expected more than 10 skills defined in profile');
});
