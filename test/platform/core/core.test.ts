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
    });
});
