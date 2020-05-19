import styled from 'styled-components';

export const HeaderBody = styled.header`
  padding: 10px 20px;
  min-height: 60px;
  grid-column: 1 / -1;
  color: whitesmoke;
  background-color: teal;
`;

export const FooterBody = styled.footer`
  padding: 10px 20px;
  min-height: 60px;
  grid-column: 1 / -1;
  color: whitesmoke;
  text-align: center;
  background-color: teal;
`;

export const ImgLogo = styled.img`
  width: 50px;
`;

export const NavbarBody = styled.nav`
  grid-column: 1 / 2;
  background-color: teal;
`;

export const NavbarList = styled.ul`&& {
  padding: 10px 20px;
}`;

const PageBody = styled.main`
grid-column: 2 / -1;
display: grid;
gap: 10px;
`;

export const ProfileBody = styled(PageBody)`
  min-height: 20rem;
`;

export const ProfileBanner = styled.div`
  background-color: rgb(213, 224, 64);
  min-height: 100px;
`;

export const UserCardBody = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 10px;
  outline: 2px solid blue;
`;

export const UserCardImgContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: steelblue;
`;

export const UserPostsBody = styled.div`
  display: grid;
  gap: 10px;
  outline: 2px solid blue;
`;

export const DialogsBody = styled(PageBody)`
  min-height: 25rem;
  background-color: tomato;
`;

export const NewsBody = styled(PageBody)`
  min-height: 25rem;
  background-color: bisque;
`;

export const MusicBody = styled(PageBody)`
  min-height: 25rem;
  background-color: bisque;
`;

export const SettingsBody = styled(PageBody)`
  min-height: 25rem;
  background-color: palegoldenrod;
`;