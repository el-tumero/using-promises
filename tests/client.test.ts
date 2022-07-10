import {getAllNumbers} from "../src/client"

test('adds 1 to every number in given array ([5, 1, 3])', async () => {
    const data = await getAllNumbers([5, 1, 3])
    expect(data).toEqual([6, 2, 4])
})