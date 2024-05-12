import { PageRouterHighlight } from "@highlight-run/next/server";
import { CONSTANTS } from "../../utils/highlightConstants";
export const withPageRouterHighlight = PageRouterHighlight({
  projectID: CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
});
