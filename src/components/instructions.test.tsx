import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { create } from 'react-test-renderer'

import { Instructions } from './instructions'

describe('Instruction component render', () => {
  test('it render list', () => {
    const instructions = create(<Instructions />)
    const instance = instructions.root
    const ul = instance.findAllByType('ul')
    expect(ul.length).toBe(1)
    const listElements = instance.findAllByType('li')
    expect(listElements.length).toBe(2)
  })
  test('it render paragraphs', () => {
    const instructions = create(<Instructions />)
    const instance = instructions.root
    const paragraphs = instance.findAllByType('p')
    expect(paragraphs.length).toBe(2)
  })
})
