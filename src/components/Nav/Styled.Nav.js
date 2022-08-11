import styled from 'styled-components';

const S = {};

S.Nav = styled.div`
  height: 80px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 30px;
`;

S.NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 83%;
  height: 80px;
  margin: 0 auto;
`;

S.NavTitle = styled.span`
  display: flex;
  height: 28px;
  font-size: 25px;
  font-weight: 500;
  font-family: 'One-Mobile-Pop';
  color: ${({ theme }) => theme.logogreen};
  cursor: pointer;
`;

S.NavInputBox = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: -0.9;
  width: 20%;
  margin-right: 6%;
`;

S.NavInputTitle = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;

S.NavInput = styled.input`
  outline: none;
  border: none;
  width: 80%;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.logogreen};
  }
`;

S.NavRight = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.NavLogin = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.logogreen};
  padding: 10px;
  border-radius: 15px;
  color: ${({ theme }) => theme.white};
  font-size: 15px;
  cursor: pointer;
`;

S.NavPostIcon = styled.img`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.lightGray};
  cursor: pointer;
`;

export default S;
