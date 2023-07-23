import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface INavbarItem {
  icon: React.ReactElement;
  title: string;
  to: string;
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  padding: 0.25rem 1rem;
  gap: 0.5rem;
  color: #495057;
  font-size: 18px;
  &.active {
    background-color: #fff;
    color: #343a40;
  }
`;
function NavbarItem({ icon, title, to }: INavbarItem) {
  return (
    <StyledNavLink to={to}>
      {icon}
      <span>{title}</span>
    </StyledNavLink>
  );
}

export default NavbarItem;
