import { makeStyles } from "@mui/styles";

const useCommonStyles = makeStyles((theme) => ({
  colorTextCompleted: {
    color: "#2e7d32",
  },
  colorTextInprocess: {
    color: "#ed6c02",
  },
  colorTextNew: {
    color: "#ed6c02",
  },
  chipHigh: {
    backgroundColor: "#d32f2f",
    color: "#fff",
  },
  chipMedium: {
    backgroundColor: "#0288d1",
    color: "#fff",
  },
  chipLow: {
    backgroundColor: "#0288d1",
    color: "#fff",
  },
  textCapitalize: {
    textTransform: "capitalize",
  },
}));

export default useCommonStyles;
