import { describe, testActor } from '@oklinov/public-actors-tools';

describe('Core tests', () => {
    testActor('lukaskrivka/testing-github-integration', 'basic test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft;
        const runResult = await run({ input: {} });
        await expect(runResult).toFinishWith({
            datasetItemCount: { min: 10 },
        });
    });

    testActor('lukaskrivka/testing-github-integration-2', 'Core test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft;
        const runResult = await run({ input: {} });
        await expect(runResult).toFinishWith({
            datasetItemCount: { min: 10 },
        });

        await runResult.withDataset<{ title: string }>(({ items }) => {
            expect(items[0], 'First dataset item').toBeObject();
            // expect(items[0].title, 'First dataset item\' title').toEqual('Examples | Crawlee for JavaScript · Build reliable crawlers. Fast.');
            // expect(items[1].title, 'Second dataset item\' title').toEqual('Crawlee · Build reliable crawlers. Fast.');
        });
    });
});
