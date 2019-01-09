import CheckIcon from '../../src/components/check-icon/index.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('CheckIcon', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(CheckIcon)
  })

  it('CheckIconT1 basic', () => {
    expect(wrapper.name()).toEqual('check-icon')
  })

  it('CheckIconT2 verify class name', () => {
    expect(wrapper.classes('vux-check-icon')).toBe(true)
  })

  it('CheckIconT3 verify it has 3 icons', () => {
    expect(wrapper.findAll('i').length).toEqual(3)
  })

  it('CheckIconT4 verify success icons are hidden', () => {
    expect(wrapper.findAll('i').at(0).isVisible()).toBe(false)
    expect(wrapper.findAll('i').at(1).isVisible()).toBe(false)
    expect(wrapper.findAll('i').at(2).isVisible()).toBe(true)
  })

  it('CheckIconT5 verify default props', () => {
    expect(wrapper.props().value).toBe(false)
  })

  it('CheckIconT6 simulate method is called by click', () => {
    const clickMethodStub = sinon.stub()
    wrapper.setMethods({ updateValue: clickMethodStub })
    wrapper.trigger('click')
    expect(clickMethodStub.called).toBe(true)
  })

  it('CheckIconT7 verify props update', () => {
    wrapper.setProps({ value: true })
    expect(wrapper.vm.value).toBe(true)
  })
})