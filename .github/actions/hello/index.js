const core = require('@actions/core');
const github = require('@actions/github');

try {
  //   throw new Error('Some error message');

  core.debug('Debug message');
  core.warning('Warning message');
  core.error('Error message');

  const name = core.getInput('who-to-greet');
  core.setSecret(name);
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput('time', time.toTimeString());

  core.startGroup('Logging GitHub object');
  console.log(JSON.stringify(github, null, '\t'));
  core.endGroup();

  core.exportVariable('MyKey', 'MyValue');
} catch (error) {
  core.setFailed(error.message);
}
