import { checkForName } from '../src/client/js/nameChecker'

test('check for input field in not null', () => {
    const inputField = checkForName('hello')
    expect(inputField).not.toBeNull();
  });