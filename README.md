Testing repo to test GitHub Actions workflows. 

Make a change to a branch, then make a PR. Keep updating the PR to see if it behaves correctly. Then merge and see if latest versions build well. Slack notif goes to #notif-testing-repo-for-github-actions.

Actors, all in the isolated `test-tools-testing-sandbox` org. Their token is the
`E2E_TEST_APIFY_TOKEN_DBYPODOIHUZABNQTR` secret, which can reach nothing else:

- [test-tools-testing-sandbox/dummy-for-testing-1](https://console.apify.com/actors/IOFZf3cgxFQTdWcw6/source) (`actors/dummy-for-testing-1`)
- [test-tools-testing-sandbox/dummy-for-testing-2](https://console.apify.com/actors/MAg1gzOr1dbj0Ocxn/source) (`actors/dummy-for-testing-2`)
- test-tools-testing-sandbox/dummy-for-testing-3 (`standalone-actors/dummy-for-testing-3`)

Each Actor's default version is built from this repo, e.g.
`https://github.com/apify-store/testing-repo-for-github-actions#master:actors/dummy-for-testing-1`.
The `build` and `release` commands refuse to run otherwise.

## E2E fixture branches

The `e2e/base` and `e2e/feature` branches are fixtures for the end-to-end tests in
[apify-test-tools](https://github.com/apify/apify-test-tools/tree/master/test/e2e). Against `e2e/base`,
`e2e/feature` changes only `dummy-for-testing-1`. Never rebase, force-push or delete them, or the tests break.
