import { describe, testActor } from 'apify-test-tools';

describe('testing-github-integration Tests', () => {
    testActor('test-tools-testing-sandbox/dummy-for-testing-1', 'Basic test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 1, max: 500 },
        });
    });
});
