import { TreeItem, TreeView } from "@mui/lab";
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon
} from "@mui/icons-material/";

const InitalView = () => {
  return (
    <>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {/* 木ノードの一つ */}
        <TreeItem nodeId="1" label="Application">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        {/* 木ノードの一つ */}
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="6" label="OSS" />
          <TreeItem nodeId="hogehoge" label="Calendar">
            <TreeItem nodeId="3" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="hogehoge" label="Calendar">
            <TreeItem nodeId="6" label="Calendar" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </>
  );
};

export default InitalView;
