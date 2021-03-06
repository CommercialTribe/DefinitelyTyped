import * as React from "react";
import Select from "react-select";
import VirtualizedSelect from "react-virtualized-select";

<VirtualizedSelect
  async={true}
  maxHeight={0}
  optionHeight={0}
  optionRenderer={() => <div/>}
  selectComponent={Select}
  options={[]}
/>;
