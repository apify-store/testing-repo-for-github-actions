import { describe, testActor } from '@oklinov/public-actors-tools';

describe('testing-github-integration Tests', () => {
    testActor('lukaskrivka/testing-github-integration', 'Basic test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft;
        const runResult = await run({ input: {} });
        expect(runResult).toFinishWith({
            datasetItemCount: { min: 10, max: 500 },
        });

        await runResult.withLog((log) => {
            expect(log).not.toContain('ReferenceError');
            expect(log).not.toContain('TypeError');
            expect(log).not.toContain('Cannot save before loading old data');
        });
    });
});
