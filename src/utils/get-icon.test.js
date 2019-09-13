// @flow strict
import getIcon from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('twitter')).toBe(ICONS.TWITTER);
  expect(getIcon('github')).toBe(ICONS.GITHUB);
  expect(getIcon('telegram')).toEqual(ICONS.TELEGRAM);
  expect(getIcon('email')).toEqual(ICONS.EMAIL);
  expect(getIcon('linkedin')).toEqual(ICONS.LINKEDIN);
  expect(getIcon('facebook')).toEqual(ICONS.FACEBOOK);
  expect(getIcon('angelist')).toEqual(ICONS.ANGELIST);
});
