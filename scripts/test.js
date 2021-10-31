import { execSync } from 'child_process'

function runAllTests() {
  execSync('node --experimental-vm-modules  node_modules/jest/bin/jest.js')
  process.exit(0)
}

runAllTests()
