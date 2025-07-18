import { describe, testActor } from '@oklinov/public-actors-tools';

describe('testing-github-integration Tests', () => {
    testActor('lukaskrivka/testing-github-integration', 'Basic test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft;
        const runResult = await run({ input: {} });
        Expect(runResult).toHaveStatus('SUCCEEDED');

        await runResult.withLog((log) => {
            expect(log).not.toContain('ReferenceError');
            expect(log).not.toContain('TypeError');
            expect(log).not.toContain('Cannot save before loading old data');
        });

        await runResult.withDataset(({ items }) => {
            expect(items.length, 'Dataset cleanItemCount').toBeGreaterThan(10);
        });
    });
});
