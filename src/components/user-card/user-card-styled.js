import styled from 'styled-components';

export const StyledUserCardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  gap: 20px;
  border-bottom: 1px solid #262626;
`;

export const StyledUserCardImgContainer = styled.div`
  width: 100px;
  height: 100px;
`;

export const StyledUserCardImg = styled.img`
  width: 100%;
`;

export const StyledUserCardBio = styled.p`
  margin: 0;
  padding: .2rem 0;
  font-size: .9rem;
`;