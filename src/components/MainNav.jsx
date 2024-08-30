import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { useRouter } from 'next/router'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAtom } from 'jotai'
import { searchHistoryAtom } from '@/store'


export default function MainNav(){
    const [searchText, setSearchText] = useState('')
    const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom)
    const [isExpanded, setIsExpanded] = useState(false)
    
    const router = useRouter();

    const searchButtonPressed = (e) => {
        setIsExpanded(false)
        let queryString = `title:true&q:${searchText}`
        setSearchHistory(current => [...current, queryString]);
        e.preventDefault();
        router.push(`/artwork?title=true&q=${searchText}`)  //router.push will take user to different route

    }    

    return(<>
        <Navbar expand="lg" className="fixed-top navbar-dark bg-dark" expanded={isExpanded}>
        <Container>
            <Navbar.Brand>Luckshihaa Krishnan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link active={router.pathname === "/"} expanded={isExpanded}>Home</Nav.Link></Link>
            <Link href="/search" passHref legacyBehavior><Nav.Link active={router.pathname === "/search"} expanded={isExpanded}>Advanced Search</Nav.Link></Link>
            </Nav>
            &nbsp;
            <form class="d-flex" onSubmit={searchButtonPressed}>
                <input type="search" value={searchText} onChange={(e)=> setSearchText(e.target.value)} placeholder="Search" aria-label="Search" />
                &nbsp; <Button type="submit" variant="outline-success">Search</Button>
            </form>
            &nbsp;
            <Nav>
                <NavDropdown title="User Name" id="basic-nav-dropdown">
                    <Link href="/favourites" passHref legacyBehavior><NavDropdown.Item active={router.pathname === "/favourites"}>Favourites</NavDropdown.Item></Link>
                    <Link href="/history" passHref legacyBehavior><NavDropdown.Item active={router.pathname === "/history"}>Search History</NavDropdown.Item></Link>
                </NavDropdown>
            </Nav>
           

        </Navbar.Collapse>
        </Container>
        
        </Navbar>
        <br/><br/>
    </>)
}
