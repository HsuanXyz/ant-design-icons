import { Alibaba, CiCircleFill } from '@ant-design/icons';
import assert = require('assert');
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReactAntdIcon, { AntdIconProps } from '../src/components/AntdIcon';

ReactAntdIcon.add(Alibaba, CiCircleFill);

function mount(props: AntdIconProps) {
  const component = renderer.create(<ReactAntdIcon {...props} />);
  return component.toJSON();
}

describe('React AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const vm = mount({
      type: 'alibaba',
      style: {
        fontSize: '3rem'
      },
      className: 'my-icon'
    })!;

    assert(vm.type === 'svg');
    assert(vm.props['data-icon'] === 'alibaba');
    assert(vm.props.className === 'my-icon');
    assert(vm.props.style.fontSize === '3rem');
    assert(vm.props.viewBox === `0 0 ${Alibaba.width} ${Alibaba.height}`);
  });

  it('should convert "class" into "className".', () => {
    const vm = mount({
      type: 'ci-circle-fill'
    });

    assert(vm!.children![1].props.className === 'st0');
  });

  it('should allow explicit import.', () => {
    const vm = mount({
      type: CiCircleFill
    });
    assert(vm!.children![1].props.className === 'st0');
  });

  it('should render null, when the type is invalid.', () => {
    const vm = mount({
      type: { invalid: true }
    } as any);

    const vm2 = mount({
      type: 'Later is better than never.'
    });

    assert(vm === null);
    assert(vm2 === null);
  });
});
