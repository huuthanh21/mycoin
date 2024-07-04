import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomTextField = styled((props: any) => <TextField {...props} />)(
	({ theme }) => ({
		"& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
			borderColor: theme.palette.grey[200],
		},
		"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
			color: theme.palette.text.secondary,
			opacity: "1",
		},
		"& .MuiOutlinedInput-input::-webkit-input-placeholder": {
			color: theme.palette.text.secondary,
			opacity: "0.8",
		},
	})
);

export default CustomTextField;
