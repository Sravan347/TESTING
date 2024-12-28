const search = require("./script");
const mockDB = ["google.com", "disney.com", "pixel.com", "gogo.com"];

describe('search functionality',()=>{
  it("this is a test", () => {
    // search('test',mockDB)
    expect("hello").toBe("hello");
  });
  
  it("search fuctionality", () => {
    expect(search("go", mockDB)).toEqual(["google.com", "gogo.com"]);
  });
  
  it("undefined and Null inputs",()=>{
      expect(search(undefined,mockDB)).toEqual([]);
      expect(search(null,mockDB)).toEqual([])
  })
  
  it('does not return more than matches',()=>{
      expect(search('.com',mockDB).length).toEqual(3)
  })

})
