const problems = require('../src')

for(let problem of problems){

  test('Resdult should match computed algorithm', () => {
    expect(problem.algorithm()).toBe(problem.result)
  })

}