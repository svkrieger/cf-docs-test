import type { ReactNode } from 'react';
import React from 'react';
import PCFOverviewModelPartial from '@site/static/partials/test.mdx';

export function PCFOverviewModel(): ReactNode {
  return <PCFOverviewModelPartial />;
}

import SomePartialPartial from '@site/overrides/some-partial.md';

export function SomePartial(): ReactNode {
  return <SomePartialPartial />;
}

