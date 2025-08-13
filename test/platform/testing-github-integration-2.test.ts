import { describe, testActor } from '@oklinov/public-actors-tools';

describe('testing-github-integration Tests', () => {
    testActor('lukaskrivka/testing-github-integration-2', 'Basic test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 10, max: 500 },
        });

        const { items } = await runResult.getDataset<{ title: string }>();
        expect(items[0], 'First dataset item').toBeObject();
    });
});
