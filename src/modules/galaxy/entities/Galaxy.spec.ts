import { Galaxy } from "./Galaxy";

describe("Company Unit test validation", () => {
  it("should not be able to create a galaxy without a name", () => {
    expect(() => {
      new Galaxy({
        color: "red",
        size: 10,
        planets: [],
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a galaxy with number on description", () => {
    expect(() => {
      new Galaxy({
        name: "New Company test",
        description: 999,
        color: "red",
        size: 10,
        planets: [],
      } as any);
    }).toThrowError();
  });
});
