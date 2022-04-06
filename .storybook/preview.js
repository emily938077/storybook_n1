import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // 只有on. 的方法可以被呼叫  (如果html觸動的方法不是on..但內層中有on..還是會有反應)
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    values: [
      { name: 'sakura', value: '#eeaca3' },
      { name: 'sun', value: '#ffdeac' },
    ],
  },
}
