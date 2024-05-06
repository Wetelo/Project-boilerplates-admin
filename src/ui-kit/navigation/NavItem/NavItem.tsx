import { ExpandLess, ExpandMore, SvgIconComponent } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styles } from './styles';

interface INavItemProps {
  path: string;
  name?: string;
  icon: SvgIconComponent;
  children?: INavItemProps[];
}

export const NavItem: React.FC<INavItemProps> = ({ path, name, icon: Icon, children }) => {
  const navigate = useNavigate();

  const hasChildren = !!children;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onItemClick = () => {
    if (!hasChildren) {
      navigate(path);
    }
  };

  return (
    <>
      <ListItem key={name} disablePadding onClick={handleClick} sx={styles.listItem}>
        <ListItemButton onClick={onItemClick}>
          <ListItemIcon>
            <Icon sx={styles.icon} />
          </ListItemIcon>
          <ListItemText primary={name} sx={styles.listItemText} />
          {hasChildren && (open ? <ExpandLess sx={styles.icon} /> : <ExpandMore sx={styles.icon} />)}
        </ListItemButton>
      </ListItem>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={styles.list}>
            {children.map((item) => (
              <NavItem {...item} key={item.name} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
