import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  border-radius: 15px;
  margin: 0px auto;
  padding: 10px;
`;

export const ContactItem = styled.li`
  display: flex;
  font-size: 30px;
  font-weight: 500;
  width: 500px;
  border: 2px solid yellow;
  border-radius: 5px;
  padding: 10px;
  background: linear-gradient(160deg, #f0ade4, #d108ec);
`;

export const ContactListButton = styled.button`
  font-size: 24px;
  color: white;
  margin-left: auto;
  border-radius: 23%;
  border: inherit;
  background: linear-gradient(160deg, #ed8bf8, #6d0462);
  padding: 10px;
  cursor: pointer;
  transition: 250ms transform ease-in-out, 250ms box-shadow ease-out,
    250ms color ease-in;
  :hover {
    transform: scale(1.05);
    font-size: 28px;
    color: #f8f856;
    box-shadow: 1px 3px 2px blanchedalmond, -1px -3px 5px #ed8bf8;
  }
`;

export const ContactNumber = styled.span`
  font-weight: 600;
`;