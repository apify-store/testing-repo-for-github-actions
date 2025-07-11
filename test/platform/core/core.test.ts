import { describe, testActor } from '@oklinov/public-actors-tools/lib/lib'

describe('Core tests', () => {
    testActor('lukaskrivka/testing-github-integration', 'basic test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft
        const runResult = await run({ input: {} })
        Expect(runResult).toHaveStatus('SUCCEEDED')

        await runResult.withLog((log) => {
            expect(log).not.toContain('ReferenceError');
            expect(log).not.toContain('TypeError');
            expect(log).not.toContain('Cannot save before loading old data');
        });

        await runResult.withDataset(({ items }) => {
            expect(items.length, 'Dataset cleanItemCount').toBeGreaterThan(100);
        });
    });

    testActor('lukaskrivka/testing-github-integration-2', 'Core test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft
        const runResult = await run({ input: {} })
        Expect(runResult).toHaveStatus('SUCCEEDED')

        await runResult.withLog((log) => {
            expect(log).not.toContain('ReferenceError');
            expect(log).not.toContain('TypeError');
            expect(log).not.toContain('Cannot save before loading old data');
        });

        await runResult.withDataset<{ title: string }>(({ items }) => {
            expect(items.length, 'Dataset cleanItemCount').toBeGreaterThan(150);

            expect(items[0], 'First dataset item').toBeObject();
            expect(items[0].title, 'First dataset item\' title').toEqual('Examples | Crawlee for JavaScript · Build reliable crawlers. Fast.');
            expect(items[1].title, 'Second dataset item\' title').toEqual('Crawlee · Build reliable crawlers. Fast.');
        });
    });
});
