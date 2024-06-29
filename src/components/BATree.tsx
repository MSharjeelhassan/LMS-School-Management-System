import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useNavigate } from "react-router-dom";

export default function BATree({ treeStructure }: any) {
  const randomId = () => {
    let id = Math.random().toString().slice(2);
    //string is liye kiya coz string dani hy tree view main r slice is liye kiya coz decimal nai lana chah rahe hm

    return id;
  };

  const navigate = useNavigate();

  const navigateScreen = (route: string) => {
    navigate(`/dashboard/${route}`);
  };

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        {treeStructure && treeStructure.length > 0
          ? treeStructure.map((x: any) => {
              return (
                <>
                  <TreeItem itemId={randomId()} label={x.moduleName}>
                    {x.child.map((y: any) => (
                      <TreeItem onClick={()=>{navigateScreen(y.route)}}
                        itemId={randomId()}
                        label={y.name}
                      />
                    ))}
                  </TreeItem>
                </>
              );
            })
          : null}
      </SimpleTreeView>
    </Box>
  );
}
