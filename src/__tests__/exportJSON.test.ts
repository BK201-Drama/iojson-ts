import { exportJSON } from '../index';

test("exportJSON", () => {
    expect(exportJSON({}, "a"));
})