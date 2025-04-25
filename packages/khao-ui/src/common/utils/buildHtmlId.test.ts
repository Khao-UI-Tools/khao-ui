import { buildHtmlId } from "./buildHtmlId";

describe("buildHtmlId", () => {
  it("should build no id for empty string", () => {
    const source = "";

    const id = buildHtmlId(source);

    expect(id).toEqual("");
  });

  it("should build a valid id from string with whitespace", () => {
    const source = "Hello World";

    const id = buildHtmlId(source);

    expect(id).toEqual("hello-world");
  });

  it("should build a valid id from string in camcelcase", () => {
    const source = "fooBar";

    const id = buildHtmlId(source);

    expect(id).toEqual("foo-bar");
  });

  it("should build a valid id from string with underscores", () => {
    const source = "some-text-here";

    const id = buildHtmlId(source);

    expect(id).toEqual("some-text-here");
  });

  it("should build a valid id without special characters", () => {
    const source = "This is so sp@cial!";

    const id = buildHtmlId(source);

    expect(id).toEqual("this-is-so-spcial");
  });

  it("should build a valid id and keep numbers", () => {
    const source = "This is item number 3553 of 10000";

    const id = buildHtmlId(source);

    expect(id).toEqual("this-is-item-number-3553-of-10000");
  });
});
