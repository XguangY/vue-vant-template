import { validUsername, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin')).toBe(true)
    expect(validUsername('editor')).toBe(true)
    expect(validUsername('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(isExternal('/home')).toBe(false)
    expect(isExternal('./home')).toBe(false)
    expect(isExternal('home')).toBe(false)
  })
})
