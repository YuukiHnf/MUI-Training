import { SimpleCollapse } from "./Transitions/Collapse";
import InitalView from "./TreeViews/InitalView";
import { StyledSlider } from "./styled/StyledInital";

export default function App() {
  return (
    <div>
      <h1>Tree View Tutorial</h1>
      <StyledSlider />
      <InitalView />
      <SimpleCollapse />
    </div>
  );
}
