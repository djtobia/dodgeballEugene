import type { ContentfulClientApi } from "contentful";
import type { InjectionKey } from "vue";
const contentful = Symbol() as InjectionKey<ContentfulClientApi>;

export default contentful;
