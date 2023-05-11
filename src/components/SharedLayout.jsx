import { Outlet } from "react-router-dom";
import { NavContainer,Header, NavList, NavListItem, StyledLink } from "components/SharedLayout.styled";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";

export const SharedLayout = () => {
    const location = useLocation();
    return (
        <div>
            <Header>
                <NavContainer>
                    <nav>
                        <NavList>
                            <NavListItem>
                                <StyledLink to="/" state={{ from: location }}>Home</StyledLink>
                            </NavListItem>
                            <NavListItem>
                                <StyledLink to="/movies" state={{ from: location }}>Movies</StyledLink>
                            </NavListItem>
                        </NavList>
                    </nav>
                </NavContainer>         
            </Header>
            <main>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
        </div>
    )
}