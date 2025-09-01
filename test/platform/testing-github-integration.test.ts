import { describe, testActor } from 'apify-test-tools';

describe('testing-github-integration Tests', () => {
    testActor('lukaskrivka/testing-github-integration', 'Basic test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 10, max: 500 },
        });
    });
});
