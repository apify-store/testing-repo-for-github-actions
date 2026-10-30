import { describe, testActor } from 'apify-test-tools';

describe('Core tests', () => {
    testActor('test-tools-testing-sandbox/dummy-for-testing-1', 'basic test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            // Fails on purpose, to see how failures are reported: the Actor never outputs this many items
            datasetItemCount: { min: 100000 },
        });
    });

    testActor('test-tools-testing-sandbox/dummy-for-testing-2', 'Core test', async ({ expect, run }) => {
        const runResult = await run({ input: {} });
        await expect.hard(runResult).toFinishWith({
            datasetItemCount: { min: 1 },
        });

        const { items } = await runResult.getDataset<{ title: string }>();
        expect(items[0], 'First dataset item').toBeObject();
        // Fails on purpose, to see how failures are reported: no item has this title
        expect(items[0]?.title, 'Title of the first dataset item').toBe('A title this Actor never outputs');
    });
});
