import { describe, testActor } from '@oklinov/public-actors-tools/lib/lib'

describe('testing-github-integration tests', () => {
    testActor('lukaskrivka/testing-github-integration-2', 'basic test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft
        const runResult = await run({ input: {} })
        expect(runResult).toHaveStatus('SUCCEEDED')
    })

    testActor('lukaskrivka/testing-github-integration-2', 'another basic test', async ({ expect: Expect, run }) => {
        const expect = Expect.soft
        const runResult = await run({ input: {} })
        expect(runResult).toHaveStatus('SUCCEEDED')
    })
})
