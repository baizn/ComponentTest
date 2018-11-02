import React from 'react'
import PrimaryContainer from '../primaryContainer'
import { shallow } from 'enzyme'

describe('primaryContainer容器组件测试', () => {
    it('默认', () => {
        const container = shallow(<PrimaryContainer />)
        console.log('*****', container.debug())
        expect(container).toBe(true)
    })
})
