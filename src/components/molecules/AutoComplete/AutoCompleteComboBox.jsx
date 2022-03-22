import React from "react";
import {
  VariableSizeList as List,
  ListChildComponentProps,
} from "react-window";

// material core
import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteRenderOptionState,
} from "@material-ui/lab/Autocomplete";
import ListSubheader from "@mui/material/ListSubheader";

const LISTBOX_PADDING = 8; // px

const renderRow = (props) => {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING,
    },
  });
};

const OuterElementContext = React.createContext({});

const OuterElementType =
  React.forwardRef <
  HTMLDivElement >
  ((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  });

function useResetCache(data) {
  const ref = React.useRef < List > null;
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

const ListboxComponent =
  React.forwardRef <
  HTMLDivElement >
  function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const itemSize = 48;
    const itemCount = itemData.length;

    const getChildSize = (child) => {
      if (React.isValidElement(child) && child.type === ListSubheader) {
        return 48;
      }
      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <List
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width='100%'
            innerElementType='div'
            ref={gridRef}
            outerElementType={OuterElementType}
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemData.length}
          >
            {renderRow}
          </List>
        </OuterElementContext.Provider>
      </div>
    );
  };

const AutoCompleteComboBox = ({
  id,
  label,
  data,
  value = null,
  placeholder = "",
  error = false,
  onChangeValue,
  getOptionLabel,
  renderOption,
  getOptionSelected,
}) => {
  return (
    <Autocomplete
      id={id}
      options={data}
      value={value}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      getOptionSelected={getOptionSelected}
      ListboxComponent={ListboxComponent}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          label={label}
          variant='outlined'
          placeholder={placeholder}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
      onChange={(_, value) => onChangeValue && onChangeValue(value)}
    />
  );
};

export default AutoCompleteComboBox;
