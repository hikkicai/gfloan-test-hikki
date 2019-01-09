import CellBox from '../../src/components/cell-box/index.vue'
import { mount } from '@vue/test-utils'
// import sinon from 'sinon'

describe('CellBox', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(CellBox, {
      propsData: {
        isLink: true
      }
    })
  })

  it('CellBoxT1 basic', () => {
    expect(wrapper.name()).toEqual('cell-box')
  })

  it('CellBoxT2 verify class name', () => {
    expect(wrapper.classes()).toContain('vux-tap-active')
    expect(wrapper.classes()).toContain('weui-cell_access')
  })

  it('CellBoxT3 verify it has 1 div', () => {
    expect(wrapper.findAll('div').length).toEqual(1)
  })

  it('CellBoxT4 verify props', () => {
    expect(wrapper.vm.isLink).toBe(true)
  })
})