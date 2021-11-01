const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail tests",()=>{

  it("should return [Lighthouse, Labs]", ()=>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })

  it("should return empty array",()=>{
    assert.deepEqual(tail(["Hello"]), [])
  })

  it("should return undefined",()=>{
    assert.deepEqual(tail(["Hello"]), [])
  })
})