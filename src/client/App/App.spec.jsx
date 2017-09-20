
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow';

import App from "./App.tsx"

test("Typescript test", () => {
  const renderer = new ReactShallowRenderer();
  const div = <div>div</div>
  renderer.render(<App />)
  expect(renderer.getRenderOutput().type).toBe('div');
})
