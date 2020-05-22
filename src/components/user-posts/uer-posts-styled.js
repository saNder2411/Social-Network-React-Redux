import styled from 'styled-components';


export const StyledUserPostsBody = styled.div`
  display: grid;
  gap: 10px;
`;

export const StyledTextareaContainer = styled.div`
  border-bottom: 1px solid #262626;
  padding: 10px 0;

  & textarea {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 10px;
    display: block;
    color: #f0f0f0;
    background: #212121;
    border: 1px solid #000000;
    box-shadow: inset 0px 0px 0px 1px #2c2c2c;
    box-sizing: border-box;
  }

  & textarea::placeholder {
    font-style: italic;
  }

  & button {
    display: block;
    margin: 10px 0;
    margin-left: auto;
    background: linear-gradient(to bottom, #fdb424 0%,#dc9302 100%);
    font-size: 16px;
    padding: 5px 14px 5px 14px;
    color: #000000;
    box-shadow: inset 0px 0px 0px 1px #fed161;
    text-shadow: none;
    border: 1px solid #000000;
    cursor: pointer;
    line-height: 1.0em;
    border-radius: 0px;
    font-weight: normal;
  }
`;
