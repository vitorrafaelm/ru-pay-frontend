import { InputContainer, Input } from "./styles";
import { Search } from "@mui/icons-material";

export function SearchInput(): JSX.Element {
  return (
    <InputContainer>
      <Input
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />

      <Search fontSize="medium" />
    </InputContainer>
  );
}
