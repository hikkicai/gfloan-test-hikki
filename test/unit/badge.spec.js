import Badge from '../../src/components/badge/index.vue'
import { mount } from '@vue/test-utils'

describe('Badge', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(Badge, {
      propsData: {
        text: 888
      }
    })
  })

  it('BadgeT1 basic', () => {
    expect(wrapper.name()).toEqual('badge')
  })

  it('BadgeT2 verify class name', () => {
    expect(wrapper.classes('vux-badge')).toBe(true)
  })

  it('BadgeT3 verify it has 1 span', () => {
    expect(wrapper.findAll('span').length).toEqual(1)
  })

  it('BadgeT5 verify props', () => {
    expect(wrapper.vm.text).toBe(888)
  })
})