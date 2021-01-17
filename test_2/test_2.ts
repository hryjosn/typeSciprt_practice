"use strict";
interface Foo {
    bar: number,
    bus: String,
}
const foo = {} as Foo;
foo.bar = 8;
foo.bus = "bus";
console.log("foo", foo)