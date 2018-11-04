const add = (a,b) => a+b;

test(`Test add Function`,() => {
    const result = add(10,2);
    expect(result).toBe(12);
});
test(`test out string for my name`, () => {
    const str = 'nomu';
    expect(str).toBe('nomu');
});