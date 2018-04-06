const problems = require('../src')

for(let problem of problems){

  test('Result should match computed algorithm', () => {
    expect(problem.algorithm()).toBe(problem.result)
  })

}