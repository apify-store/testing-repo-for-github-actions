import { describe, testActor } from '@oklinov/public-actors-tools';

describe('testing-github-integration Tests', () => {
    testActor('lukaskrivka/testing-github-integration', 'Basic test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft;
        const runResult = await run({ input: {} });
        await expect(runResult).toFinishWith({
            datasetItemCount: { min: 10, max: 500 },
        });
    });
});
