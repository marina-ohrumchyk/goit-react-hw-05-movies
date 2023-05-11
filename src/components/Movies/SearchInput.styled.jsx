import styled from "@emotion/styled";

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
	margin-right: 10px;
	padding: 10px;
	border-radius: 8px;
	font-family: Georgia, "Times New Roman", Times, serif;
`

export const SubmitButton = styled.button`
    display: block;
	padding: 3px 5px 2px 5px;
	color: #FFF;
	background: #536dfe;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	width: 100px;
	max-width: 150px;
    height: 45px;
	border: 1px solid;
	border-radius: 8px;
	border-width: 1px 1px 3px;

    :hover {
        background: #0000FF;
    } 
`

export const Label = styled.label`
    display: block;
    font-size: 20px;
`

export const SearchFormInput = styled.input`
    font-family: Georgia, "Times New Roman", Times, serif;
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 18px;
	margin: 10px;
	outline: 0;
	padding: 10px;
	box-sizing: border-box; 
	background-color: #e8eeef;
	color:	#000000;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
`

