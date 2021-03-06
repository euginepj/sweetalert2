import { Swal } from '../helpers.js'

QUnit.test('getProgressSteps() method', (assert) => {
  Swal({ progressSteps: ['1', '2', '3'] })
  const progressSteps = Swal.getProgressSteps()
  assert.deepEqual(progressSteps, ['1', '2', '3'])
})
