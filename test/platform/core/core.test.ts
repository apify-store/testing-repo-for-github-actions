import { describe, testActor } from '@oklinov/public-actors-tools';

describe('Core tests', () => {
    testActor('lukaskrivka/testing-github-integration', 'basic test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 10 },
        });
    });

    testActor('lukaskrivka/testing-github-integration-2', 'Core test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 10 },
        });

        const { items } = await runResult.getDataset<{ title: string }>();
        expect(items[0], 'First dataset item').toBeObject();
    });
});
