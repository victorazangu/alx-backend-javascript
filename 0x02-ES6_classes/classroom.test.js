import ClassRoom from "./0-classroom";

const room = new ClassRoom(10);

test('maximun students', () => {
  expect(room._maxStudentsSize).toBe(10);
});