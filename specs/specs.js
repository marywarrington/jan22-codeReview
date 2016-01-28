describe('pingPong', function() {
  it("will count up to the user input number, and replace multiples of 3 with 'ping', multiples of 5 with 'pong', and multiples of 15 with 'pingpong'", function() {
    expect(pingPong(16)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong",16]);
  });
});
