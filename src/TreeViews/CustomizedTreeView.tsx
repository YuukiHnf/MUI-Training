import { TreeView } from "@mui/lab";
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon
} from "@mui/icons-material/";
import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import { styled } from "@mui/material";
import { TransitionProps } from "react-transition-group/Transition";

const TransitionComponent = (props: TransitionProps) => {
  const style = useSpring;
};

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))`
  &.${treeItemClasses.iconContainer}{
    & .close:{
      opacity: 0.3,
    },
  }
`;

const CustomizedTreeView = () => {
  return (
    <>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      ></TreeView>
    </>
  );
};
