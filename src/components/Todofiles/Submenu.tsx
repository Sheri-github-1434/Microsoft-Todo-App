import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from '../../models/SidebarItem';

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    font-family: sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.2rem;
    font-size: 0.9rem;
    padding: 2rem;
    text-decoration: none;
    color: black;
    &:hover {
         color: #0275d8;
    }
    &:focus {
        border-right: 3px solid #0275d8;
        color: #0275d8;
        background-color: rgba(100,100,256, 0.2);
    }
`;

const SidebarLabel = styled.span`
    margin-left: 0.5rem;
`;


const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </SidebarLink>
            {subnav &&
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <> </>
                    )
                })}
        </>
    );
};

export default Submenu;