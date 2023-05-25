import hello from "../utils/hello.js";

it("Should say Sean", ()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("hello");
})


