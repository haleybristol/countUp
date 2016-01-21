describe('countBy', function() {
  it("will count up to a number", function() {
    expect(countBy(50, 1)).to.equal(50);
  });

  it("will count up by a multiple of given number", function() {
    expect(countBy(50, 7)).to.equal(49);
  });

});
