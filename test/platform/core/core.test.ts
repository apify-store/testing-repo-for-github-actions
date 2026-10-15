import { describe, testActor } from 'apify-test-tools';

describe('Core tests', () => {
    testActor('test-tools-testing-sandbox/dummy-for-testing-1', 'basic test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 1 },
        });
    });

    testActor('test-tools-testing-sandbox/dummy-for-testing-2', 'Core test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 1 },
        });

        const { items } = await runResult.getDataset<{ title: string }>();
        expect(items[0], 'First dataset item').toBeObject();
    });
});
