## Testing visibility
Little showcase of how Cypress will make actionability checks before it clicks a button.

A button will appear with a 3 secont delay, but can be found in DOM since the beginning. Cypress will make sure it is visible before makin a click action.

How to use this repo:
1. do `npm install`
2. start app by `npm start`
3. start cypress with `npx cypress open`