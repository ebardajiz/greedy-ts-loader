import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow';

import Dummy from "./Dummy"

test("Simple addition test", () => {
  expect(1 + 2).toBe(3);
})

test("React test", () => {
  const renderer = new ReactShallowRenderer();
  const div = <div>div</div>
  renderer.render(<Dummy />)
  expect(renderer.getRenderOutput().type).toBe('div');
})
