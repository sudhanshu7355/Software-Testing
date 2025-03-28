const multiply=require('./index')



// TEST SUITE

// first method to test
describe('multiply test',()=>{
    it('multiply 2 and 5 equal to 10 ', async ()=>{
        expect(multiply(2,5)).toBe(10);
    })

    it('multiply 2 and 5 equal to 10 ', async ()=>{
        expect(multiply(2,5)).not.toBe(5);
    })
} )

// second method to test
test('multiply 2 and 5 equal to 10',async () => {
    expect(multiply(2,5)).toBe(10);
});



// npx stands for - node package executables 
// test suite means the count of test files we have created 
// and test means the no of test cases we have written in our file 


//object testing
test('object equality', async()=>{
    const data={'alpha':'A'};
    data['beta']='B';
    expect(data).toEqual({alpha:'A', beta:'B'})
});



//testing for null values
test('null values',async()=>{
    const value=null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();
    expect(value).toBeFalsy();
});

// testing zero values
test('Zero values',async()=>{
    const value=0;
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).not.toBeTruthy();
    expect(value).toBeFalsy();
});




// number comparison
test('number comparison',async()=>{
    const value=3+3;
    expect(value).toBeGreaterThan(5);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(6);
    expect(value).toBe(6); // exact equality
    expect(value).toEqual(6); // deep equality



    //float comparison
    const floatvalue=0.1+0.2;
    expect(floatvalue).toBeCloseTo(0.3, 5);


    //string comparison
    expect('developer').not.toMatch(/I/); //here /I/ means regex i.e letters should be lowercase
    // in developer if we write capital I then it will fail 
    expect('developer').toMatch(/dev/);
});



// test array matchers
 test.only('array matchers', async=()=>{ //only test the particular test where we have write it
    const todoList=[
        'buy groceries',
        'clean room',
        'subscribe',
        'bathing',   
    ];
    expect(todoList).toContain('subscribe');




    // exception matchers
    function openInvalidFile(){
        throw new Error('file not found');
    }
    expect(()=>openInvalidFile()).toThrow();
    expect(()=>openInvalidFile()).toThrow(Error);
    expect(()=>openInvalidFile()).toThrow('file not found');
    expect(()=>openInvalidFile()).toThrow(/not found/);
 });