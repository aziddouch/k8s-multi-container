import React from 'react';

export default function AnotherPage() {
  return (
    <div>
      <h1>random page</h1>
      <p>
        Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM
        mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can
        run them and immediately forget about them. Let’s compare how classes and Hooks let us express such side
        effects.
      </p>
    </div>
  );
}
